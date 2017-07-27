import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';

import firebase from '../api/firebase';

export default class Home extends Component {

  constructor(props){
    super(props);

  }


  logout() {

    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      Actions.login({type:'reset'})
    }, function(error) {
      console.log(error)
    });
  }
  render(){
    return(
      <View>

        
        <Button
          title="logout"
          onPress={this.logout.bind(this)}
          backgroundColor="#FFC107"
        />

      </View>
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
});
