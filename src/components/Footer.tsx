import { Link } from 'react-router-dom';
import { Heart, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const footerLinks = {
  tool: [
    { name: 'Anniversary Calculator', href: '/#calculator' },
    { name: 'Card Generator', href: '/#cards' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'FAQ', href: '/#faq' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Disclaimer', href: '/disclaimer' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://www.anniversarycalc.com/' },
  { name: 'Twitter', icon: Twitter, href: 'https://www.anniversarycalc.com/' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.anniversarycalc.com/' },
  { name: 'Email', icon: Mail, href: 'mailto:anniversarycalculator@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Wave SVG */}
      <div className="relative -top-1">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z"
            className="fill-background"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Anniversary Calculator</span>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-sm">
              Calculate your love story with precision. Discover how many years, months, 
              and days you've been together, and create beautiful anniversary cards to celebrate.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Tool Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Tool</h3>
            <ul className="space-y-3">
              {footerLinks.tool.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-white text-sm transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-white text-sm transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-white text-sm transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Anniversary Calculator. All rights reserved.
            </p>
            <p className="text-white/60 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-secondary fill-secondary" /> for couples worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
