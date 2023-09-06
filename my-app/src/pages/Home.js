import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DailyActivity from "../components/charts/dailyActivity/dailyActivity";
import AverageDuration from "../components/charts/averageDuration/averageDuration";
import StatChart from "../components/charts/statChart/statChart";
import ScoreChart from "../components/charts/scoreChart/scoreChart";
import GetIcon from "../components/icons/GetIcons";
import get from "../services/Mocked";

/**
 * React component for User Page
 * @function Home
 * @returns {JSX} Main informations about user
 */

function Home() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const call = new get(id);
    call
      .get(id, "")
      .then(function (res) {
        setData(res);
        setIsLoading(false);
      })
      .catch(function (err) {
        return console.log("An error accours", err);
      });
  }, [id, isLoading]);
  if (data === undefined) {
    navigate("/Error");

    console.log(data.userInfos.firstName);
  }
  return (
    <>
      {!isLoading && (
        <main className="dashboard">
          <div className="user-name">
            <h1>
              Bonjour{" "}
              <span className="first-name">{data.userInfos.firstName}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          <section className="home-main">
            <article className="home-graph">
              <DailyActivity className="graph dailyActivity" id={id} />
              <AverageDuration className="graph averageDuration" id={id} />
              <StatChart className="graph statChart" id={id} />
              <ScoreChart className="graph scoreChart" id={id} />
              {/* <Nutriscore /> */}
            </article>

            <section className="nutricions">
              <div className="nutricions__icons">
                <article className="tag fire">
                  <GetIcon className="fire" icon="fire" />
                  <div className="tag-text">
                    <span className="large">
                      {data.keyData.calorieCount}kCal{" "}
                    </span>
                    <span className="small">Calories</span>
                  </div>
                </article>

                <article className="tag chicken">
                  <GetIcon icon="chicken" />
                  <div className="tag-text">
                    <span className="large">{data.keyData.proteinCount}g </span>
                    <span className="small">Poteines</span>
                  </div>
                </article>

                <article className="tag apple">
                  <GetIcon icon="apple" />
                  <div className="tag-text">
                    <span className="large">
                      {data.keyData.carbohydrateCount}g{" "}
                    </span>
                    <span className="small">Glucides</span>
                  </div>
                </article>

                <article className="tag burger">
                  <GetIcon icon="burger" />
                  <div className="tag-text">
                    <span className="large">{data.keyData.lipidCount}g </span>
                    <span className="small">Lipides</span>
                  </div>
                </article>
              </div>
            </section>
          </section>
        </main>
      )}
    </>
  );
}

export default Home;
