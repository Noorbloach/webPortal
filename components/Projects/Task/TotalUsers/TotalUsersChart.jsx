import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const TotalUsersChart = () => {
  const [series] = useState([44, 55, 13]);
  const [options] = useState({
    labels: ['Target', 'Last Week', 'Last Month'],
    colors: ['#757FEF', '#90C6E0', '#E040FB'],
    legend: {
      show: false,
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}k`,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 270,
          },
        },
      },
    ],
  });

  return (
    <>
      <Chart
        options={options}
        series={series}
        type="pie"
        height={350}
      />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          textAlign: 'center',
          mt: '30px',
        }}
      >
        <Box>
          <Typography color="#A9A9C8" mb={1}>
            Target
          </Typography>
          <Typography 
            fontWeight="500" 
            fontSize="20px" 
            component="h4"
          >
            <ArrowDownwardIcon 
              color="danger" 
              style={{ 
                position: 'relative', 
                top: '3px' 
              }} 
            /> 18k
          </Typography>
        </Box>

        <Box>
          <Typography color="#A9A9C8" mb={1}>
            Last Week
          </Typography>
          <Typography 
            fontWeight="500" 
            fontSize="20px" 
            component="h4"
          >
            <ArrowUpwardIcon 
              color="success" 
              style={{ 
                position: 'relative', 
                top: '3px' 
              }} 
            /> 5.21k
          </Typography>
        </Box>

        <Box>
          <Typography color="#A9A9C8" mb={1}>
            Last Month
          </Typography>
          <Typography 
            fontWeight="500" 
            fontSize="20px" 
            component="h4"
          >
            <ArrowDownwardIcon 
              color="danger" 
              style={{ 
                position: 'relative', 
                top: '3px' 
              }} 
            /> 32k
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default TotalUsersChart;
