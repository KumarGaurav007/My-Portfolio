import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
    { icon: Github, href: "https://github.com/KumarGaurav007", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/gaurav-kumar-25-oct/", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
];

const footerLinks = [
    { href: "about", label: "About" },
    { href: "projects", label: "Projects" },
    { href: "experience", label: "Experience" },
    { href: "contact", label: "Contact" },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <Link
                            to={"/"}
                            className="text-xl font-bold tracking-tight hover:text-primary"
                        >
                            GK<span className="text-primary"> •</span>
                        </Link>
                        <p className="text-sm text-muted-foreground mt-2">
                            © {currentYear} Gaurav Kumar                                                                                                                       . All rights reserved.
                        </p>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <Link
                                to={link.href}
                                key={link.href}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
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