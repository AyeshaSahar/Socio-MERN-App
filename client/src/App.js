import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import dotenv from 'dotenv';
dotenv.config();

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <GoogleOAuthProvider clientId={process.env.GOOGLE_API_TOKEN}>
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
        </Switch>
        <br/>
        <br/>
        <Footer />
      </Container>
    </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
