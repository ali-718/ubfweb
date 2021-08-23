import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import highlighter1 from "../../assets/highLighter1.svg";
import highlighter2 from "../../assets/highLighter2.svg";
import { useWindowSize } from "../../hooks/useWindowize";
import { SmallButton } from "../Buttons/SmallButton";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import { csv } from "d3-fetch";
import chartData from "../../data/counties-data-insecurity.csv";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

export const FirstContent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv(chartData).then((counties) => {
      console.log(counties);
      setData(counties);
    });
  }, []);

  const colorScale = scaleQuantile()
    .domain(data.map((d) => d.food))
    .range([
      "#b1b7b0",
      "#ae9089",
      "#a57c73",
      "#734a4b",
      "#6d5368",
      "#6b4f70",
      "#61456c",
      "#573866",
      "#46255e",
    ]);

  return (
    <>
      <div className={styles.firstContentBox}>
        <div className={styles.highLighterOneBox}>
          <div className={styles.mainHeadingOne}>
            <p>Who would you like to feed today?</p>
          </div>

          <div className={styles.headingThree}>
            <div className={styles.stateInputBox}>
              <div className={styles.inputButtonBox}>
                <SmallButton text={"Donate"} classname={styles.button} />
              </div>
              <input placeholder="Feed African American women in Essex County, NJ" />
            </div>
          </div>
        </div>

        <div className={styles.firstContentImageBox}>
          <ComposableMap projection="geoAlbersUsa">
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const cur = data.find((s) => s.id === geo.id);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={cur ? colorScale(cur.food) : "#EEE"}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        </div>

        <div className={styles.highLighterHeadingOne}>
          <p>Feeding people across the United States</p>
          <img className={styles.highlighter1} src={highlighter1} />
        </div>
      </div>

      <div className={styles.belowContent}>
        <div className={styles.belowContainer}>
          <p className={styles.headingBelowContent}>What we do</p>
          <img src={highlighter2} className={styles.headingBelowContentImage} />
        </div>
        <div className={styles.belowContentContainer}>
          <div className={styles.contentsText}>
            <p>
              Universal Basic Food is a three-sided marketplace between people
              who are in need of food, donors, and restaurants. Using UBF,
              people in need of warm meals are able to collect food from
              high-street shops, and delivery channels (cloud kitchens, etc)
              free of cost. We ensure their dignity is intact by protecting
              their privacy and making it a seamless experience to procure food.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
