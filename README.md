# RNSideMenu

# Preview
<p align="center">
  <img src="https://raw.githubusercontent.com/khanghoang/RNSideView-Examples/master/demo.gif" /> 
</p>

# Examples

Clone this [repo](https://github.com/khanghoang/RNSideView-Examples) and take a look of the **index.ios.js**

# Usage

```javascript
var SideMenu = require('sidemenu');

global.sideMenu = 
      <SideMenu
      frontView={FrontView}
      sideView={<SideView />}
      />;

var App = React.createClass({
  render: function () {
    return (
      <View style={styles.container} >
        {sideMenu}
      </View>
    );
  }
})
```

Then at any place of you code, if you wanna toggle **SideView** manually, call sideMenu.props.toggleSideView()

# Route map
* [x] Basic views and animations
* [x] Pass frontView and sideView as props
* [x] Make it as npm module
* [ ] Mutiple directions of side menu
* [ ] Helper actions for ~~**toggleSideView()**~~, **open()**, **close()**, **chageFrontView()**, **changeSideView()**
* [ ] Make more examples
* [ ] Change the name to react-native-side-menu
* [x] create another repo to examples
* [x] Clean this repo to just contain lib files, (now it also contains xCode files)

# Contribute
#### Pull requests are welcome. 

This component can not be done without helps from [@ToanNG](https://github.com/ToanNG) & [@vu.nguyen](https://github.com/vunguyentuan)

# About me
Follow me at [@khanght](https://twitter.com/khanght)
