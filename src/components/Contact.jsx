import { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaCheckCircle, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { personalInfo } from '../data'

const loadDraft = () => {
  try {
    const raw = localStorage.getItem('form_draft')
    if (raw) {
      const parsed = JSON.parse(raw)
      return {
        name: parsed.name || '',
        email: parsed.email || '',
        message: parsed.message || '',
      }
    }
  } catch (e) {
    console.error('Failed to parse form draft from localStorage:', e)
  }
  return { name: '', email: '', message: '' }
}

const saveFieldToDraft = (field, value) => {
  try {
    const current = loadDraft()
    const updated = {
      ...current,
      [field]: value,
    }
    localStorage.setItem('form_draft', JSON.stringify(updated))
  } catch (e) {
    console.error('Failed to save form draft to localStorage:', e)
  }
}

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const initialValues = useRef(loadDraft())
  const formRef = useRef(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues.current,
    mode: 'onSubmit',
  })

  // Synchronize any native input/change events to localStorage under 'form_draft'
  useEffect(() => {
    const form = formRef.current
    if (!form) return

    const handleInputOrChange = (e) => {
      const target = e.target
      if (target && target.name && ['name', 'email', 'message'].includes(target.name)) {
        saveFieldToDraft(target.name, target.value)
      }
    }

    form.addEventListener('input', handleInputOrChange)
    form.addEventListener('change', handleInputOrChange)

    return () => {
      form.removeEventListener('input', handleInputOrChange)
      form.removeEventListener('change', handleInputOrChange)
    }
  }, [])

  const onSubmit = (data) => {
    console.log('Form submission received:', data)
    // Update draft with submitted data
    localStorage.setItem('form_draft', JSON.stringify(data))
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
    }, 6000)
  }

  const nameRegister = register('name', {
    required: 'Name is required',
  })

  const emailRegister = register('email', {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Please enter a valid email address',
    },
  })

  const messageRegister = register('message', {
    required: 'Message is required',
  })

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-wider text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20"
        >
          Get In Touch
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-4 mb-3"
        >
          Let's Build Something Great
        </motion.h2>
        <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Have a project in mind, looking to collaborate, or just want to connect? Send a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-2xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 shadow-sm backdrop-blur-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 mt-0.5">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium text-slate-500 dark:text-slate-400">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-slate-800 dark:text-slate-200 font-semibold hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 mt-0.5">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium text-slate-500 dark:text-slate-400">Location</p>
                  <p className="text-slate-800 dark:text-slate-200 font-semibold">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/50">
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Drafts are automatically saved to your browser so you won't lose your work if you refresh or navigate away.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-2xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 shadow-sm backdrop-blur-sm">
            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm font-medium">
                  Thank you! Your message has been recorded successfully.
                </p>
              </div>
            )}

            <form
              ref={formRef}
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              {/* Name Input */}
              <div>
                <label
                  htmlFor="contact-name-input"
                  className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                >
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-name-input"
                  type="text"
                  data-testid="contact-name"
                  defaultValue={initialValues.current.name}
                  {...nameRegister}
                  onChange={(e) => {
                    saveFieldToDraft('name', e.target.value)
                    nameRegister.onChange(e)
                  }}
                  onInput={(e) => {
                    saveFieldToDraft('name', e.target.value)
                  }}
                  placeholder="e.g. John Doe"
                  className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.name
                      ? 'border-red-500 focus:ring-red-400'
                      : 'border-slate-200 dark:border-slate-700 focus:ring-cyan-400'
                  }`}
                />
                {errors.name && (
                  <p data-testid="name-error" className="text-xs font-semibold text-red-500 mt-1.5">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="contact-email-input"
                  className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-email-input"
                  type="email"
                  data-testid="contact-email"
                  defaultValue={initialValues.current.email}
                  {...emailRegister}
                  onChange={(e) => {
                    saveFieldToDraft('email', e.target.value)
                    emailRegister.onChange(e)
                  }}
                  onInput={(e) => {
                    saveFieldToDraft('email', e.target.value)
                  }}
                  placeholder="e.g. john.doe@example.com"
                  className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.email
                      ? 'border-red-500 focus:ring-red-400'
                      : 'border-slate-200 dark:border-slate-700 focus:ring-cyan-400'
                  }`}
                />
                {errors.email && (
                  <p data-testid="email-error" className="text-xs font-semibold text-red-500 mt-1.5">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="contact-message-input"
                  className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-message-input"
                  rows={5}
                  data-testid="contact-message"
                  defaultValue={initialValues.current.message}
                  {...messageRegister}
                  onChange={(e) => {
                    saveFieldToDraft('message', e.target.value)
                    messageRegister.onChange(e)
                  }}
                  onInput={(e) => {
                    saveFieldToDraft('message', e.target.value)
                  }}
                  placeholder="Write your message here..."
                  className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all resize-y ${
                    errors.message
                      ? 'border-red-500 focus:ring-red-400'
                      : 'border-slate-200 dark:border-slate-700 focus:ring-cyan-400'
                  }`}
                />
                {errors.message && (
                  <p data-testid="message-error" className="text-xs font-semibold text-red-500 mt-1.5">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                data-testid="contact-submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <FaPaperPlane className="w-3.5 h-3.5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact