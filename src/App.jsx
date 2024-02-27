import React, { useState, useEffect } from 'react';
import './App.css';
import Menu from './Components/Menu';
import { fetchAgents } from './Utils/apiService';

function HeroSection() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const agentsData = await fetchAgents();
      setAgents(agentsData);
    }
    fetchData();
  }, []);

  return (
      <div className="w-screen bg-red-100">
        <Menu />
        <div className="container max-w-screen-lg mx-auto px-5">
          <h2 className="text-white text-3xl font-bold mb-4">Valorant Agents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
            {agents.map(agent => (
              <div key={agent.uuid} className="bg-white rounded-lg p-4 flex flex-col items-center">
                <img src={agent.displayIcon} alt={agent.displayName} className="w-32 h-32 mb-2" />
                <p className="text-gray-900 text-center font-semibold">{agent.displayName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default HeroSection;








