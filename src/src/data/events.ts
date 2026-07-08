// src/pages/EventsPage.tsx
import { motion } from 'framer-motion';
import { events } from '../data/events';
import { Calendar, MapPin, Clock, Tag } from 'lucide-react';

export default function EventsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="p-4 pb-24 max-w-md mx-auto"
    >
      <div className="mb-6">
        <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
          Eventet në Tiranë 🎉
        </h1>
        <p className="text-sm text-gray-400">Mos humb asgjë nga jeta kulturore dhe argëtimi</p>
      </div>

      <div className="space-y-4">
        {events && events.length > 0 ? (
          events.map((event) => (
            <div key={event.id} className="group relative rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden shadow-xl transition-all hover:border-pink-500/50">
              {/* Nëse ke imazhe te data/events.ts mund t'i vendosësh këtu, përndryshe përdorim një header me ngjyrë */}
              <div className="h-3 bg-gradient-to-r from-pink-500 to-purple-600" />
              
              <div className="p-4">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="font-bold text-lg text-white group-hover:text-pink-400 transition-colors">
                    {event.name}
                  </h3>
                  <span className="text-[10px] bg-purple-950 text-purple-300 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider whitespace-nowrap">
                    {event.category || 'Kulturë'}
                  </span>
                </div>

                <p className="text-xs text-gray-400 line-clamp-2 mb-4">
                  {event.description || 'Një eksperiencë fantastike që nuk duhet humbur në kryeqytet.'}
                </p>

                {/* Detajet: Data, Vendi, Ora */}
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 border-t border-gray-800/60 pt-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-pink-500" />
                    <span>{event.date || 'Së shpejti'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-pink-500" />
                    <span>{event.time || '19:00'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 col-span-2 mt-1">
                    <MapPin className="h-3.5 w-3.5 text-purple-500 flex-shrink-0" />
                    <span className="truncate">{event.location || 'Tiranë'}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-sm text-gray-500 mt-8">Nuk ka asnjë event të planifikuar për momentin.</p>
        )}
      </div>
    </motion.div>
  );
}
