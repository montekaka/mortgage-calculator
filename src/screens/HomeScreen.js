import React from 'react';
import { useAtom } from 'jotai';
import { StyleSheet, Button, Text, View, ScrollView, TextInput } from 'react-native';
import {basicInputAtom, updatePropertyAtom, updatePropertyDeltaAtom} from '../jotai'
import {
  NumericInputField,
  PlusMinusButtonGroup
} from '../components'

const HomeScreen = ({ navigation }) => {

  const [basicInput] = useAtom(basicInputAtom);
  const [propertyState, updatePropertyState] = useAtom(updatePropertyAtom);
  const [, updatePropertyDelta] = useAtom(updatePropertyDeltaAtom);

  const handleInputChange = (data) => {
    updatePropertyState(data)
  }

  const handlePlusMinusPressed = (id, delta, fixed) => {
    updatePropertyDelta({id, delta, fixed})
  }

  return (
    <View>
      <View>
        <View style={styles.wrapper}>
          {basicInput.map((item) => {
            const id = item.id ? item.id : "";
            const value = propertyState[id];
            return <View key={id} style={styles.itemContainer}>
                <NumericInputField         
                  id={id} 
                  onChangeText={handleInputChange}
                  value={value} 
                  label={item.label}
                  prepend={item.prepend}
                  append={item.append}
                >
                  <PlusMinusButtonGroup 
                    id={id} 
                    delta={item.delta}
                    fixed={item.fixed}
                    onPressed={handlePlusMinusPressed}/>
                </NumericInputField>
            </View>
          })}
        </View>
        <Button
          title="Advanced"
          onPress={() => navigation.navigate('Advanced')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  itemContainer: {
    marginBottom: 10
  }
})

export default HomeScreen