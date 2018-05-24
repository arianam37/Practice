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
  Image,
  AppRegistry,
  KeyboardAvoidingView,
  TextInput,
  ImageBackground,
} from 'react-native';

import Form from './app/components/Form';
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <KeyboardAvoidingView behavior = 'padding' style = {styles.wrapper}>
          <ImageBackground style = {styles.container} source = {require('./app/img/background.jpg')}>
              <Text style={styles.header}>- LOGIN -</Text>
              <Form />
          </ImageBackground>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    container: {
      flex: 1,
      alignSelf: 'stretch',
      width: null,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      fontSize: 38,
      color: '#fff',
      fontWeight: 'bold',
    }
});
