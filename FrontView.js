'use strict'

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;

var FrontView = React.createClass({

  _test: function() {
    sideMenu.props.toggleSideView();
  },

  render: function () {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._test}>
        <Text>
        Touch me to toggle side view
        </Text>
        </TouchableHighlight>
      </View>
    );
  }
}) 

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  sideView: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: "#dddddd",
    position: 'absolute',
    top: 0,
    left: 0,
  },
  frontView: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: "#ffffff",
    width: window.width,
    height: window.height,
  }
});

module.exports = FrontView;
