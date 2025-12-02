import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const isValidEmail = (val: string) => /\S+@\S+\.\S+/.test(val)
  const isValid = name.trim().length > 1 && isValidEmail(email) && message.trim().length > 10

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValid) return
    setStatus('loading')
    try {
      // Simulate async submission. Replace with API or Formspree as needed.
      await new Promise(res => setTimeout(res, 900))
      setStatus('success')
      setName(''); setEmail(''); setMessage('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="space-y-4"
      aria-label="Contact form"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium">Name</label>
        <input
          id="name"
          className="mt-1 w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-charcoal/60 px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">Email</label>
        <input
          id="email"
          type="email"
          className="mt-1 w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-charcoal/60 px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          aria-invalid={email.length > 0 && !isValidEmail(email)}
        />
        {email.length > 0 && !isValidEmail(email) && (
          <p className="mt-1 text-xs text-red-600">Please enter a valid email.</p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium">Message</label>
        <textarea
          id="message"
          rows={5}
          className="mt-1 w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-charcoal/60 px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        />
        {message.length > 0 && message.length < 10 && (
          <p className="mt-1 text-xs text-red-600">Message should be at least 10 characters.</p>
        )}
      </div>
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={!isValid || status === 'loading'}
          className="inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-soft hover:shadow transition disabled:opacity-50"
        >
          {status === 'loading' ? 'Sending…' : 'Send Message'}
        </button>
        {status === 'success' && <span role="status" className="text-sm text-green-600">Message sent successfully.</span>}
        {status === 'error' && <span role="status" className="text-sm text-red-600">Something went wrong.</span>}
      </div>
      <p className="text-xs text-gray-500">
        Alternatively: <a className="text-primary hover:underline" href="mailto:contact@example.com">contact@example.com</a>
      </p>
    </motion.form>
  )
}

