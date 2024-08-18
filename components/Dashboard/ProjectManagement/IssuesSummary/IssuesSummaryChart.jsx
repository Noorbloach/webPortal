import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const IssuesSummaryChart = () => {
  const [selection, setSelection] = useState("one_year");

  useEffect(() => {
    // Make sure ApexCharts is only used on the client side
    if (typeof window !== "undefined") {
      // Code that uses ApexCharts directly
      const ApexCharts = require("apexcharts");
    }
  }, []);

  const series = [
    {
      data: [
        [1327359500000, 30.95],
        [1327445000000, 31.34],
        // ... (rest of your data)
        [1361833200000, 38.59],
        [1361919500000, 39.6],
      ],
    },
  ];

  const options = {
    chart: {
      id: "area-datetime",
      zoom: {
        autoScaleYaxis: true,
      },
    },
    annotations: {
      yaxis: [
        {
          y: 30,
          borderColor: "#999",
          label: {
            show: true,
            text: "Support",
            style: {
              color: "#fff",
              background: "#00E396",
            },
          },
        },
      ],
      xaxis: [
        {
          x: new Date("14 Nov 2012").getTime(),
          borderColor: "#999",
          yAxisIndex: 0,
          label: {
            show: true,
            text: "Rally",
            style: {
              color: "#fff",
              background: "#775DD0",
            },
          },
        },
      ],
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      style: "hollow",
    },
    xaxis: {
      type: "datetime",
      min: new Date("01 Mar 2012").getTime(),
      tickAmount: 6,
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
  };

  const updateData = (timeline) => {
    setSelection(timeline);

    const dateRanges = {
      one_month: [new Date("28 Jan 2013").getTime(), new Date("27 Feb 2013").getTime()],
      six_months: [new Date("27 Sep 2012").getTime(), new Date("27 Feb 2013").getTime()],
      one_year: [new Date("27 Feb 2012").getTime(), new Date("27 Feb 2013").getTime()],
      ytd: [new Date("01 Jan 2013").getTime(), new Date("27 Feb 2013").getTime()],
      all: [new Date("23 Jan 2012").getTime(), new Date("27 Feb 2013").getTime()],
    };

    const [start, end] = dateRanges[timeline] || [];
    if (start && end) {
      // Ensure this is only executed in the client environment
      if (typeof window !== "undefined") {
        const ApexCharts = require("apexcharts");
        ApexCharts.exec("area-datetime", "zoomX", start, end);
      }
    }
  };

  return (
    <div id="chart">
      <div className="toolbar">
        {["one_month", "six_months", "one_year", "ytd", "all"].map((period) => (
          <button
            key={period}
            id={period}
            onClick={() => updateData(period)}
            className={selection === period ? "active" : ""}
          >
            {period === "one_month" ? "1M" :
             period === "six_months" ? "6M" :
             period === "one_year" ? "1Y" :
             period === "ytd" ? "YTD" : "All"}
          </button>
        ))}
      </div>
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default IssuesSummaryChart;
