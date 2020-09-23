import React from "react";
import { View, Text as DefaultText, StyleSheet } from "react-native";

export const Text = (props) => {
  let fontStyle = null;

  if (props.serif && !props.bold) {
    fontStyle = {
      fontFamily: "serif400",
    };
  } else if (props.serif && props.bold) {
    fontStyle = {
      fontFamily: "serif600",
    };
  } else if (!props.serif && props.bold) {
    fontStyle = {
      fontFamily: "sans600",
    };
  }

  return (
    <DefaultText {...props} style={[styles.text, props.style, fontStyle]}>
      {props.children}
    </DefaultText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "sans400",
    fontSize: 18,
    opacity: 0.87,
    // lineHeight: 21,
  },
});
