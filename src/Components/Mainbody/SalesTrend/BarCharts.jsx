import React, {useState} from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { 
    name: 'Jan',
    uv: 8,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Feb',
    uv: 15,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Mar',
    uv: 3,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Apr',
    uv: 27,
    pv: 2400,
    amt: 2400
  },
  { 
    name: 'Mei',
    uv: 40,
    pv: 2400,
    amt: 2400
  },
  { 
    name: 'Jun',
    uv: 45,
    pv: 2400,
    amt: 2400
  },
  { 
    name: 'Jul',
    uv: 9,
    pv: 2400,
    amt: 2400
  },
  { 
    name: 'Aug',
    uv: 25,
    pv: 2400,
    amt: 2400
  },
  { 
    name: 'Sep',
    uv: 27,
    pv: 2400,
    amt: 2400
  },
  { 
    name: 'Okt',
    uv: 9,
    pv: 2400,
    amt: 2400
  },
  { 
    name: 'Nov',
    uv: 30,
    pv: 2400,
    amt: 2400
  },
  { 
    name: 'Des',
    uv: 27,
    pv: 2400,
    amt: 2400
  }
];
const CustomXAxisTick = ({ x, y, payload }) => {
  return (
    <text
      x={x}
      y={y}
      dy={26}
      fill="#fff" // Set your desired color here
      fontSize={15}
      fontWeight={800}
      opacity={0.5}
      textAnchor="middle"
    >
      {payload.value}
    </text>
  );
};

const RenderBarChart = () => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label bg-black top-0 relative text-white text-sm px-3 py-2 rounded-xl">{`${label} : ${payload[0].value}`}</p>
          {/* Customize additional content as needed */}
          
        </div>
      );
    }
    return null;
  };
  const [focusBar, setFocusBar] = useState(null);
  return (
   <div className='flex justify-center items-center'>
    <ResponsiveContainer width="100%" height={350}>
     <BarChart  barGap={10} barCategoryGap="20%" data={data} className='transform translate-x-[-20px]' onMouseMove={(state) => {
   if (state.isTooltipActive) {
     setFocusBar(state.activeTooltipIndex);
   } else {
     setFocusBar(null);
   }
}}>
      onMouseMove={(state) => {
   if (state.isTooltipActive) {
     setFocusBar(state.activeTooltipIndex);
   } else {
     setFocusBar(null);
   }
}}

<defs>
            {/* Define linear gradient */}
            <linearGradient id="colorGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#ebfaf6', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#34caa5', stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          
      <XAxis dataKey="name" className=''stroke=""  tick={<CustomXAxisTick />}  />
      <YAxis className='' axisLine={false} domain={[0, 50]} tickLine={false}
            ticks={[10, 20, 30, 40, 50]}/>
     
      <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="uv" fill="#ebfaf6" className='rounded-3xl hover:bg-red-400' radius={[20, 20, 0, 0]}>
      {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={focusBar === index ? 'url(#colorGradient)' : '#ebfaf6'}
              />
            ))}
      </Bar>
    </BarChart>
    </ResponsiveContainer>
   </div>
  );
};

export default RenderBarChart;
