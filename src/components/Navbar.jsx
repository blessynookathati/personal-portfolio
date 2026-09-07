import { useState } from 'react'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = ({ theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects', testId: 'nav-projects' },
    { name: 'Contact', href: '#contact', testId: 'nav-contact' },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-slate-900 dark:text-white group"
        >
          <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center font-black shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            B
          </span>
          <span className="font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Blessy.dev
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              data-testid={link.testId}
              className="px-4 py-2 text-sm font-medium rounded-lg text-slate-600 hover:text-cyan-500 dark:text-slate-300 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons: Theme Toggle & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            data-testid="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-amber-500 dark:text-cyan-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-sm"
          >
            {theme === 'dark' ? (
              <FaSun className="w-4 h-4 animate-spin-slow" />
            ) : (
              <FaMoon className="w-4 h-4" />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {mobileMenuOpen ? <FaTimes className="w-4 h-4" /> : <FaBars className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-5 space-y-1 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar