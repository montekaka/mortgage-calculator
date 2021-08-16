import React from 'react';
import { StyleSheet, Button, Text, View, TextInput } from 'react-native';


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputField: {
    display: 'flex',
    flexDirection: 'row',    
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  input: {
    paddingHorizontal: 2,
    width: 120,
    textAlign: 'right'
    // height: 40,
    // margin: 12,
    // borderWidth: 1,
    // padding: 10,
  },  
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
            style={styles.input}
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