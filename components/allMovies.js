import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

class AllMovies extends Component {
  // static navigationOptions = ({navigation}) => ({
    // title: navigation.state.params.category,
    // headerTitleStyle: {
      // color: '#a9a9a9'
    // },
    // headerStyle: {
      // backgroundColor: 'black'
    // },
  // );

  render() {
    return(
      <View>
        <Text>
          Show All Movies here
        </Text>
      </View>
    )
  }
}

export default AllMovies;
