import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>TODO://</Text>
    </View>
    );
  }
  
  const styles = StyleSheet.create({
    main: {
      paddingTop: 55,
      height: 100,
      backgroundColor: "#F83E5B",
    },
    text: {
      color: "white",
      fontSize: 20,
      textAlign: "center",
      fontWeight: "bold"
    }
  });
  