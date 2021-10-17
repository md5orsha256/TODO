import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

export default function ListItem({ element }) {
  return (
    <TouchableHighlight>
        <Text style={styles.text}>{element.title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  text: {
      color: "white",
      padding: 10,
      borderWidth: 0.5,
      borderColor: "#303030",
  },
});
