# RNSideMenu

# Preview
<p align="center">
  <img src="demo.gif" /> 
</p>

# Examples

Clone this repo and take a look of the **index.ios.js**

# Usage

```javascript
var SideMenu = require('./SideMenu.js');

var App = React.createClass({
  render: function () {
    return (
      <View style={styles.container} >
        <SideMenu 
        frontView={<FrontView />}
        sideView={<SideView />}
        />
      </View>
    );
  }
})
```

# Route map
* [x] Basic views and animations
* [x] Pass frontView and sideView as props
* [x] Make it as npm module
* [ ] Mutiple directions of side menu
* [ ] Helper actions for **toggle**, **open**, **close**
* [ ] Make more examples
* [ ] Change the name to react-native-side-menu & create another repo to examples

# Contribute
#### Pull requests are welcome. 

This component can not be done without helps of [@ToanNG](https://github.com/ToanNG) & [@vu.nguyen](https://github.com/vunguyentuan)

# About me
Follow me at [@khanght](https://twitter.com/khanght)
