import React, {useContext} from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';

const Repos = () => {
  const { repos } = useContext(GithubContext);

  const languages = repos.reduce((total, item) => {

    const { language, stargazers_count  } = item;
    if (!language) return total; 
    
    if (!total[language]) {
      // total[language] = 1;
      total[language] = { label: language, value: 1, stars: stargazers_count }
    } else {
      // total[language] = total[language] + 1;
      total[language] = {
        ...total[language], 
        value: total[language].value + 1, 
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});

  const mostUsed = Object.values(languages).sort((a, b) => {
    return b.value - a.value;
  }).slice(0, 5);

  //most stars per language
  const mostPopular = Object.values(languages).sort((a, b) => {
    return b.stars - a.stars;

  }).map((item) => {
    return {...item, value: item.stars}
  }).slice(0, 5);


  // stars, forks  
  let { stars, forks } = repos.reduce((total, item) => {
    const {stargazers_count, name, forks} = item;
    total.stars[stargazers_count] = { 
      label: name,
      value:  stargazers_count
    }; 

    total.forks[stargazers_count] = {
      label: name,
      value:  forks
    };

    return total;
  }, {
    stars: {},
    forks: {},
  });

  stars = Object.values(stars).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();

  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Pie3D data={mostUsed} />
        <Column3D data={stars}/>
        <Doughnut2D data={mostPopular}/>
        <Bar3D data={forks} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }
  div {
    width: 100% !important;
    border: 2px solid var(--border-color);
    border-radius: 6px;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
  .raphael-group-19-caption text {
    fill: var(--border-color) !important;
  }
  .raphael-group-169-caption text {
    fill: var(--border-color) !important;
  }
  .raphael-group-313-caption text {
    fill: var(--border-color) !important;
  }
  .raphael-group-391-caption text {
    fill: var(--border-color) !important;
  }
`;


export default Repos;
