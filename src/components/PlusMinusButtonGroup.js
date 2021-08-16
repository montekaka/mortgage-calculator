import React from 'react';
import { StyleSheet, Button, Text, View, TextInput, Pressable} from 'react-native';
import PlusMinusButton from './PlusMinusButton';

const PlusMinusButtonGroup = ({id, delta, fixed, onPressed, ...props}) => {

  const handlePlusPress = (id) => {
    onPressed(id, delta, fixed);
  }

  const handleMinusPress = (id) => {
    onPressed(id, -1*delta, fixed);
  }  

  return (
    <View style={styles.container}>
      <PlusMinusButton id={id} onPress={handleMinusPress}>
        <Text>-</Text>
      </PlusMinusButton>
      <PlusMinusButton id={id} onPress={handlePlusPress} borderLeft={true}>
        <Text>+</Text>
      </PlusMinusButton>      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row', 
    borderColor: '#28A5DB',
    borderWidth: 1,   
    borderRadius: 9    
  }
})

export default PlusMinusButtonGroup