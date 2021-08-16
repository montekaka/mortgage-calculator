import React from 'react';
import { useAtom } from 'jotai';
import { StyleSheet, Button, Text, View, ScrollView, TextInput } from 'react-native';
import {basicInputAtom, updatePropertyAtom} from '../jotai'
import {
  NumericInputField,
  PlusMinusButtonGroup
} from '../components'

const HomeScreen = ({ navigation }) => {

  const [basicInput] = useAtom(basicInputAtom);
  const [propertyState, updatePropertyState] = useAtom(updatePropertyAtom);

  const handleInputChange = (data) => {
    updatePropertyState(data)
  }
  
  return (
    <View>
      <ScrollView>
        <View>
          {basicInput.map((item) => {
            const id = item.id ? item.id : "";
            const value = propertyState[id];
            return <NumericInputField             
              key={id} 
              id={id} 
              onChangeText={handleInputChange}
              value={value} 
              label={item.label}
              prepend={item.prepend}
              append={item.append}
            >
              <PlusMinusButtonGroup id={id}/>
            </NumericInputField>
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