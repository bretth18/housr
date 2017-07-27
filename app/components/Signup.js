import React, { Component } from 'react';
import { AlertIOS, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FormLabel, FormInput, Button } from 'react-native-elements';

import firebase from '../api/firebase';
// Set width and height to screen dimensions
const { width, height } = Dimensions.get("window");

// For Firebase Auth
const auth = firebase.auth();

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
        Actions.mainContainer({type:'reset'});
        // User is signed in.
      } else {
        return;
        // No user is signed in.
      }
    });
  }

  signupUser() {
    let email = this.state.email;
    let password = this.state.password;

    auth.createUserWithEmailAndPassword(email, password)
      .then(Actions.mainContainer({type:'reset'}))
      .catch((error) => {
        AlertIOS.alert(
          `${error.code}`,
          `${error.message}`
        );
    });
  }
  render() {
    return (
      <View style={styles.container} >

        <View style={styles.loginContainer} >
          <Text>signup</Text>

          <View style={styles.inputContainer} >
            <FormLabel>email</FormLabel>
            <FormInput onChangeText={(email) => this.setState({email})} />

            <FormLabel>password</FormLabel>
            <FormInput secureTextEntry={true} onChangeText={(password) => this.setState({password})} />

            <Button
              title='Signup'
              style={styles.loginButton}
              onPress={this.signupUser.bind(this)}/>

          </View>


        </View>



      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    justifyContent: 'center',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 50,
  }
});
