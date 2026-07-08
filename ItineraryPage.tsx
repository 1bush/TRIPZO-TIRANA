import { useState } from 'react';
import { pois } from '../data/pois';
import { foodPlaces } from '../data/foodPlaces';

export default function ItineraryPage() {
  const [hours, setHours] = useState(2);
  const [plan, setPlan] = useState<any[]>([]);

  const generatePlan = () => {
    // Logjikë e thjeshtë: Nëse ka 2 orë, sugjero 1 muze + 1 kafe. Nëse ka 5 orë shto dhe një park.
    const selectedPois = [...pois].sort(() => 0.5 - Math.random());
    const selectedFood = [...foodPlaces].sort(() => 0.5 - Math.random());

    if (hours <= 2) {
      setPlan([selectedPois[0], selectedFood[0]]);
    } else {
      setPlan([selectedPois[0], selectedPois[1], selectedFood[0]]);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Gjeneruesi i Itinerarit në Tiranë 🚀</h2>
      <p className="mb-2">Sa orë kohë të lira ke sot?</p>
      <input 
        type="number" 
        value={hours} 
        onChange={(e) => setHours(Number(e.target.value))}
        className="border p-2 rounded mr-2 w-20 text-black"
      />
      <button onClick={generatePlan} className="bg-blue-600 text-white px-4 py-2 rounded">
        Më krijo një ditë "Cool"
      </button>

      <div className="mt-6 space-y-4">
        {plan.map((item, index) => (
          <div key={index} className="p-4 border-l-4 border-blue-500 bg-gray-800 rounded">
            <span className="text-xs uppercase font-bold text-blue-400">{item.type || 'Shtegtim'}</span>
            <h3 className="font-bold text-lg">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
