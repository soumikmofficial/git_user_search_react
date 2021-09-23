import React from "react";
import "./repos.scss";
import Pie3D from "../chart/Pie3D";
import Doughnut from "../chart/Doughnut";
import ColumnChart from "../chart/ColumnChart";
import Bar2D from "../chart/Bar2D";
import { useGlobalContext } from "../../context";
function Repos() {
  const { gitRepos } = useGlobalContext();

  // *languages and their use

  let languages = gitRepos.reduce((total, item) => {
    const language = item.language;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1 };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
      };
    }
    return total;
  }, {});

  languages = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  // *stars received

  let stars = gitRepos.reduce((total, item) => {
    const language = item.language;
    const count = item.stargazers_count;

    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + count,
      };
    }
    return total;
  }, {});

  stars = Object.values(stars)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  // *stars and forks

  let { starsReceived, forks } = gitRepos.reduce(
    (total, item) => {
      const { forks, stargazers_count, name } = item;
      total.starsReceived[stargazers_count] = {
        label: name,
        value: stargazers_count,
      };
      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    {
      starsReceived: {},
      forks: {},
    }
  );

  starsReceived = Object.values(starsReceived).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();
  console.log(forks);

  return (
    <div className="repos">
      <Pie3D data={languages} />
      <Doughnut data={stars} />
      <ColumnChart data={starsReceived} />
      <Bar2D data={forks} />
    </div>
  );
}

export default Repos;
