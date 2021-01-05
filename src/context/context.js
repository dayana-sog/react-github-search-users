import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  //request loading
  const [request, setRequest] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  
  //error
  const [error, setError] = useState({ show: false, msg: '' }); 

  const searchGitHubUser = async(user) => {
    //Toggle Error
    toggleError();
    setIsLoading(true);

    const response = await axios(`${rootUrl}/users/${user}`).catch(
      error => console.log(error)
    );
    
    console.log(response);

    if (response) {
      setGithubUser(response.data);
      const { login, followers_url } = response.data;

      // repos
      axios(`${rootUrl}/users/${login}/repos?per_page=100`).then(
        response => console.log(response));

      // followers
      axios(`${followers_url}?per_page=100`).then(
        response => console.log(response));
    } else {
      toggleError(true, 'There is no user with that username, try again! ');
    }

    checkRequest();
    setIsLoading(false);
     
  };

  //check rate
  const checkRequest = () => {
    axios(`${rootUrl}/rate_limit`).then(({data}) => {
      let { rate: { remaining } } = data;
    
      setRequest(remaining);
  
      if (remaining === 0) {
        toggleError(true, 'Sorry, you have exceeded your hourly rate limit!')
      };
    }).catch((err) => {
      console.log(err );
    });
  };

  function toggleError(show = false, msg = '') {
    setError({show, msg})
  };

  useEffect(checkRequest, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        request,
        error,
        searchGitHubUser,
        isLoading
      }}
    >
      {children}
    </GithubContext.Provider>
  )
};

export { GithubContext, GithubProvider };