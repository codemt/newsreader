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
                                <Text> INDIA </Text>
                            </Button>
                            <Button  onPress={Actions.America}>
                                <Text>  US </Text>
                            </Button>
                            <Button onPress={Actions.England}>
                                <Text> UK </Text>
                            </Button>
                            <Button onPress={Actions.Canada}>
                                <Text> CANADA </Text>
                            </Button>
                       </FooterTab>

                </Footer>

            );
}
}
module.export = AppFooter;
