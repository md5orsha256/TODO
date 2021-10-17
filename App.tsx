import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import Header from './components/Header.tsx';
import ListItem from './components/ListItem.tsx';

export default function App() {
  const [listOfTasks, setListOfTasks] = useState([
    {title: "First task", idx: "1"},
    {title: "Second tasks", idx: "2"},
    {title: "Third task", idx: "3"},
  ])

  return (
    <View style={styles.container}>
      <Header/>
      <FlatList data={listOfTasks} renderItem={({ item }) => (
        <ListItem element={item} />
      )} keyExtractor={item => item.idx}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#282828",
    height: "100%"
  },
});
