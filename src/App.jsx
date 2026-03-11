import React from 'react';

const PaletteSection = ({ title, description, colors, isDark = false }) => (
  <div className={`p-8 rounded-brand shadow-xl border ${isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'} transition-all duration-300`}>
    <div className="mb-6">
      <h3 className="text-xl font-bold">{title} {isDark && "(Dark Mode)"}</h3>
      <p className="text-sm opacity-70 italic">{description}</p>
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {colors.map((c) => (
        <div key={c.label} className="flex flex-col gap-2">
          <div className={`${c.class} h-16 w-full rounded-lg shadow-inner border border-black/5`} />
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-wider">{c.label}</span>
            <span className="text-[10px] font-mono opacity-60">{c.hex}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen p-6 md:p-12 max-w-5xl mx-auto">
      <header className="mb-12 border-b border-slate-200 pb-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Brand Identity Showcase</h1>
        <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Personal Brand Proposals for Erika Rodriguez</p>
      </header>

      <div className="space-y-16">
        {/* OPTION 3: TECHNICAL PRECISION */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold px-2 text-slate-700">Option 1: Technical Precision</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <PaletteSection 
              title="Authority & Trust" 
              description="Precision and Technology focus."
              colors={[
                { label: 'Deep Navy', class: 'bg-tech-navy', hex: '#1B263B' },
                { label: 'Medical Teal', class: 'bg-tech-teal', hex: '#415A77' },
                { label: 'Silver Steel', class: 'bg-tech-silver', hex: '#E0E1DD' },
                { label: 'Base', class: 'bg-white', hex: '#FFFFFF' },
              ]}
            />
            <PaletteSection 
              isDark
              title="Tech Dark Mode" 
              description="Sleek, digital-first financial interface."
              colors={[
                { label: 'Primary', class: 'bg-tech-teal', hex: '#415A77' },
                { label: 'Surface', class: 'bg-tech-navy', hex: '#1B263B' },
                { label: 'BG', class: 'bg-slate-950', hex: '#020617' },
                { label: 'Text', class: 'bg-tech-silver', hex: '#E0E1DD' },
              ]}
            />
          </div>
        </section>

        {/* PROPOSAL 2: EXECUTIVE MINT */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold px-2 text-slate-700">Option 2: Executive Mint</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <PaletteSection 
              title="Professional" 
              description="Clean, growth-oriented, and modern."
              colors={[
                { label: 'Primary', class: 'bg-exec-primary', hex: '#1E293B' },
                { label: 'Accent', class: 'bg-exec-accent', hex: '#10B981' },
                { label: 'Base', class: 'bg-exec-bg', hex: '#F8FAFC' },
                { label: 'Surface', class: 'bg-white', hex: '#FFFFFF' },
              ]}
            />
            <PaletteSection isDark title="Executive Dark" description="Formal dark theme."
              colors={[
                { label: 'Accent', class: 'bg-exec-accent', hex: '#10B981' },
                { label: 'Surface', class: 'bg-slate-800', hex: '#1E293B' },
                { label: 'BG', class: 'bg-slate-950', hex: '#020617' },
                { label: 'Text', class: 'bg-slate-100', hex: '#F1F5F9' },
              ]}
            />
          </div>
        </section>

        {/* PROPOSAL 3: ROYAL SAND */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold px-2 text-slate-700">Option 3: Royal Sand</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <PaletteSection 
              title="Boutique" 
              description="Sophistication, stability, and premium service."
              colors={[
                { label: 'Primary', class: 'bg-royal-primary', hex: '#374151' },
                { label: 'Accent', class: 'bg-royal-accent', hex: '#D4AF37' },
                { label: 'Base', class: 'bg-royal-bg', hex: '#F5F5F4' },
                { label: 'Surface', class: 'bg-white', hex: '#FFFFFF' },
              ]}
            />
            <PaletteSection isDark title="Royal Dark" description="Luxury aesthetic."
              colors={[
                { label: 'Accent', class: 'bg-royal-accent', hex: '#D4AF37' },
                { label: 'Surface', class: 'bg-stone-800', hex: '#292524' },
                { label: 'BG', class: 'bg-stone-950', hex: '#0C0A09' },
                { label: 'Text', class: 'bg-stone-100', hex: '#F5F5F4' },
              ]}
            />
          </div>
        </section>
      </div>
    </div>
  );
}