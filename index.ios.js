/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var SideMenu = require('./SideMenu.js');

var {
  AppRegistry,
  StyleSheet,
  PanResponder,
  LayoutAnimation,
  TouchableHighlight,
  Text,
  View,
} = React;

var FrontView = React.createClass({
  _onTouch: function () {
    this.props.__toggleSideView();
  },
  render: function () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={{textAlign: 'center'}}>
          To get started, edit index.ios.js{'\n'}
          Press Cmd+R to reload
        </Text>
        <TouchableHighlight onPress={this._onTouch}>
        <Text>
        touch
        </Text>
        </TouchableHighlight>
      </View>
    );
  }
}) 

var SideView = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Hi, I'm side view
        </Text>
      </View>
    );
  }
}) 

var AppSideMenu = React.createClass({
  render: function () {
    return (
      <View style={styles.container} >
      <SideMenu 
      frontView={FrontView}
      sideView={<SideView />}
      />
      </View>
    );
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 100,
  },
  instructions: {
    color: '#333333',
    fontSize: 16,
    marginTop: 100,
    marginLeft: 50,
  },
})


AppRegistry.registerComponent('SideMenu', () => AppSideMenu);
