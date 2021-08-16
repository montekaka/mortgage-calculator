import React from 'react';
import { StyleSheet, Button, Text, View, TextInput } from 'react-native';

const NumericInputField = ({label, value, id, prepend, append, onChangeText, ...props}) => {
  
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <View style={styles.wapprer}>
        <View>
          <View style={styles.inputField}>
            {prepend ? <Text>{prepend}</Text> : null}
            <TextInput
              selectTextOnFocue={true}
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
        </View>
        <View>
          {props.children}
        </View>
      </View>      
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  wapprer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputField: {
    display: 'flex',
    flexDirection: 'row',    
    height: 40,
    // margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: 120,
    justifyContent: 'space-between',
    alignItems: "center",
    marginRight: 10
  },
  input: {
    paddingLeft: 2,
    paddingRight: 2,
    width: 90,
    textAlign: 'right'
    // height: 40,
    // margin: 12,
    // borderWidth: 1,
    // padding: 10,
  },  
})

export default NumericInputField;