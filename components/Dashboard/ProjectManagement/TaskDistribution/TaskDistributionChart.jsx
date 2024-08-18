import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const TaskDistributionChart = () => {
  const state = {
    series: [14, 23, 21, 17],
    options: {
      chart: {
        type: 'polarArea',
        height: 390,
      },
      labels: ['API', 'Frontend', 'Backend', 'Design'],
      colors: ["#B8C8DB", "#A1AADB", "#BA68C8", "#8E72C8"],
      fill: {
        opacity: 0.9,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <Chart
      options={state.options}
      series={state.series}
      height={state.options.chart.height}
      type={state.options.chart.type}
    />
  );
};

export default TaskDistributionChart;
