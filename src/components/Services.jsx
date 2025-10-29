import React from 'react';
import { Home, Building2, Ruler, Palette } from 'lucide-react';

const services = [
  {
    title: 'Residential Interiors',
    desc: 'Warm, functional homes designed around your lifestyle — from compact apartments to luxury spaces.',
    icon: Home,
  },
  {
    title: 'Commercial Spaces',
    desc: 'Purpose-driven offices, studios, and retail environments that elevate brand and productivity.',
    icon: Building2,
  },
  {
    title: 'Space Planning & Vaastu',
    desc: 'Thoughtful layouts aligned with flow, light, and Vaastu principles for harmony and usability.',
    icon: Ruler,
  },
  {
    title: 'Materials & Finishes',
    desc: 'Curated palettes and textures that balance modern aesthetics with timeless Indian sensibilities.',
    icon: Palette,
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Services</h2>
        <p className="mt-2 text-base text-gray-600">End-to-end design with clarity, comfort, and craft.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map(({ title, desc, icon: Icon }) => (
          <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                <Icon className="h-5 w-5 text-gray-800" />
              </span>
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <p className="mt-3 text-gray-700">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
