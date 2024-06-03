import React from 'react'
import styled from 'styled-components'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Chart } from "react-google-charts";



export const data2 = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",    
  },
};


const Balance = () => {
  return (
  
    <Section>
            <div className="sales">
                <div className="sales__details">
                    <div>
                        <h4>Balance</h4>
                    </div>
                    <div>
                        <h5>PAST 30 DAY</h5>
                    </div>
                </div>
                <div className="sales__graph">
                    <ResponsiveContainer width="100%" height="150%">

                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" stackId="a" fill="#272727" />
                        <Bar dataKey="uv" stackId="a" fill="#555555" />
                     </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>



              <Chart
                chartType="Bar"
                data={data2}
                width="72vw"
                height="400px"
                options={options}
              />

        </Section>
    )
}

export default Balance

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
{
    name: 'Page H',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page I',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page J',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page K',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },

  ];

  

const Section = styled.section`
.sales{
    color: black;
    width: 100 %;
    .sales__details {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        div{
            display: flex;
            gap: 1rem;
            h5{
                color: gray;
            }
        }
    }
    .sales__graph{
        height: 10rem;
        width: 73vw;
        .recharts-default-tooltip {
            background-color: white !important;
            border-color: white !important;
            color: bla !important;
        }
    }
}
`;

