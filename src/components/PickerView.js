import React, {useRef, useState} from 'react';
import {  Overlay, Button, ListItem } from 'react-native-elements';
import { StyleSheet, Text, View, TextInput, Icon, ScrollView, Pressable} from 'react-native';

const PickerView = ({name, setSelected, selectedText, selectedValue, options, ...props}) => {

  const [visable, setVisable] = useState(false);

  if(!visable) {
    return (
      <View style={styles.container}>
        <Text>{name}</Text>
        <Pressable 
          style={styles.inputBox}
          onPress={() => {
            setVisable(!visable)
          }}
        >
          <Text>{selectedText}</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <Overlay 
      isVisible={visable} 
      fullScreen={true}
    >
      <ScrollView>
        {
          options.map((opt, idx) => {
            return (
              <ListItem key={idx.toString()} 
                bottomDivider                          
                onPress={() => {
                  setSelected(idx)
                  setVisable(!visable)
                }}
                containerStyle={{
                  height: 50
                }}
              >
                <ListItem.Content>
                  <ListItem.Title>{opt}</ListItem.Title>
                </ListItem.Content>
                {idx === selectedValue ? <ListItem.CheckBox checked={true}/> : null}
              </ListItem>
            )
          })
        }
      </ScrollView>
    </Overlay>
    
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50
  },
  inputBox: {
    display: 'flex',
    alignItems: 'flex-end',      
    height: 40,
    padding: 10,
    width: 120,    
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
  }
})

export default PickerView;