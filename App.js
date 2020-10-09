import React, { Component } from "react";
import {
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  View,
  Text,
  Alert,
} from "react-native";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import initStore from "./store";
import Route from "./screens/route";

export default class App extends Component {
  constructor() {
    super();
    this.state = { isVisible: true };
  }

  render() {
    return (
      <Provider store={initStore()}>
        <Route />
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 20 : 0,
  },
});

//--------------------------------
