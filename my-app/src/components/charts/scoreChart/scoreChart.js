import { useEffect, useState } from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import get from "../../../services/Mocked";

/**
 * @function PieStats React component for user today score
 * @param {string} props User Id
 * @returns {JSX} informations for pie chart
 */

function ScoreChart(props) {
  const id = props.id;
  const [data, setData] = useState({});
  useEffect(() => {
    const call = new get();
    call
      .get(id, "")
      .then(function (res) {
        setData(res);
      })
      .catch(function (err) {
        return console.log("An error accours", err);
      });
  });

  let score = [
    { name: "start", value: Number(data.todayScore) },
    { name: "range", value: 1 },
  ];

  return (
    <div className={props.className}>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={258}
          height={263}
          innerRadius={75}
          barSize={10}
          data={score}
          startAngle={90}
          endAngle={90 + 360}
          style={{ backgroundColor: "#FBFBFB", borderRadius: "5px" }}
        >
          <text x="20%" y="15%" textAnchor="middle" dominantBaseline="middle">
            <tspan fill="#282D30" style={{ fontSize: "15px", fontWeight: 500 }}>
              Score
            </tspan>
          </text>
          <PolarAngleAxis
            type="number"
            domain={[0, 1]}
            angleAxisId={0}
            tick={false}
          />
          <circle cx="50%" cy="50%" fill="white" r="70"></circle>
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
            <tspan
              dy="-20"
              fill="#282D30"
              style={{ fontSize: "25px", fontWeight: 600 }}
            >
              {score[0].value * 100}%
            </tspan>
            <tspan x="50%" dy="26" fill="#74798C" style={{ fontSize: "15px" }}>
              de votre
            </tspan>
            <tspan x="50%" dy="26" fill="#74798C" style={{ fontSize: "15px" }}>
              objectif
            </tspan>
          </text>
          <RadialBar
            clockWise
            dataKey="score"
            cornerRadius={10}
            fill="#FF0000"
            className="red-circle"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

ScoreChart.propTypes = {
  className: PropTypes.string,
};

export default ScoreChart;
