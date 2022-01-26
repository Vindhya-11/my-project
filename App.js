import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [people, setPeople] = useState(
    [
      //{ name: 'abdul', key: '1' },
      { name: 'ansari', key: '2' },
      { name: 'abhinav', key: '3' },
      { name: 'niket', key: '4' },
      { name: 'harshit', key: '5' },
      { name: 'abdul', key: '6' },
      { name: 'ansari', key: '7' },
      { name: 'abhinav', key: '8' },
      { name: 'niket', key: '9' },
      { name: 'harshit', key: '10' },
      { name: 'abdul', key: '11' },
      { name: 'ansari', key: '12' },
      { name: 'abhinav', key: '13' },
      { name: 'niket', key: '14' },
     

    ]
  )

  return (
    <View style={styles.container}>
    <ScrollView>
      {
        people.map((item) => {
          return (
            <View key={item.key}>
              <Text style = {styles.item}>{item.name}</Text>
            </View>
          )
        }
        )}
        </ScrollView>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxStyle: {
    width: 50, height: 50, backgroundColor: 'powderblue'
  },
  input: {
    //border: '1px solid',
    borderColor: 'blue',
    padding: 8,
  },
  item: {
    marginTop: 25,
    paddingBottom: 5, 
    height: 30 ,
    backgroundColor: 'pink',
    fontSize: 24,
  }
});

/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {userState} from 'react';

export default function App() {

  const [name,setName] = userState('Vindhya')
  const clickHandler = () => {
    setName('Prakash')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.bigBlue}>Welcome!</Text>
      <Text style={styles.bigRed}>To Bajaj Finserv !</Text>
      <Text>My name is {name}</Text>
      <Text></Text>
      <Button title= 'Update Name' onPress = {clickHandler} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  bigRed: {
    color: 'reg',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [name,setName] = useState('Vindhya')
  const [person, setPerson] = useState({name: 'Prakash', age: 123})

  const [age,setAge] = useState('30')


  const clickHandler = () => {
    setName('ansari')
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>his name is {person.name} and his age is  {age}</Text>
      <TextInput 
      style={styles.input}
      placeholder = 'enter name'
      onChangeText = {(val) => setName(val)}
      />

      <TextInput 
      keyboardType = 'numeric'
      style={styles.input}
      placeholder = 'enter age eg 99'
      onChangeText = {(val) => setAge(val)}
      />
      <Button title = 'update state'  onPress = {clickHandler}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxStyle : {
    width: 50, height: 50, backgroundColor: 'powderblue'
  },
  input: {
    borderColor:'black',
    borderRadius: 5,
    padding: 8,
  }
});
*/