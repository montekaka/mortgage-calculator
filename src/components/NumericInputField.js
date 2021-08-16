import React from 'react';
import { StyleSheet, Button, Text, View, TextInput } from 'react-native';


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputField: {
    display: 'flex',
    flexDirection: 'row'
  }
})

const NumericInputField = (props) => {
  const {label, value, id, prepend, append, onChangeText} = props;

  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <View>
        <View style={styles.inputField}>
          {prepend ? <Text>{prepend}</Text> : null}
          <TextInput
            autoFocus={true}
            keyboardType="numeric"
            value={value}
            onChangeText={(val) => {
              onChangeText({[id]: val})
            }}
          />
          {append ? <Text>{append}</Text> : null}
        </View>
        {props.children}
      </View>      
    </View>
  )
}

export default NumericInputField;