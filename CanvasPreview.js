import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";

class CanvasPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props, "<<<< canvas props");
    console.log(this.state);
    const { navigation } = this.props;
    return (
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {this.props.cap.map((image, index) => {
          return (
            <Image
              source={{ uri: image.uri }}
              style={{
                width: image.width * 100,
                height: image.height * 100,
                right: image.position[0] * 50,
                top: image.position[1] * 50
              }}
            />
          );
        })}
      </View>
    );
  }
}

export default CanvasPreview;
