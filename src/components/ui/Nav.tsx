import { Link, useLocation } from '@tanstack/react-router';
import { GeoShape } from './GeoShape';

const NAV_LINKS = [
  { label: 'Design', to: '/design' },
  { label: 'Develop', to: '/develop' },
  { label: 'Automate', to: '/automate' },
  { label: 'Work', to: '/work' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export function Nav() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-sm border-b border-black/10">
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="font-display text-[28px] font-black text-black tracking-tight" aria-label="Vinay Home">
            VINAY
          </Link>
          
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="nav-link hover:text-red transition-colors duration-150"
                aria-current={location.pathname === link.to ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <GeoShape shape="square" color="red" size={8} className="hidden md:block" />
            <span className="hidden md:block text-label text-black/60">Available for work</span>
          </div>
        </div>
      </div>
    </nav>
  );
}