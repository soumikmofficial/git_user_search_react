import React from "react";
import "./repos.scss";
import Pie3D from "../chart/Pie3D";
import Doughnut from "../chart/Doughnut";
import ColumnChart from "../chart/ColumnChart";
import { useGlobalContext } from "../../context";
function Repos() {
  const { gitRepos } = useGlobalContext();

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
  console.log(stars);
  return (
    <div className="repos">
      <Pie3D data={languages} />
      <Doughnut data={stars} />
      <ColumnChart data={stars} />
    </div>
  );
}

export default Repos;
