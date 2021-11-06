import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Logo} from '../../assets/index.js';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('MainApp');
    }, 3000);
  }

  render() {
    return (
      <View style={styles.pages}>
        <Logo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
