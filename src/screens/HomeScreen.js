import React from 'react';
import { useAtom } from 'jotai';
import { StyleSheet, Button, Text, View, ScrollView, TextInput } from 'react-native';
import {basicInputAtom, updatePropertyAtom} from '../jotai'


const HomeScreen = ({ navigation }) => {

  const [basicInput] = useAtom(basicInputAtom);
  const [propertyState, updatePropertyState] = useAtom(updatePropertyAtom);
  
  return (
    <View>
      <Text>Hello world</Text>
      <ScrollView>
        <View>
          {basicInput.map((item) => {
            const id = item.id ? item.id : "";

            return <View key={item.id} style={{display: 'flex'}}>
              <Text>{item.label}</Text>
            </View>
          })}
        </View>
        <Button
          title="Advanced"
          onPress={() => navigation.navigate('Advanced')}
        />
      </ScrollView>
    </View>
  )
}

export default HomeScreen