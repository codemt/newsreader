import React, {Component} from 'react';
import {Text, StyleSheet, View, Image } from 'react-native';
export default class SplashScreen extends Component {



  render() {
            return (

                        <View style={styles.container}> 
                          <Image source={require('../images/splash.jpg')} style={[styles.title]} />
                          <Text> Welcome to our Official App. </Text>
                               
                        </View>



                    );
      }
}
module.export = SplashScreen;
const styles = StyleSheet.create({

        container: {

                backgroundColor:'#fff',
                flex: 1,
                alignItems:'center',
                justifyContent:'center'



        },
        title: {

                resizeMode : 'contain',
                alignSelf: 'center',
                width: 400



        }




})