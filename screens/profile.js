import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Ant from "react-native-vector-icons/AntDesign";
import Ent from "react-native-vector-icons/Entypo";
import Mci from "react-native-vector-icons/MaterialCommunityIcons";
import Ftt from "react-native-vector-icons/Fontisto";
import Fas from "react-native-vector-icons/FontAwesome";

import firebase from "../src/firebase/config";
import { LinearGradient } from "expo-linear-gradient";
var parse = require("url-parse");
var url = "";
var backurl = "";
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default class Profile extends Component {
  constructor() {
    super();
    (this.state = {
      id: "",
      name: "",
      email: "",
      image: "",
      back: "",
    }),
      (this.user = firebase.auth().currentUser);
  }

  async componentDidMount() {
    var id;
    var name;
    var email;
    var image;
    var back;

    await firebase
      .database()
      .ref("/users/student/" + this.user.uid)
      .once("value")
      .then((snapshot) => {
        id = snapshot.val().id;
        name = snapshot.val().name;
        email = snapshot.val().email;
        image = snapshot.val().image;
        back = snapshot.val().backgroundImage;

        console.log(name);
      });
    url = parse(image, true);
    console.log(url.toString());
    backurl = parse(back, true);
    await this.setState({
      id: id,
      name: name,
      email: email,
      image: image,
      back: back,
    });
  }

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigation.navigate("Login");
      })
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  render() {
    const lang = this.props.locale;

    return (
      <SafeAreaView style={styles.container}>
        {this.state.back == "" && (
          <LinearGradient
            start={{
              x: 0.79,
              y: 0.41,
            }}
            end={{
              x: -0.04,
              y: 0.62,
            }}
            locations={[0, 1]}
            colors={["#81C5FB", "#A8EAE1"]}
            style={styles.linear}
          >
            <TouchableOpacity
              style={{ position: "absolute", right: 15, top: 20 }}
              onPress={() => this.signOut()}
            >
              <Ent name="log-out" color={"#A20000"} size={30} />
              {/* A2A6A8 */}
            </TouchableOpacity>
          </LinearGradient>
        )}

        {this.state.back != "" && (
          <ImageBackground
            source={{ uri: backurl.toString() }}
            style={{ width: "100%", height: 200, alignItems: "center" }}
          >
            <TouchableOpacity
              style={{ position: "absolute", right: 15, top: 20 }}
              onPress={() => this.signOut()}
            >
              <Ent name="log-out" color={"#A20000"} size={30} />
              {/* A2A6A8 */}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.selectImage()}>
              <Image
                source={{ uri: this.state.imageUrl }}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 20,
                }}
              />
            </TouchableOpacity>
          </ImageBackground>
        )}
        <View style={{ paddingTop: 10 }}>
          <View style={{ height: 50, alignItems: "center" }}>
            {this.state.image == "" && (
              <Image
                source={{
                  uri:
                    "http://www.cybecys.com/wp-content/uploads/2017/07/no-profile.png",
                }}
                style={{
                  width: 130,
                  height: 130,
                  position: "absolute",
                  top: -100,
                  borderRadius: 50,
                }}
              />
            )}
            {this.state.image != "" && (
              <Image
                source={{ uri: url.toString() }}
                style={{
                  width: 130,
                  height: 130,
                  position: "absolute",
                  top: -100,
                  borderRadius: 50,
                }}
              />
            )}
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginLeft: 50, marginTop: 30 }}>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Fas name="user" color={"#000000"} size={28} />
                <Text style={{ fontSize: 25 }}> Name:</Text>
                <Text style={{ fontSize: 25 }}> {this.state.name}</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 50 }}>
                <Ftt
                  name="email"
                  color={"#000000"}
                  style={{ marginTop: 5 }}
                  size={25}
                />
                <Text style={{ marginLeft: 10, fontSize: 25 }}>Email:</Text>
                <Text style={{ fontSize: 25 }}> {this.state.email}</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 50 }}>
                <Ant
                  name="lock"
                  color={"#000000"}
                  style={{ marginTop: 5 }}
                  size={25}
                />
                <Text style={{ marginLeft: 5, fontSize: 25 }}>Password</Text>
                {/* <Text style={{fontSize:25}}>12345678</Text> */}
              </View>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("updateprofile")}
              style={{ position: "absolute", right: 15, top: 35 }}
            >
              <Ant name="setting" color={"#000000"} size={28} />
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: "flex-end", marginTop: -30 }}>
            <TouchableOpacity
              style={{ marginRight: 100 }}
              onPress={() => this.props.navigation.navigate("resetpassword")}
              style={{ marginRight: 100 }}
            >
              <Mci name="lock-reset" color={"#000000"} size={28} />
            </TouchableOpacity>
          </View>
          {/* <View style={{ marginLeft: 30, marginTop: 20 }}>
            <Text style={{ fontSize: 30 }}>Followed Clubs:</Text>
            <Text>Digital Minds.</Text>
            
          </View> */}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  main: {
    height: 0.9 * DEVICE_HEIGHT,
    marginTop: 0.05 * DEVICE_HEIGHT,
    backgroundColor: "#F7F7F7",
    marginLeft: 0.05 * DEVICE_WIDTH,
    marginRight: 0.05 * DEVICE_WIDTH,
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  linear: {
    height: 200,
    paddingTop: 15,
    paddingRight: 15,
  },
});
