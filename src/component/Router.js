import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../component/Layout';
import Home from '../component/Home';
import Music from '../component/Music';

const MainRoute = () => {
  const homeComponent = () => <Layout component={<Home />} />;
  const musicComponent = () => <Layout component={<Music />} />;
  return (
    <Switch>
      <Route path="/home" component={homeComponent} />
      <Route path="/music" component={musicComponent} />
    </Switch>
  );
};

export default MainRoute;
