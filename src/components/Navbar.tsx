import { Link, NavLink, useLocation } from 'react-router-dom'
import { Moon, Sun, Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/research', label: 'Research' },
  { to: '/projects', label: 'Projects' },
  { to: '/talks', label: 'Talks' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' }
]

export default function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-charcoal/80 backdrop-blur border-b border-black/5 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-accent text-white grid place-items-center font-semibold">NT</div>
            <span className="font-display text-lg tracking-wide">Nebiyu Tefera</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm hover:text-accent transition ${isActive ? 'text-accent' : 'text-gray-700 dark:text-gray-300'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>
          <div className="md:hidden flex items-center gap-2">
            <button
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(v => !v)}
              className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5"
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-black/5 dark:border-white/5"
          >
            <div className="px-4 py-3 space-y-2">
              {navItems.map(item => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `block px-2 py-2 rounded hover:bg-black/5 dark:hover:bg-white/5 ${isActive ? 'text-accent' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

