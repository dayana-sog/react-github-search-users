import React, { useContext } from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import Lottie from 'lottie-react-web';
import loadingImage from '../images/loading.json';
import { GithubContext } from '../context/context';

const Dashboard = () => {
  const { isLoading } = useContext(GithubContext);

  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <div className="loading-img">
          <Lottie
            width="100%"
            options={{
              animationData: loadingImage,
              loop: true,
            }}
          />
        </div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
