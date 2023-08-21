import { useEffect, useState } from "react";
import { LineChart, Line, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import get from "../../../services/Mocked";
import PropTypes from "prop-types";

/**
 * @function LineStats React component for user average sessions
 * @param {string} props user Id
 * @returns {JSX} informations for line chart
 */

const days = ["L", "M", "M", "J", "V", "S", "D"];

function AverageDuration(props) {
  const id = props.id;
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const call = new get();
    call
      .get(id, "average-sessions")
      .then(function (res) {
        setData(res);
        setIsLoading(false);
      })
      .catch(function (err) {
        return console.log("An error accours", err);
      });
  }, [isLoading, id]);
  if (!isLoading) {
    data.sessions.forEach((session, id) => (session.day = days[id]));
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return <div className="line-label">{`${payload[0].value} min`}</div>;
    }
  };

  return (
    <div className={props.className}>
      <span className="session-label">L M M J V S D</span>
      <ResponsiveContainer width="100%" height="60%" aspect={1.8}>
        <LineChart width={258} height={263} data={data.sessions}>
          <text x="13%" y="-30%">
            <tspan
              fill="white"
              style={{
                fontSize: "15px",
                fontWeight: 500,
                opacity: ".5",
              }}
            >
              Durée moyenne des
            </tspan>
            <tspan
              dy={23}
              dx={-133}
              fill="white"
              style={{
                fontSize: "15px",
                fontWeight: 500,
                opacity: ".5",
              }}
            >
              sessions
            </tspan>
          </text>
          <defs>
            <linearGradient id="line-color">
              <stop offset="0%" stopColor="white" stopOpacity={0.4} />
              <stop offset="100%" stopColor="white" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <YAxis
            dataKey="sessionLength"
            hide={true}
            type="number"
            padding={{ bottom: 80, top: 30 }}
            domain={["dataMin", 100]}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "black",
              strokeOpacity: 0.1,
              strokeWidth: 60,
              // fill: "rgba(255, 255, 255, 0.1)",
            }}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            dot={false}
            strokeWidth={2}
            stroke="url(#line-color)"
            activeDot={{
              stroke: "white",
              strokeOpacity: 0.2,
              strokeWidth: 10,
              fill: "white",
              r: 5,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

AverageDuration.propTypes = {
  className: PropTypes.string,
};

export default AverageDuration;
