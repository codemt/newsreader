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
  View,
  StatusBar
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
    var color = 'black';
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
            <Tabs lazy key="root" showLabel={Platform.OS === 'ios'?true:false} tabBarPosition={'bottom'} TabIcon={true} activeBackgroundColor='#95a5a6' navigationBarStyle={{backgroundColor: '#95a5a6'}}  >
                  <Scene
                    key="India"
                    component={India}
                    iconText="INDIA"
                    icon={TabIcon}
                    title="News From India"
                    tabBarLabel="India"
                    />
                  <Scene
                    key="America"
                    component={America}
                    iconText="AMERICA"
                    icon={TabIcon}
                    title="News From America"
                    tabBarLabel="America"
                    /> 
                    <Scene
                    key="England"
                    component={England}
                    iconText="ENGLAND"
                    icon={TabIcon}
                    title="News From UK"
                    tabBarLabel="England"
                    /> 
                    <Scene
                    key="Canada"
                    component={Canada}
                    iconText="CANADA"
                    icon={TabIcon}
                    title="News From Canada"
                    tabBarLabel="Canada"
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
