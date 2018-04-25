/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container , StyleProvider } from 'native-base';
import India from './app/screens/India';
import { Actions , Router , Scene } from 'react-native-router-flux';
import America from './app/screens/America';
import AppFooter from './app/screens/AppFooter';
import England from './app/screens/England';
import Canada from './app/screens/Canada';


export default class App extends Component {
  render() {
    return (
      <Container>
                <Router>
            <Scene key="root">
                  <Scene
                    key="India"
                    component={India}
                    iconName="home"
                    title="News From India"
                    />
                  <Scene
                    key="America"
                    component={America}
                    title="News From America"
                    /> 
                    <Scene
                    key="England"
                    component={England}
                    title="News From UK"
                    /> 
                    <Scene
                    key="Canada"
                    component={Canada}
                    title="News From Canada"
                    />                 
            </Scene>
          </Router>

        <AppFooter />

     </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
