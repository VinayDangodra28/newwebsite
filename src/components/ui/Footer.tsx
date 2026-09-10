import { Link } from '@tanstack/react-router';
import { GeoShape } from './GeoShape';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-cream">
      <div className="container-main">
        <div className="py-16 md:py-24 border-b border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <Link to="/" className="font-display text-[32px] md:text-[48px] font-black tracking-tight">
              VINAY
            </Link>
            <nav className="flex flex-col md:flex-row gap-6 text-label uppercase tracking-widest">
              <Link to="/design" className="hover:text-red transition-colors">Design</Link>
              <Link to="/develop" className="hover:text-blue transition-colors">Develop</Link>
              <Link to="/automate" className="hover:text-lime transition-colors">Automate</Link>
              <Link to="/work" className="hover:text-white transition-colors">Work</Link>
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link to="/contact" className="hover:text-red transition-colors">Contact</Link>
            </nav>
          </div>
        </div>

        <div className="py-16 md:py-24 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-label uppercase tracking-widest text-white mb-4">Get in touch</h4>
              <address className="not-italic text-body text-cream/80 leading-relaxed">
                <a href="mailto:hello@vinay.com" className="hover:text-red transition-colors">hello@vinay.com</a>
                <br />
                Available for projects
                <br />
                Response within 24hrs
              </address>
            </div>

            <div>
              <h4 className="text-label uppercase tracking-widest text-white mb-4">Services</h4>
              <ul className="space-y-2 text-body text-cream/80">
                <li><Link to="/design" className="hover:text-red transition-colors">Custom Websites</Link></li>
                <li><Link to="/automate" className="hover:text-lime transition-colors">CRM Systems</Link></li>
                <li><Link to="/automate" className="hover:text-lime transition-colors">Automation</Link></li>
                <li><Link to="/design" className="hover:text-red transition-colors">Design Systems</Link></li>
                <li><Link to="/develop" className="hover:text-blue transition-colors">Content & SEO</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-label uppercase tracking-widest text-white mb-4">Follow</h4>
              <ul className="space-y-2 text-body text-cream/80">
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-red transition-colors">Twitter/X</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue transition-colors">LinkedIn</a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="https://read.cv" target="_blank" rel="noopener noreferrer" className="hover:text-lime transition-colors">Read.cv</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-6 text-label uppercase tracking-widest text-cream/40">
            <span>© {currentYear} Vinay. All systems running.</span>
            <span>Built by me. Obviously.</span>
          </div>
          <p className="text-label text-cream/30 tracking-widest">
            No templates. No shortcuts. No excuses.
          </p>
        </div>
      </div>

      <GeoShape shape="square" color="blue" size={100} className="absolute bottom-20 left-10 opacity-20" />
      <GeoShape shape="triangle" color="lime" size={80} className="absolute bottom-32 right-20 opacity-20 rotate-180" />
      <GeoShape shape="circle" color="black" size={60} className="absolute top-20 right-10 opacity-10" />
    </footer>
  );
}