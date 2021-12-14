import React, {useState , useEffect} from 'react';
import { fetchDailyData } from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import { CategoryScale } from 'chart.js/auto';
import './Charts.css';

const Charts= ({data,country}) => {
    const [dailyData,setdailyData]=useState([]);
    useEffect(()=>{
        const fetchAPI=async ()=>{
            setdailyData(await fetchDailyData());
        }
        fetchAPI();
    },[]);
    const lineChart = (
        dailyData.length !==0
         ?(
            <Line
            data={{
                labels: dailyData.map(({ date })=>date),//this is a map which returns an array of all of the dates
                datasets:[{
                    data:dailyData.map(({ confirmed})=>confirmed),
                    label:'infected',
                    borderColor:'#3333ff',
                    fill:true,
                }, {
                    data:dailyData.map(({ deaths})=>deaths),
                    label:'deaths',
                    borderColor:'red',
                    backgroundColor:'rgba(225,0,0,0.5)',
                    fill:true,
                }],
            }}
            />
        ):null
    );
    
    const barChart=(
        data.confirmed
        ?(
            <Bar
            data={{
                labels:['infected','recovered','deaths'],
                datasets :[{
                    label:'people',
                    backgroundColor:['rgba(0, 0, 255, 0.5)',
                                     'rgba(0,255,0,0.5)',
                                     'rgba(255,0,0,0.5)'],
                    data:[data.confirmed.value,data.recovered.value,data.deaths.value],
                }],
                
                }}
            options={{
                legend:{display:false},
                title:{display:true,text:`Current state in ${country}`}
            }}
            />
        ):null
    );
    return(
        <div className="container">
            {country?barChart:lineChart}
        </div>
    );
}
export default Charts; 