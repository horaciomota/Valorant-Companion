// apiService.js
export async function fetchAgents() {
    try {
      const response = await fetch('https://valorant-api.com/v1/agents');
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching agents:', error);
      return [];
    }
  }
  