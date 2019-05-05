import React, { Component } from "react";
import { Scene, Router } from "react-native-router-flux";

import { Home } from "../../containers/Home";
import  Login  from "../../containers/Login/Login";
import  LoginPin  from "../../containers/Login/LoginPin";
import  Account  from "../../containers/Account/Account";
import Register from "../../containers/Register/Register";
import {RegisterSuccess} from "../../containers/Register";
import  Pin from "../../containers/Pin/Pin";


export class NavigationRouter extends Component {
    render() {
      return ( 

        <Router>
          <Scene key="root">
            <Scene
              key="home"
              hideNavBar={true}
              component={Home}
            />

            <Scene
              key="login"
              hideNavBar={false}
              title="Login"
              component={Login}
            />

            <Scene
              key="loginPin"
              title="Enter Pin"
              hideNavBar={false}
              component={LoginPin}
            />

            <Scene
              key="account"
              title="Account"
              hideNavBar={false}
              component={Account}
            />

            <Scene
              key="register"
              title="Register"
              hideNavBar={false}
              component={Register}
            />

            <Scene
              key="registerSuccess"
              hideNavBar={true}
              component={RegisterSuccess}
            />

            <Scene
              key="pin"
              title="Register"
              hideNavBar={false}
              component={Pin}
            />
  
            {/* <Scene
              key={SceneKeys.contact}
              component={HomeContact}
              type={ActionConst.RESET}
              hideNavBar={false}
              {...styles.navbar}
              getTitle={() => Locale.translate(LocaleKeys.containers.contact.title.contact)}
              renderLeftButton={NavItems.backButtonWhite}
            /> */}
  
          </Scene>
        </Router>
        
      );
    }
  }