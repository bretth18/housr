import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { Router, Scene, Actions } from 'react-native-router-flux';

import Home from '../components/Home';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Profile from '../components/Profile';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}


const MainApp = () => (
  <Router>
    <Scene key="root">

      <Scene key="authContainer" initial>
        <Scene key="login" component={Login} title="Login" hideNavBar={true} initial={true} />
        <Scene key="signup" component={Signup} title="Signup" hideNavBar={true} />
      </Scene>

      {/* tab container */}
      <Scene key="mainContainer"
        tabs={true}
        tabBarStyle={{ backgroundColor: '#BDBDBD'}}
        hideNavBar={true}
        >
          {/* home and it's scenes */}
          <Scene key="home" title="HOME" icon={TabIcon}>
            <Scene key="home" component={Home} title="home" initial={true} />

          </Scene>

          {/* profile tab and its scene */}
          <Scene key="profile" title="PROFILE" icon={TabIcon}>
            <Scene key="profile" component={Profile} title="profile"  />
          </Scene>

      </Scene>


    </Scene>
  </Router>
);


export default MainApp;
