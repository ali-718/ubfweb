import React from "react";
import styles from "./DonationChart.module.scss";
import ReactApexChart from "react-apexcharts";

const series = [84, 16];
const options = {
  chart: {
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 90,
      offsetY: 10,
      donut: {
        size: "85%",
        labels: {
          show: false,
          value: {
            show: false,
          },
          name: {
            show: false,
          },
          total: {
            show: false,
            showAlways: false,
          },
        },
      },
      expandOnClick: false,
    },
  },
  grid: {
    padding: {
      bottom: -80,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 0,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
  dataLabels: {
    enabled: false,
  },
};
export const DonationChart = () => {
  return (
    <div className={styles.box}>
      <ReactApexChart options={options} series={series} type="donut" />
    </div>
  );
};
