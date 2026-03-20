"use client"

import { motion } from "framer-motion"
import { Zap, Github, Linkedin, Twitter, ArrowUp } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
]

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#workflow" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 text-foreground mb-4">
              <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Zap className="size-5 text-primary" />
              </div>
              <span className="font-semibold text-lg">Lewis Kago</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building automation systems that eliminate repetitive work and improve productivity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {["Workflow Automation", "AI Integration", "No-Code Development", "Process Optimization", "System Integration"].map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lewis Kago. All rights reserved.
          </p>
          
          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to top
            <ArrowUp className="size-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
