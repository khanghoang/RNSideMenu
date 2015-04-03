/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var SideMenu = require('./SideMenu.js');
var FrontView = require("./FrontView");

var {
  AppRegistry,
  StyleSheet,
  PanResponder,
  LayoutAnimation,
  TouchableHighlight,
  Text,
  View,
} = React;

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

global.sideMenu = 
      <SideMenu
      frontView={FrontView}
      sideView={<SideView />}
      />;

var AppSideMenu = React.createClass({
  render: function () {
    return (
      <View style={styles.container} >
      {sideMenu}
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
