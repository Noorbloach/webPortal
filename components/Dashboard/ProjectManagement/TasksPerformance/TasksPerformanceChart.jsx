import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const TasksPerformanceChart = () => {
  // Use state to manage series and options
  const [series] = useState([76, 67, 61, 90]);
  const [options] = useState({
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "25%",
          background: "transparent",
        },
        dataLabels: {
          name: { show: false },
          value: { show: false },
        },
      },
    },
    colors: ["#757FEF", "#9EA5F4", "#C8CCF9", "#F1F2FD"],
    labels: ["Completed", "Active", "Assigned", "Pending"],
    legend: {
      show: true,
      floating: true,
      fontSize: "13px",
      position: "left",
      offsetY: 0,
      labels: { color: "#5B5B98" },
      markers: { size: 0 },
      formatter: (seriesName, opts) => 
        `${seriesName}: ${opts.w.globals.series[opts.seriesIndex]}`,
      itemMargin: { vertical: 3 },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { height: 280 },
          legend: { show: false },
        },
      },
    ],
    fill: { opacity: 1 },
  });

  return (
    <>
      <Chart
        options={options}
        series={series}
        type="radialBar"
        height={355}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "center",
          mt: "22px",
        }}
      >
        <Box>
          <Typography color="#A9A9C8" mb={1} fontSize="14px">
            Target
          </Typography>
          <Typography fontWeight="500" fontSize="18px" component="h4">
            <ArrowDownwardIcon
              color="error"
              sx={{ position: "relative", top: "3px" }}
            />{" "}
            30k
          </Typography>
        </Box>

        <Box>
          <Typography color="#A9A9C8" mb={1} fontSize="14px">
            Last Week
          </Typography>
          <Typography fontWeight="500" fontSize="18px" component="h4">
            <ArrowUpwardIcon
              color="success"
              sx={{ position: "relative", top: "3px" }}
            />{" "}
            40k
          </Typography>
        </Box>

        <Box>
          <Typography color="#A9A9C8" mb={1} fontSize="14px">
            Last Month
          </Typography>
          <Typography fontWeight="500" fontSize="18px" component="h4">
            <ArrowUpwardIcon
              color="success"
              sx={{ position: "relative", top: "3px" }}
            />{" "}
            60k
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default TasksPerformanceChart;
