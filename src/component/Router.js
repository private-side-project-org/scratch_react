import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from '../component/Layout';
import Home from '../component/Home';
import Music from '../component/Music';
import Profile from '../component/Profile';
import Scene1 from './canvas/components/scene1';
import MusicLayout from './MusicLayout';
import ReactPlayerTest from './ReactPlayerTest';

const MainRoute = () => {
  const homeComponent = () => <Layout component={<Home />} />;
  const musicComponent = () => <MusicLayout component={<Music />} />;
  const profileComponent = () => <Layout component={<Profile />} />;
  const canvasCompA = () => <Layout component={<Scene1 />} />;
  const reactPlayerTestComp = () => <Layout component={<ReactPlayerTest />} />;
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Redirect exact from="/photos" to="/home" />
      <Redirect exact from="/blog" to="/home" />
      <Route path="/home" component={homeComponent} />
      <Route path="/music" component={musicComponent} />
      <Route path="/profile" component={profileComponent} />
      <Route path="/canvasA" component={canvasCompA} />
      <Route path="/test" component={reactPlayerTestComp} />
    </Switch>
  );
};

export default MainRoute;
