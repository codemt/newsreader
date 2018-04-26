import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Linking,
  WebView,
  ActivityIndicator
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
 class  America extends Component {


    constructor()
    {

                super()
                this.state={

                    data:[],
                    animating:true
                }
                
    }
    getData()
    {
      console.log('called');

            fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5497647da2114041ad647eba8e002d6f')
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);
            this.setState({data : responseJson.articles,animating:false});

          })

          .catch((error) => {
            console.error(error);
          });

    }

  componentDidMount()
  {

          this.getData();

  }
  openUrl(link){

    Linking.openURL(link).catch(err => console.error('An error occurred', err));

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
                  <Text numberOfLines={1} style={{color:'blue'}} onPress={()=>this.openUrl(item.url)}>
                    {item.url}
                  </Text>
                </CardItem>
            </Card>
            
        
      </View>         

    
        
      
 )
 emptyRenderFooter() {
  return (
      <View>
      </View>
  )
}

renderFooter(obj) {
  var load;
  load = <View>
      <ActivityIndicator color="#95a5a6"
          animating={obj.state.animating}
          style={{padding:10}}
          size={'large'}/>
       </View>;
  return (
      load
  )
}


  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        
          

          <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={item => item.id}
          ListFooterComponent={this.state.animating ? this.renderFooter(this) : this.emptyRenderFooter}
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