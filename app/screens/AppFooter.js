import React, {Component} from 'react';
import {Text} from 'react-native';
import { Footer , FooterTab , Button , Icon  } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class AppFooter extends Component {
render() {



            return (

                <Footer >
                      <FooterTab style={{backgroundColor: '#fff'}}>
                            <Button  onPress={Actions.India}>
                                <Icon name='ios-home'/>
                                <Text> INDIA </Text>
                            </Button>
                            <Button  onPress={Actions.America}>
                                <Icon name='ios-water'/>
                                <Text>  US </Text>
                            </Button>
                            <Button onPress={Actions.AboutUs}>
                                <Icon name='ios-body'/>
                                <Text> CHINA </Text>
                            </Button>
                            <Button onPress={Actions.ApiData}>
                                <Icon name='ios-download-outline'/>
                                <Text> RUSSIA </Text>
                            </Button>
                       </FooterTab>

                </Footer>

            );
}
}
module.export = AppFooter;
