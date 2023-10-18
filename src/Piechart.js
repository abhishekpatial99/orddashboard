import React, { useEffect, useRef } from 'react'
import { Chart } from 'chart.js/auto';

export default function Piechart() {

    const chartRef=useRef(null);
    const chartInstance =useRef(null);

    useEffect(()=>{
        if(chartInstance.current){
            chartInstance.current.destroy();
        }
        const mychartRef =chartRef.current.getContext("2d");

        chartInstance.current =new Chart(mychartRef,{
            type: 'doughnut',
            data: {
                  datasets:[{
                    data:[10,65,25],
                    backgroundColor: [
                    'rgb(255, 99, 132)',
                    'purple',
                    'whitesmoke'
                  ],  
                }
                  ]
            }
        });
        return()=>{
            if(chartInstance.current){
                chartInstance.current.destroy();
            }
        }
    },[])
  return (
    <>
    <div className='pig' style={{ width:'80%',display:'flex',
    flexwrap:'wrap', marginLeft:'20px'}}>
    <canvas ref={chartRef}>

    </canvas>
    </div>
    </>
  )
}
