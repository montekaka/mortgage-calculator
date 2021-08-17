import React, {useState} from 'react';
import { useAtom } from 'jotai';
import { StyleSheet, Button, Text, View, SafeAreaView, TextInput } from 'react-native';
import {basicInputAtom, 
  updatePropertyAtom, 
  updatePropertyDeltaAtom,
  loanTypesAtom,
  loanTypeAtom,
  getLoadTypeLabelAtom,
  getMontlyMortgagePaymentAtom,
  getDownpaymentAmountAtom
} from '../jotai'
import {
  NumericInputField,
  PlusMinusButtonGroup,
  PickerView
} from '../components'

const HomeScreen = ({ navigation }) => {
  
  const [basicInput] = useAtom(basicInputAtom);
  const [propertyState, updatePropertyState] = useAtom(updatePropertyAtom);
  const [, updatePropertyDelta] = useAtom(updatePropertyDeltaAtom);
  const [loanTypes] = useAtom(loanTypesAtom);
  const [loanType, setLoanType] = useAtom(loanTypeAtom);
  const [loadTypeLabel] = useAtom(getLoadTypeLabelAtom);
  const [monthlyPayment] = useAtom(getMontlyMortgagePaymentAtom);

  // set up down payment amount
  // const [downpayment] = useAtom(getDownpaymentAmountAtom);

  const handleInputChange = (data) => {
    updatePropertyState(data)
  }

  const handlePlusMinusPressed = (id, delta, fixed) => {
    updatePropertyDelta({id, delta, fixed})
  }

  const handleLoadTypeChanged = (id) => {
    setLoanType(id);
    // setLoanVisiable(false);
  }

  return (
    <SafeAreaView>
      <View>
        <View style={styles.summaryWrapper}>
          <Text style={styles.summaryNumbers}>$ {monthlyPayment}</Text>
          <Text>Monthly payment</Text>                    
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
          <Text style={styles.statCardTitle}>[DOWN PAYMENT]</Text>
          <Text style={styles.statCardSubtitle}>[DOWN PAYMENT]</Text>
          </View>          
        </View>
        <View style={styles.wrapper}>
          <>
            {basicInput.map((item) => {
              const id = item.id ? item.id : "";
              const value = propertyState[id];
              return (
                <View key={id} style={styles.itemContainer}>
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
              )
            })}            
          </>
          <PickerView 
            name={"Loan type"}
            selectedText={loadTypeLabel}
            selectedValue={loanType}
            options={loanTypes}
            setSelected={handleLoadTypeChanged}
          />              
        </View>
        <Button
          title="Advanced"
          onPress={() => navigation.navigate('Advanced')}
        />
      </View>  
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  itemContainer: {
    marginBottom: 10
  },
  summaryWrapper: {
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  summaryNumbers: {
    fontSize: 36
  },
  statsContainer: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row'
  },
  statCard: {
    width: 100,
    height: 120,
    borderRadius: 12,
    backgroundColor: "#122133",
    display: 'flex',
    justifyContent: 'space-between',
    padding: 10
  },
  statCardTitle: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'right'
  },
  statCardSubtitle: {
    color: '#ffffff',
    fontSize: 12,
    textAlign: 'right'
  }  
})

export default HomeScreen