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
      columns = 3;
      rows = Math.ceil(childCount / columns);
    } else {
      rows = 3;
      columns = Math.ceil(childCount / rows);
    }
  } else {
    // For non-auto height, use a default grid size or make it configurable
    const defaultGridSize = 3;
    if (fillDirection === 'rows') {
      rows = defaultGridSize;
      columns = Math.ceil(childCount / rows);
    } else {
      columns = defaultGridSize;
      rows = Math.ceil(childCount / columns);
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