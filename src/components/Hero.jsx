import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-white/80" />

      <header className="relative z-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-white/90">
          <div className="text-lg font-semibold tracking-tight">Archviz Interiors</div>
          <div className="hidden gap-6 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/80">Interior Designer • Lucknow, India</p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Shruti Agarwal
          </h1>
          <p className="mt-4 text-lg text-white/90 md:text-xl">
            Crafting functional, timeless, and aesthetically balanced spaces—where modern design meets Indian sensibilities.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="pointer-events-auto rounded-md bg-white px-5 py-3 text-sm font-medium text-gray-900 shadow hover:bg-gray-100"
            >
              Book a Consultation
            </a>
            <a
              href="#services"
              className="pointer-events-auto rounded-md border border-white/40 px-5 py-3 text-sm font-medium text-white backdrop-blur hover:border-white"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
