import React from 'react'
import PieChart from '../charts/chartGender/chartGender';

const data = [
  { name: 'A', value: 30 },
  { name: 'B', value: 70 },
  { name: 'C', value: 45 },
  { name: 'D', value: 65 },
  { name: 'E', value: 20 },
];

const Home = () => {
  return (
    <div>
      <h1>Grafico de Tarta con D3.js y React</h1>
      <PieChart data={data} />
    </div>
  )
}

export default Home