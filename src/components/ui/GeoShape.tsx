import { clsx } from 'clsx';

interface GeoShapeProps {
  shape: 'circle' | 'square' | 'triangle';
  color: 'red' | 'blue' | 'lime' | 'teal' | 'orange' | 'black' | 'cream';
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const colorMap = {
  red: 'var(--red)',
  blue: 'var(--blue)',
  lime: 'var(--lime)',
  teal: 'var(--teal)',
  orange: 'var(--orange)',
  black: 'var(--black)',
  cream: 'var(--cream)',
};

export function GeoShape({ shape, color, size = 120, className, style }: GeoShapeProps) {
  const baseStyle: React.CSSProperties = {
    width: size,
    height: size,
    backgroundColor: colorMap[color],
    ...style,
  };

  const shapeClasses = {
    circle: 'rounded-full',
    square: '',
    triangle: 'w-0 h-0 bg-transparent border-l-[50%] border-l-transparent border-r-[50%] border-r-transparent border-b-[86.6%]',
  };

  if (shape === 'triangle') {
    return (
      <div
        className={clsx('geometric-shape shape-triangle', className)}
        style={{
          ...baseStyle,
          borderBottomColor: colorMap[color],
          width: 0,
          height: 0,
        } as React.CSSProperties}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={clsx('geometric-shape', shapeClasses[shape], className)}
      style={baseStyle}
      aria-hidden="true"
    />
  );
}