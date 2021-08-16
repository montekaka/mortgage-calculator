import React from 'react';
import { StyleSheet, Button, Text, View, TextInput, Pressable} from 'react-native';

const PlusMinusButton = ({id, onPress, borderLeft, ...props}) => {
  return (
    <View>
      <Pressable
        onPress={() => {
          onPress(id);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed 
              ? '#28A5DB'  : 'rgba(255, 255, 255, 0)',
            borderTopRightRadius: pressed && borderLeft ? 8 : 0,
            borderBottomRightRadius: pressed && borderLeft ? 8 : 0,
            borderTopLeftRadius: pressed && !borderLeft ? 8 : 0,
            borderBottomLeftRadius: pressed && !borderLeft ? 8 : 0            
          },
          styles.container,     
          borderLeft ? styles.borderLeft : null       
        ]}
      >
        {props.children}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // borderRadius: 8,
    width: 50,
    height: 38,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderLeft: {
    borderLeftColor: '#28A5DB',
    borderLeftWidth: 1
  }
})

export default PlusMinusButton;