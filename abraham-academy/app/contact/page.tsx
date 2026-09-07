'use client';

import React, { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Admissions Inquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const phoneNumber = "923135061127";
  const whatsappMessage = encodeURIComponent(
    "Hi! I am interested in joining Abraham Online Academy. Can I get more details?"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate inquiry submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-yellow-500 selection:text-slate-950">
      
      {/* Header Section */}
      <header className="border-b border-slate-200/80 bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-yellow-50 text-yellow-800 border border-yellow-200/80">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
            Contact Abraham Online Academy
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            We’re Here to Help You <span className="text-yellow-600">Grow</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about admissions, course schedules, or tutoring programs? 
            Reach out to our team and we’ll guide you every step of the way.
          </p>
        </div>
      </header>

      {/* Main Two-Column Layout */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Sleek Contact Form (7 Cols on Desktop) */}
          <section className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm">
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                Send Us a Message
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Fill out the form below and an academic advisor will get back to you within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 text-center bg-slate-50 rounded-xl border border-slate-200 shadow-sm space-y-4">
                <div className="w-12 h-12 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Message Received!</h3>
                  <p className="text-sm text-slate-600 mt-1.5 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. We have received your inquiry and an advisor will contact you at <span className="font-semibold text-slate-800">{formData.email}</span>.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      subject: 'General Admissions Inquiry',
                      message: '',
                    });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-yellow-700 hover:text-yellow-800 underline underline-offset-4 cursor-pointer pt-2"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Full Name <span className="text-yellow-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Sarah Khan"
                    className="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 text-sm shadow-sm transition duration-150 ease-in-out focus:outline-none focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/25"
                  />
                </div>

                {/* Email & Phone (Responsive 2-col on tablet/desktop) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address <span className="text-yellow-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@example.com"
                      className="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 text-sm shadow-sm transition duration-150 ease-in-out focus:outline-none focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/25"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 300 1234567"
                      className="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 text-sm shadow-sm transition duration-150 ease-in-out focus:outline-none focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/25"
                    />
                  </div>
                </div>

                {/* Subject / Program of Interest */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Program / Inquiry Type
                  </label>
                  <div className="relative">
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-lg text-slate-900 text-sm shadow-sm transition duration-150 ease-in-out focus:outline-none focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/25 appearance-none pr-10 cursor-pointer"
                    >
                      <option value="General Admissions Inquiry">General Admissions Inquiry</option>
                      <option value="Online Quran & Islamic Studies">Online Quran & Islamic Studies</option>
                      <option value="Mathematics & Science Courses">Mathematics & Science Courses</option>
                      <option value="Language & Communication">Language & Communication</option>
                      <option value="One-on-One Custom Tutoring">One-on-One Custom Tutoring</option>
                      <option value="Fee Structure & Schedule">Fee Structure & Schedule</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Message <span className="text-yellow-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your learning goals, preferred class timings, or questions..."
                    className="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 text-sm shadow-sm transition duration-150 ease-in-out focus:outline-none focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/25 resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-lg bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600 text-slate-950 font-semibold text-sm tracking-wide shadow-sm hover:shadow transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-slate-950" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-500 pt-1">
                  We respect your privacy. Your information is securely handled and never shared.
                </p>
              </form>
            )}
          </section>

          {/* RIGHT COLUMN: Contact Information (5 Cols on Desktop) */}
          <section className="lg:col-span-5 space-y-5">
            
            {/* Typography Header */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-yellow-600">
                Direct Contact
              </span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mt-1">
                Academy Information
              </h2>
              <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                Connect directly with our administration and faculty members through any of our official channels.
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-3.5">
              
              {/* WhatsApp & Phone */}
              <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-50 text-yellow-700 border border-yellow-200/70 flex items-center justify-center shrink-0 shadow-sm">
                  {/* Phone / Call SVG Icon */}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Phone & WhatsApp
                  </p>
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm sm:text-base font-semibold text-slate-900 hover:text-yellow-600 transition-colors inline-block mt-0.5"
                  >
                    +92 313 5061127
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Direct guidance & immediate admission support
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-50 text-yellow-700 border border-yellow-200/70 flex items-center justify-center shrink-0 shadow-sm">
                  {/* Email / Envelope SVG Icon */}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Email Inquiries
                  </p>
                  <a 
                    href="mailto:tayyabamusa747@gmail.com" 
                    className="text-sm sm:text-base font-semibold text-slate-900 hover:text-yellow-600 transition-colors break-all inline-block mt-0.5"
                  >
                    tayyabamusa747@gmail.com
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Admissions, partnerships, and verification
                  </p>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-50 text-yellow-700 border border-yellow-200/70 flex items-center justify-center shrink-0 shadow-sm">
                  {/* Map Marker SVG Icon */}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Campus & Office
                  </p>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    Faizabad Campus
                  </p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Office 8, 3rd Floor, Sarwar Plaza Shamsabad, Murree Road, Rawalpindi, Pakistan
                  </p>
                </div>
              </div>

              {/* Support Hours Card */}
              <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-50 text-yellow-700 border border-yellow-200/70 flex items-center justify-center shrink-0 shadow-sm">
                  {/* Clock / Schedule SVG Icon */}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Working Hours
                    </p>
                    <span className="text-[11px] font-medium px-2 py-0.5 bg-slate-100 text-slate-700 rounded-full border border-slate-200/60">
                      Mon – Sat
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    9:00 AM – 9:00 PM <span className="text-xs text-slate-500 font-normal">(PKT)</span>
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    International student support available 24/7 across UK, USA, & Middle East time zones.
                  </p>
                </div>
              </div>

            </div>

            {/* Direct WhatsApp Callout Banner */}
            <div className="rounded-xl p-5 bg-gradient-to-br from-[#001a41] to-slate-900 text-white shadow-sm border border-slate-800">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Online Now
                </div>
                <span className="text-[11px] text-slate-400">Fast response</span>
              </div>
              
              <h3 className="text-sm sm:text-base font-semibold text-white">
                Need an immediate answer?
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Chat directly with our academic advisor on WhatsApp for fee details, trial class bookings, and instant admissions.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full py-2.5 px-4 rounded-lg bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600 text-slate-950 font-semibold text-xs tracking-wide transition duration-150 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Start WhatsApp Chat</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

          </section>

        </div>
      </main>

    </div>
  );
}