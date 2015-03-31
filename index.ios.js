/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  PanResponder,
  Text,
  View,
} = React;

var SideMenu = React.createClass({

  _panResponder: {},
  _previousLeft: 0,
  _previousTop: 0,
  _sideViewStyles: {},

  sideView: (null : ?React.Element),

  componentWillMount: function() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd,
    });

    this._previousLeft = 0;
    this._previousTop = 0;
    this._sideViewStyles = {
      left: this._previousLeft,
      top: this._previousTop,
    };
  },

  componentDidMount: function() {
    this._updatePosition();
  },

  _updatePosition: function() {
    this.sideView && this.sideView.setNativeProps(this._sideViewStyles);
  },

  _handleStartShouldSetPanResponder: function(e: Object, gestureState: Object): boolean {
    // Should we become active when the user presses down on the circle?
    return true;
  },

  _handleMoveShouldSetPanResponder: function(e: Object, gestureState: Object): boolean {
    // Should we become active when the user moves a touch over the circle?
    return true;
  },

  _handlePanResponderGrant: function(e: Object, gestureState: Object) {
  },
  _handlePanResponderMove: function(e: Object, gestureState: Object) {
    this._sideViewStyles.left = this._previousLeft + gestureState.dx; 
    this._updatePosition();
  },
  _handlePanResponderEnd: function(e: Object, gestureState: Object) {
    this._previousLeft += gestureState.dx;
  },

  render: function() {
    return (
      <View style={styles.container}>
        <View 
        ref={(sideView) => {
          this.sideView = sideView
        }}
        style={styles.sideView}
        {...this._panResponder.panHandlers}>
        </View>
        <View style={styles.frontView}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js{'\n'}
          Press Cmd+R to reload
        </Text>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
  },
  sideView: {
    flex: 1,
    width: 320,
    height: 568,
    backgroundColor: "#000000",
    position: 'absolute',
    top: 0,
    left: 0,
  },
  // frontView: {
  //   flex: 1,
  //   position: 'absolute',
  //   left: 0,
  //   top: 0,
  //   backgroundColor: "#333333",
  // }
});

AppRegistry.registerComponent('SideMenu', () => SideMenu);
