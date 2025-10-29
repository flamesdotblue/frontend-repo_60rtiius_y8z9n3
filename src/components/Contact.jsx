import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-20">
      <div className="rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-10 text-white shadow-lg">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Let’s design your space</h2>
            <p className="mt-3 text-white/80">
              Share your requirements and schedule a consultation. I’ll respond within 24 hours with next steps.
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/90">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Lucknow, Uttar Pradesh, India</p>
              <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4" /> +91 00000 00000
              </a>
              <a href="mailto:hello@archvizinteriors.com" className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4" /> hello@archvizinteriors.com
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 text-gray-900 shadow-md">
            <form className="grid gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium">Name</label>
                <input className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none ring-0 focus:border-gray-400" placeholder="Your name" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">Email</label>
                  <input type="email" className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-gray-400" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Phone</label>
                  <input className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-gray-400" placeholder="+91" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Message</label>
                <textarea rows={4} className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-gray-400" placeholder="Tell me about your project..." />
              </div>
              <button type="button" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-black">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
