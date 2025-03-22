import * as React from 'react';

// Basic styled card component
interface CardProps {
  title: string;
  value: string | number;
  unit?: string;
  color?: string;
  children?: React.ReactNode;
}

export function EncyteCard({ title, value, unit, color = 'text-green-400', children }: CardProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow w-full max-w-md mx-auto">
      <div className="text-gray-300">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-center">
          <span className={`${color} text-2xl font-bold`}>{value}</span>
          {unit && <span className="text-gray-400 ml-1">{unit}</span>}
        </p>
        {children}
      </div>
    </div>
  );
}

// Example dashboard component using the card
export default function EncyteDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Encyte Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <EncyteCard 
          title="Performance Score" 
          value={85} 
        />
        
        <EncyteCard 
          title="Recovery Status" 
          value="Optimal" 
          color="text-blue-400"
        />
        
        <EncyteCard 
          title="Hydration Level" 
          value={76} 
          unit="%" 
          color="text-cyan-400"
        />
        
        <EncyteCard 
          title="Training Readiness" 
          value="High" 
          color="text-purple-400"
        />
      </div>
      
      <div className="mt-10 text-center">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">
          View Detailed Analytics
        </button>
      </div>
    </div>
  );
}