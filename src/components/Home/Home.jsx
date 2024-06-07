import React from 'react'
import PieChart from '../Charts/ChartGender/ChartGender';
import { useDispatch, useSelector } from 'react-redux'
//import { salesDataAll} from '../features/chart/chartSlice.js';

const data = [
  { name: 'A', value: 30 },
  { name: 'B', value: 70 },
  { name: 'C', value: 45 },
  { name: 'D', value: 65 },
  { name: 'E', value: 20 },
];

const Home = () => {
  // const {dataAll} = useSelector((state)=>state.dataAll)
  // const dispatch = useDispatch()
  // dispatch(salesDataAll())
  // console.log('data :', dataAll);

  return (
    <div>
      <h1>Grafico de Tarta con D3.js y React</h1>
      <PieChart data={data} />
    </div>
  )
}

export default Home