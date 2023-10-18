import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import * as Font from "expo-font";

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.nameUser}>Natali Romanova</Text>
      <Text>email@example.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // publicUser: {
  //   flex: 1,
  //   flexDirection: "column",
  //   marginTop: 50,
  //},
  nameUser: {
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15.23,
    color: "#212121",
  },
});
