import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({tasksOvr, tasksFin}) => {

  const data = {
    labels: [],
  datasets: [
    {
      label: '% tasks',
      data: [tasksOvr, tasksFin],
      backgroundColor: [
        '#f7464a',
        '#21a2ae',
      ],
      borderColor: [
        '#f7464a',
        '#21a2ae',
      ],
    },
  ],

  }

  return <Doughnut data={data} />;
}

export default DoughnutChart;