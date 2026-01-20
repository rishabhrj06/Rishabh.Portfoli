
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/rishabhrj06", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/rishabh-prasad-singh-88827820b", label: "LinkedIn" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#cts", label: "Contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-full 2xl:max-w-[90%] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="text-center md:text-left">
           <a href = '#' className="text-xl pl-5 font-bold tracking-tight hover:text-primary">
          Portfolio<span className='text-primary'>.</span>Rishabh
           </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Rishabh Prasad Singh. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
