import { useEffect, useState } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import get from "../../../services/Mocked";

/**
 * @function RadarStats React component for user performance
 * @param {string} props User Id
 * @returns {JSX} informations for radar chart
 */

function StatChart(props) {
  const id = props.id;
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const call = new get();
    call
      .get(id, "performance")
      .then(function (res) {
        setData(res);
        setIsLoading(false);
      })
      .catch(function (err) {
        return console.log("An error accours", err);
      });
  });
  if (!isLoading) {
    const kind = Object.values(data.kind);
    data.data.forEach((item, id) => (item.kind = kind[id]));
  }
  return (
    <div className={props.className}>
      <ResponsiveContainer height="100%" width="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.data}>
          <PolarGrid />
          <PolarAngleAxis
            style={{ fontSize: "11px", color: "#fff" }}
            dataKey="kind"
          />
          <Radar
            name="Score"
            dataKey="value"
            stroke="#FF0000"
            fill="#ff0000"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

StatChart.propTypes = {
  className: PropTypes.string,
};

export default StatChart;
