// FourPieCharts.js

import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './pie.css';

const PieChart = ({ chartOptions }) => {
  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

const FourPieCharts = () => {
  const chartOptions1 = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Chart 1',
    },
    series: [
      {
        name: 'Data',
        colorByPoint: true,
        data: [
          { name: 'Category A', y: 30 },
          { name: 'Category B', y: 70 },
        ],
      },
    ],
  };

  const chartOptions2 = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Chart 2',
    },
    series: [
      {
        name: 'Data',
        colorByPoint: true,
        data: [
          { name: 'Category X', y: 40 },
          { name: 'Category Y', y: 60 },
        ],
      },
    ],
  };

  const chartOptions3 = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Chart 3',
    },
    series: [
      {
        name: 'Data',
        colorByPoint: true,
        data: [
          { name: 'Item 1', y: 20 },
          { name: 'Item 2', y: 30 },
          { name: 'Item 3', y: 50 },
        ],
      },
    ],
  };

  const chartOptions4 = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Chart 4',
    },
    series: [
      {
        name: 'Data',
        colorByPoint: true,
        data: [
          { name: 'Option A', y: 25 },
          { name: 'Option B', y: 45 },
          { name: 'Option C', y: 30 },
        ],
      },
    ],
  };

  return (
    <div className="pie-container">
      <div className="pie-chart">
        <PieChart chartOptions={chartOptions1} />
      </div>
      <div className="pie-chart">
        <PieChart chartOptions={chartOptions2} />
      </div>
      <div className="pie-chart">
        <PieChart chartOptions={chartOptions3} />
      </div>
      <div className="pie-chart">
        <PieChart chartOptions={chartOptions4} />
      </div>
    </div>
  );
};

export default FourPieCharts;
