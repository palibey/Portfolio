import {NavigationBar} from "./NavigationBar";
import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import  "./SkillsPage.css"

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);
const data = {
    labels: ['Java', 'Spring Framework', 'React', 'React Native', 'C++', 'Python', 'JavaScript'],
    datasets: [
        {
            label: 'Experience Level ?/10',
            data: [7.5, 7, 7, 5, 4, 5, 7],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
    ],
};

export function SkillsPage() {


    return(
        <div>
            <NavigationBar/>
            <div className="chart-div">
                <div className="chart">
                    <Radar data={data}/>
                </div>
            </div>
        </div>

    );

}
