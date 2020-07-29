import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../component/Layout';
import Home from '../component/Home';
import Music from '../component/Music';
import Profile from '../component/Profile';

const MainRoute = () => {
  const homeComponent = () => <Layout component={<Home />} />;
  const musicComponent = () => <Layout component={<Music />} />;
  const profileComponent = () => <Layout component={<Profile />} />;
  return (
    <Switch>
      <Route path="/home" component={homeComponent} />
      <Route path="/music" component={musicComponent} />
      <Route path="/profile" component={profileComponent} />
    </Switch>
  );
};

export default MainRoute;
