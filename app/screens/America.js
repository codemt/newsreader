import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
 class  America extends Component {


    constructor()
    {

                super()
                this.state={

                    data:[]
                }
                
    }
    getData()
    {
      console.log('called');

            fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5497647da2114041ad647eba8e002d6f')
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);
            this.setState({data : responseJson.articles});

          })

          .catch((error) => {
            console.error(error);
          });

    }

  componentDidMount()
  {

          this.getData();

  }
  _renderItem = ({item}) => (

      <View style={{paddingLeft:5,paddingRight: 5}}>
              <Card>
                <CardItem header>
                  <Text>{item.title}</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text numberOfLines={3}>
                    {item.description}
                    </Text>
                  </Body>
                </CardItem>
                <CardItem footer>
                  <Text numberOfLines={1} style={{color:'blue'}} onPress={()=>alert('go to page')}>{item.url}</Text>
                </CardItem>
            </Card>
            
        
      </View>         

    
        
      
 )


  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        
          

          <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={item => item.id}
          />

      
      </ScrollView>
    )
  }
}
export default America;

// {/* <View>
//         <Text>{item.title}</Text>
//         <Text>{item.description}</Text>
//     </View> */}