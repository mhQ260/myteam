import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({tasksOvr, tasksFin, tasksInPro}) => {

  const data = {
    labels: ['My tasks', 'Finished', 'In Progress'],
  datasets: [
    {
      label: '% tasks',
      data: [tasksOvr, tasksFin, tasksInPro],
      backgroundColor: [
        '#3a3a3a',
        '#1976d3',
        '#64b5f6'
      ],
      borderColor: [
        '#fff',
        '#fff',
        '#fff'
      ],
      borderWidth: 2,
    },
  ],

  }

  const options = {
    plugins: {
      legend: {
          labels: {
              font: {
                  size: 10
              },
          },
          display: false,
      },
      title: {
      }
    },
  }

  return <Doughnut data={data} options={options} />;
}

export default DoughnutChart;