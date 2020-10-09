import React, { Component } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
import SplashScreen from "react-native-splash-screen";
import Ent from "react-native-vector-icons/Entypo";
import Fet from "react-native-vector-icons/Feather";
import Ant from "react-native-vector-icons/AntDesign";
import Fot from "react-native-vector-icons/FontAwesome";

import Icon from "react-native-vector-icons/Ionicons";

import login from "./login";
import welcomeScreen from "./welcomeScreen";
import register from "./register";
import home from "./home";
import ResetPassword from "./resetpassword";

import notification from "./notification";
import activity from "./activity";
import search from "./search";
import profile from "./profile";
import clubProfile from "./clubProfile";
import updateprofile from "./updateprofile";

const TabNavigator = createBottomTabNavigator(
  {
    home: {
      screen: home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={"ios-home"} />
          </View>
        ),
      },
    },
    activity: {
      screen: activity,
      navigationOptions: {
        tabBarLabel: "clubs",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={"ios-search"}
            />
          </View>
        ),
      },
    },
    search: {
      screen: search,
      navigationOptions: {
        tabBarLabel: "Announcments",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={"ios-notifications"}
            />
          </View>
        ),
      },
    },
    profile: {
      screen: profile,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={"ios-person"}
            />
          </View>
        ),
      },
    },
  }
  // {
  //   tabBarComponent: DriverTabView,
  // },
);

const navigator = createStackNavigator(
  {
    Login: login,
    welcomeScreen: welcomeScreen,
    register: register,
    bottom: TabNavigator,
    updateprofile: updateprofile,
    resetpassword: ResetPassword,
  },
  {
    initialRouteName: "welcomeScreen",
    headerMode: "none",
    // defaultNavigationOptions: {
    //   title: "KSUClubs",
    // },
  }
);

export default createAppContainer(navigator);
