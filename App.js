import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Header from './Components/Header';
import ListItem from './Components/ListItem';
import AddItem from './Components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Eggs'},
    {id: 3, text: 'Bread'},
    {id: 4, text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
      });
  }

  const addItem = (text) => {
    setItems(prevItems => {
      return [{text}, ...prevItems];
    });
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}/>
      <FlatList
      data={items}
      renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />}
      />
      <Image source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}} style={styles.img}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  }
});

export default App;
