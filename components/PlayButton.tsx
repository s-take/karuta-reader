import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 5,
    width: "95%",
    height: 100,
    backgroundColor: "#12cad6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  }
});

type Props = {
  onPress: () => void;
};

const PlayButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>つぎへ</Text>
    </TouchableOpacity>
  );
};

export default PlayButton;
