import React from 'react'
import './Grafico.css'
import { Link } from 'react-router-dom';
import { Chart } from "react-google-charts";


export const data = [
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
    'width':400,
    'height':300     // largua e altura são definidos em options
  },
};

// Grafico dois

export const data2 = [
  ["ID", "Life Expectancy", "Fertility Rate", "Region", "Population"],
  ["CAN", 80.66, 1.67, "North America", 33739900],
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

export const options2 = {
  title:
    "Correlation between life expectancy, fertility rate " +
    "and population of some world countries (2010)",
  hAxis: { title: "Life Expectancy" },
  vAxis: { title: "Fertility Rate" },
  bubble: { textStyle: { fontSize: 11 } },
  'width':600,
  'height':400
};

// Grafico 3

export const data3 = [
  ["Dinosaur", "Length"],
  ["Acrocanthosaurus (top-spined lizard)", 12.2],
  ["Albertosaurus (Alberta lizard)", 9.1],
  ["Allosaurus (other lizard)", 12.2],
  ["Apatosaurus (deceptive lizard)", 22.9],
  ["Archaeopteryx (ancient wing)", 0.9],
  ["Argentinosaurus (Argentina lizard)", 36.6],
  ["Baryonyx (heavy claws)", 9.1],
  ["Brachiosaurus (arm lizard)", 30.5],
  ["Ceratosaurus (horned lizard)", 6.1],
  ["Coelophysis (hollow form)", 2.7],
  ["Compsognathus (elegant jaw)", 0.9],
  ["Deinonychus (terrible claw)", 2.7],
  ["Diplodocus (double beam)", 27.1],
  ["Dromicelomimus (emu mimic)", 3.4],
  ["Gallimimus (fowl mimic)", 5.5],
  ["Mamenchisaurus (Mamenchi lizard)", 21.0],
  ["Megalosaurus (big lizard)", 7.9],
  ["Microvenator (small hunter)", 1.2],
  ["Ornithomimus (bird mimic)", 4.6],
  ["Oviraptor (egg robber)", 1.5],
  ["Plateosaurus (flat lizard)", 7.9],
  ["Sauronithoides (narrow-clawed lizard)", 2.0],
  ["Seismosaurus (tremor lizard)", 45.7],
  ["Spinosaurus (spiny lizard)", 12.2],
  ["Supersaurus (super lizard)", 30.5],
  ["Tyrannosaurus (tyrant lizard)", 15.2],
  ["Ultrasaurus (ultra lizard)", 30.5],
  ["Velociraptor (swift robber)", 1.8],
];

export const options3 = {
  title: "Lengths of dinosaurs, in meters",
  legend: { position: "none" },
  'width':600,
  'height':400
};


const Grafico = () => {

  

  return (
    <div>
        <div className='aling'>
            <div className='container'>
              <div className='alingbar'>
                <div className='navbar'>  {/*Navbar */}
                   <h2>LOGO</h2>
                    <button >Sair</button>
                   <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftecnoblog.net%2Fnoticias%2Fdesenvolvedor-descobre-que-ia-que-gera-imagens-e-otima-para-comprimir-fotos%2F&psig=AOvVaw3TVxuUY2tRRo3x1HktkmJG&ust=1716074922210000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOD-vb3rlYYDFQAAAAAdAAAAABAE " alt="" /> {/*user img */}
                  </div>
              </div>
                <div className='userGrafico'>

                            {/* <Chart
                              chartType="BubbleChart"
                              width="100%"
                              height="400px"
                              data={data2}
                              options={options2}
                              className='grafico'
                            />

                              <Chart
                                chartType="Histogram"
                                width="100%"
                                height="400px"
                                data={data3}
                                options={options3}
                                className='grafico'
                              />

                              <Chart
                                chartType="Histogram"
                                width="100%"
                                height="400px"
                                data={data3}
                                options={options3}
                                className='grafico'
                              />

                              <Chart
                                chartType="Histogram"
                                width="100%"
                                height="400px"
                                data={data3}
                                options={options3}
                                className='grafico'
                              />

                              <Chart
                                chartType="Histogram"
                                width="100%"
                                height="400px"
                                data={data3}
                                options={options3}
                                className='grafico'
                              /> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Grafico
