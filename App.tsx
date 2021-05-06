/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Data = [
  {id: 0, title: 'Pink'},
  {id: 1, title: 'Purple'},
  {id: 2, title: 'Black'},
  {id: 3, title: 'Grey'},
];

const DataColors = [
  {id: 0, color: 'hotpink'},
  {id: 1, color: 'purple'},
  {id: 2, color: 'black'},
  {id: 3, color: 'grey'},
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [text, onChangeText] = React.useState('');
  const [selectedId, setSelectedId] = React.useState(null);

  const renderItem = ({item}) => {
    const backgroundColor =
      item.id === selectedId ? DataColors[item.id].color : 'white';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <SafeAreaView>
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={{backgroundColor}}
          textColor={{color}}
        />
      </SafeAreaView>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text1}>PROFILE</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200, marginLeft: 40}}
        />
        <View>
          <Text style={styles.text2}>Princess Joy C. Duran</Text>
        </View>
        <Text style={styles.text3}>Favorite Colors:</Text>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
        <Text style={styles.text4}>What do you think about Princess?</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Describe Princess..."
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    height: 900,
  },
  input: {
    height: 70,
    margin: 5,
    borderWidth: 1,
  },
  text1: {
    marginLeft: 110,
    marginTop: 12,
    fontWeight: 'bold',
    fontSize: 18,
  },
  text2: {
    marginBottom: 10,
    marginLeft: 55,
    fontSize: 18,
  },
  text3: {
    marginLeft: 8,
    marginBottom: 10,
    fontSize: 18,
  },
  text4: {
    marginLeft: 8,
    marginTop: 15,
    fontSize: 18,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'grey',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  title: {
    textAlign: 'center',
  },
});

export default App;
