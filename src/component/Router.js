import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Home from 'components/page/home/Home';
import Music from 'components/page/music/Music';
import Profile from 'components/page/profile/Profile';
import MusicLayout from 'components/Layout/MusicLayout';
import Scene1 from './canvas/components/scene1';
import Photo from './page/photo/Photo';

const MainRoute = () => {
  const homeComponent = () => <Layout component={<Home />} />;
  const musicComponent = () => <Layout component={<Music />} />;
  const profileComponent = () => <Layout component={<Profile />} />;
  const canvasCompA = () => <Layout component={<Scene1 />} />;
  const photoComponent = () => <Layout component={<Photo />} />;
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Redirect exact from="/blog" to="/home" />
      <Route path="/home" component={homeComponent} />
      <Route path="/music" component={musicComponent} />
      <Route path="/profile" component={profileComponent} />
      <Route path="/canvasA" component={canvasCompA} />
      <Route path="/photos" component={photoComponent} />
    </Switch>
  );
};

export default MainRoute;
