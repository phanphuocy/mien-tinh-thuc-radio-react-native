import React from "react";
import { View, Text as DefaultText, StyleSheet } from "react-native";

export const Text = (props) => {
  return (
    <DefaultText
      {...props}
      style={[styles.text, props.style, props.serif ? styles.serif : null]}
    >
      {props.children}
    </DefaultText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "sans400",
    fontSize: 16,
    // lineHeight: 21,
  },
  serif: {
    fontFamily: "serif400",
  },
});
