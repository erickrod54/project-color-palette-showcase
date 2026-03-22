import React from 'react';

/**color-palette-showcase version 1.00 - PaletteCard -
 * Features:
 * 
 *      --> Building 'PaletteCard'       
 * 
 * Notes: This provider will be migrated later with the 
 * rest of the providers
 */

export default function PaletteCard({ title, description, colors, isDark = false }) {
  return (
    <div className={`p-8 rounded-2xl shadow-xl border ${isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'} transition-all duration-300`}>
      <div className="mb-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm opacity-70 italic">{description}</p>
      </div>
     
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {colors.map((c) => (
          <div key={c.label} className="flex flex-col gap-2">
            {/* INLINE STYLE USED HERE FOR DYNAMIC HEX COLORS */}
            <div 
              style={{ backgroundColor: c.hex }} 
              className="h-16 w-full rounded-lg shadow-inner border border-black/10" 
            />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider">{c.label}</span>
              <span className="text-[10px] font-mono opacity-60">{c.hex}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}