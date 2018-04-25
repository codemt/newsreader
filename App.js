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
import { Actions , Router , Scene , Tabs } from 'react-native-router-flux';
import America from './app/screens/America';
import AppFooter from './app/screens/AppFooter';
import England from './app/screens/England';
import Canada from './app/screens/Canada';


class TabIcon extends Component {

  render() {
    var color = this.props.tintColor =='#3478f6' ? '#f2268c' : '#000000';
    return (
      <View style={{flex:1,color:color, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
        <Text> {this.props.iconText} </Text> 
      </View>
    );
  }
}


export default class App extends Component {
  render() {
    return (
      <Container> 
                <Router>
            <Tabs key="root" showLabel={false} tabBarPosition={'bottom'}>
                  <Scene
                    key="India"
                    component={India}
                    iconText="INDIA"
                    icon={TabIcon}
                    title="News From India"
                    />
                  <Scene
                    key="America"
                    component={America}
                    iconText="AMERICA"
                    icon={TabIcon}
                    title="News From America"
                    /> 
                    <Scene
                    key="England"
                    component={England}
                    iconText="ENGLAND"
                    icon={TabIcon}
                    title="News From UK"
                    /> 
                    <Scene
                    key="Canada"
                    component={Canada}
                    iconText="CANADA"
                    icon={TabIcon}
                    title="News From Canada"
                    />                 
            </Tabs>
          </Router>

        

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
