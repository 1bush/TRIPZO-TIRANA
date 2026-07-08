// src/pages/TransportPage.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { busLines } from '../data/busLines';
import { Bus, Search, Clock, MapPin } from 'lucide-react';

export default function TransportPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtro linjat e autobusit sipas kërkimit të përdoruesit
  const filteredLines = busLines.filter(line => 
    line.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    line.stations.some(station => station.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="p-4 pb-24 max-w-md mx-auto"
    >
      <div className="mb-6">
        <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
          Transporti Publik 🚌
        </h1>
        <p className="text-sm text-gray-400">Linjat e autobusëve urbanë në Tiranë</p>
      </div>

      {/* Inputi i Kërkimit */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
        <input
          type="text"
          placeholder="Kërko linjë ose stacion (shg. Kombinat)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-gray-900 border border-gray-800 rounded-xl py-2.5 pl-10 pr-4 text-white text-sm focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* Lista e Linjave */}
      <div className="space-y-4">
        {filteredLines.length > 0 ? (
          filteredLines.map((line) => (
            <div key={line.id} className="p-4 rounded-xl bg-gray-900 border border-gray-800 shadow-md">
              <div className="flex items-center justify-between border-b border-gray-800 pb-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-950 text-blue-400 rounded-lg">
                    <Bus className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">{line.name}</h3>
                    <p className="text-xs text-blue-400 font-medium">{line.schedule || '06:00 - 23:00'}</p>
                  </div>
                </div>
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md font-mono">
                  {line.price || '40 Leke'}
                </span>
              </div>

              {/* Stacionet */}
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-400 leading-relaxed">
                    <span className="text-gray-300 font-semibold">Stacionet kryesore: </span>
                    {line.stations.join(' → ')}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-sm text-gray-500 mt-8">Nuk u gjet asnjë linjë për këtë kërkim.</p>
        )}
      </div>
    </motion.div>
  );
}
