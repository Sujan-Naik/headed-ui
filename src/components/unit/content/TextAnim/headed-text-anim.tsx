'use client';
import { useState, useEffect } from 'react';
import React from 'react';
import styles from './headed-text-anim.module.css';

export enum TextAnimationType {
  TYPEWRITER = 'typewriter',
  FADE_IN = 'fade-in',
  SLIDE_UP = 'slide-up',
  COLOR_CYCLE = 'color-cycle'
}

interface HeadedTextAnimProps {
  children: React.ReactNode;
  animation: TextAnimationType;
  className?: string;
  speed?: number;
  delay?: number;
  colors?: string[];
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  onComplete?: () => void;
}

export const HeadedTextAnim: React.FC<HeadedTextAnimProps> = ({
  children,
  animation,
  className = '',
  speed = 500,
  delay = 2000,
  colors = ['#ff0000', '#00ff00', '#0000ff'],
  tag: Tag = 'h1',
  onComplete
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const fullText = typeof children === 'string' ? children : '';

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      switch (animation) {
        case TextAnimationType.TYPEWRITER:
          let index = 0;
          const typeTimer = setInterval(() => {
            setDisplayText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) {
              clearInterval(typeTimer);
              onComplete?.();
            }
          }, speed);
          return () => clearInterval(typeTimer);

        case TextAnimationType.FADE_IN:
          setDisplayText(fullText);
          setIsVisible(true);
          setTimeout(() => onComplete?.(), speed);
          break;

        case TextAnimationType.SLIDE_UP:
          setDisplayText(fullText);
          setIsVisible(true);
          setTimeout(() => onComplete?.(), speed);
          break;

        case TextAnimationType.COLOR_CYCLE:
          setDisplayText(fullText);
          const colorTimer = setInterval(() => {
            setCurrentColorIndex(prev => (prev + 1) % colors.length);
          }, speed);
          return () => clearInterval(colorTimer);

        default:
          setDisplayText(fullText);
      }
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [fullText, animation, speed, delay, colors, onComplete]);

  const getAnimationStyle = () => {
    switch (animation) {
      case TextAnimationType.COLOR_CYCLE:
        return { color: colors[currentColorIndex] };
      default:
        return {};
    }
  };

  return (
    <Tag
      className={`${styles[`text-anim-${animation}`]} ${isVisible ? styles.visible : ''} ${className}`}
      style={getAnimationStyle()}
    >
      {displayText}
    </Tag>
  );
};