import React from "react";
import {VariantEnum} from "@/components/variants";
import {HeadedCard} from "@/components/unit/content/Card/headed-card";

interface GridProps {
  children: React.ReactNode;
  variant: VariantEnum;
  height: string | number;
  width: string | number;
  fillDirection?: 'rows' | 'columns';
}

export const HeadedGrid: React.FC<GridProps> = ({
  children,
  variant,
  height,
  width,
  fillDirection = 'rows'
}) => {
  const childCount = React.Children.count(children);
  const isAutoHeight = height === 'auto';

  let columns, rows;

  if (isAutoHeight) {
    if (fillDirection === 'rows') {
      columns = Math.ceil(Math.sqrt(childCount));
      rows = Math.ceil(childCount / columns);
    } else {
      rows = Math.ceil(Math.sqrt(childCount));
      columns = Math.ceil(childCount / rows);
    }
  } else {
    // Calculate based on aspect ratio for better space usage
    const aspectRatio = typeof width === 'number' && typeof height === 'number'
      ? width / height
      : 1;

    if (fillDirection === 'rows') {
      columns = Math.ceil(Math.sqrt(childCount * aspectRatio));
      rows = Math.ceil(childCount / columns);
    } else {
      rows = Math.ceil(Math.sqrt(childCount / aspectRatio));
      columns = Math.ceil(childCount / rows);
    }
  }

  return (
    <HeadedCard variant={variant} width={String(width)} height={String(height)} style={{justifyContent: 'center'}}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          gridTemplateRows: isAutoHeight ? 'auto' : `repeat(${rows}, minmax(0, 1fr))`,
          placeItems: 'center',
          gridAutoFlow: fillDirection === 'rows' ? 'row' : 'column',
          gap: '10px',
          boxSizing: 'border-box'
        }}
      >
        {children}
      </div>
    </HeadedCard>
  );
};