import React from 'react'
import styled from 'styled-components'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Chart } from "react-google-charts";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

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

export const Map = [
  ["ID", "Life Expectancy", "Fertility Rate", "Region", "Population"],
  ["CAN", 80.66, 167, "North America", 33739900],
  ["DEU", 79.84, 1.36, "Europe", 81902307],
  ["DNK", 78.6, 1.84, "Europe", 5523095],
  ["EGY", 72.73, 2.78, "Middle East", 79716203],
  ["GBR", 80.05, 2, "Europe", 61801570],
  ["IRN", 72.49, 1.7, "Middle East", 73137148],
  ["IRQ", 68.09, 4.77, "Middle East", 31090763],
  ["ISR", 81.55, 2.96, "Middle East", 7485600],
  ["RUS", 68.6, 1.54, "Europe", 141850000],
  ["USA", 78.09, 2.05, "North America", 307007000],
];

export const optionsMap = {
  title:
    "Correlation between life expectancy, fertility rate " +
    "and population of some world countries (2010)",
  hAxis: { title: "Life Expectancy" },
  vAxis: { title: "Fertility Rate" },
  bubble: { textStyle: { fontSize: 11 } },
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



             
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
             <SwiperSlide className="slidgrafico">
                <Chart
                    chartType="AreaChart"
                    data={data2}
                    width="72vw"
                    height="400px"
                    options={options}
                  />
             </SwiperSlide>

             <SwiperSlide className="slidgrafico">
                <Chart
                    chartType="Table"
                    data={data2}
                    width="72vw"
                    height="400px"
                    options={options}
                  />
             </SwiperSlide>

             <SwiperSlide className="slidgrafico">
                <Chart
                    chartType="BubbleChart"
                    data={Map}
                    width="72vw"
                    height="400px"
                    options={optionsMap}
                  />
             </SwiperSlide>
              
             <SwiperSlide className="slidgrafico">
                <Chart
                    chartType="Bar"
                    data={data2}
                    width="72vw"
                    height="400px"
                    options={options}
                  />
             </SwiperSlide>

             <SwiperSlide className="slidgrafico">
                <Chart
                    chartType="PieChart"
                    data={data2}
                    width="72vw"
                    height="400px"
                    options={options}
                  />
             </SwiperSlide>



           </Swiper>

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
    color:#fff;
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
            background-color: #fff;!important;
            border-color: white !important;
            color: bla !important;
        }
    }
}

.swiper {
  width: 80%;
  height: 100%;
  margin-top:50px;
  margin-left:0px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #191919;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slidgrafico{
  padding:5px;
  margin:5px;
}
`;

