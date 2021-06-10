import React from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#333",
    fontSize: 20,
    fontWeight: "bold"
  }
});

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;
