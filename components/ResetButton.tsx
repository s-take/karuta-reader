import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 5,
    width: "95%",
    height: 60,
    backgroundColor: "#ccc",
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

const ResetButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>リセット</Text>
    </TouchableOpacity>
  );
};

export default ResetButton;
