import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">About</h2>
        <p className="mt-2 text-base text-gray-600">Design that feels as good as it looks.</p>
      </div>

      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="prose max-w-none text-gray-800 prose-p:leading-relaxed">
            <p>
              I’m Shruti Agarwal, an Interior Designer based in Lucknow, India — passionate about transforming spaces into functional, timeless, and aesthetically balanced environments. With over two years of experience and a growing portfolio of residential and commercial projects, I bring together creativity, technical precision, and client-centered design to create interiors that truly reflect the people who live and work in them.
            </p>
            <p>
              Since beginning my professional journey in 2023, I’ve worked across multiple scales — from compact apartments to luxury spaces — focusing on how design can enhance comfort, mood, and purpose. My expertise lies in space planning, material selection, and detailed AutoCAD drawings, ensuring every concept is backed by strong execution and attention to detail.
            </p>
            <p>
              Through my design studio, I collaborate closely with clients, architects, and vendors to deliver seamless end-to-end experiences — from the first consultation to final site handover. My approach blends modern aesthetics with Indian sensibilities, often guided by Vaastu principles and practical functionality.
            </p>
            <p>
              Currently, I’m focused on expanding Archviz Interiors, building strong client relationships, and integrating digital systems to streamline the design process. My long-term vision is to make design more approachable, sustainable, and deeply personal for every client. Design, for me, isn’t just about how a space looks — it’s about how it feels, functions, and evolves with you.
            </p>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Highlights</h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-gray-900" /> Residential & Commercial Interiors</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-gray-900" /> Space Planning & Material Selection</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-gray-900" /> AutoCAD Drawings & On-site Execution</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-gray-900" /> Vaastu-informed, Client-centered Approach</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-gray-900" /> Based in Lucknow • Serving PAN India</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
