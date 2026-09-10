import { GeoShape } from './GeoShape';

const TICKER_ITEMS = [
  'DESIGN',
  'DEVELOP', 
  'AUTOMATE',
  'DESIGN',
  'DEVELOP',
  'AUTOMATE',
  'DESIGN',
  'DEVELOP',
  'AUTOMATE',
];

export function Ticker({ variant = 'default' }: { variant?: 'default' | 'design' | 'develop' | 'automate' | 'work' | 'blog' | 'contact' }) {
  const variants: Record<string, string[]> = {
    default: ['DESIGN', 'DEVELOP', 'AUTOMATE'],
    design: ['UI/UX', 'BRAND', 'SYSTEMS', 'MOTION'],
    develop: ['NEXT.JS', 'REACT', 'SUPABASE', 'API'],
    automate: ['MAKE', 'ZAPIER', 'N8N', 'CUSTOM'],
    work: ['SHIPPED', 'LIVE', 'MEASURABLE', 'REAL'],
    blog: ['WRITTEN', 'DRAWN', 'SHIPPED', 'READ'],
    contact: ['LET\'S BUILD', 'LET\'S BUILD', 'LET\'S BUILD'],
  };

  const items = variants[variant] || variants.default;
  const displayItems = [...items, ...items, ...items];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {displayItems.map((item, index) => (
          <span key={index} className="ticker-item">
            <span>{item}</span>
            <span className="ticker-separator">→</span>
          </span>
        ))}
      </div>
      <GeoShape shape="square" color="red" size={8} className="absolute top-1/2 right-4 -translate-y-1/2" />
    </div>
  );
}