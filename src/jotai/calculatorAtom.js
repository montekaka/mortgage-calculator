import {atom} from 'jotai'

export const propertyAtom = atom({
  housePrice: "800000",
  downPaymentPercentage: "20",
  interestRate: "2.15",
  // loadType: "1",
  rentAmount: "2000",
  hoaAmount: "0",
  propertyTax: "1",
  insuranceAmount: "900",
  vacancyPercentage: "0",
  maintenance: "0"
})

export const loanTypeAtom = atom(8)

export const loanTypesAtom = atom([
  {label: 'Int-Only', years: 30, interestOnly: 1},
  {label: '3/1 ARM', years: 30, interestOnly: 1},
  {label: '5/1 ARM', years: 30, interestOnly: 1},
  {label: '7/1 ARM', years: 30, interestOnly: 1},
  {label: '10 years Fixed', years: 10, interestOnly: 0},
  {label: '15 years Fixed', years: 15, interestOnly: 0},
  {label: '20 years Fixed', years: 20, interestOnly: 0},
  {label: '25 years Fixed', years: 25, interestOnly: 0},
  {label: '30 years Fixed', years: 30, interestOnly: 0},
  {label: '40 years Fixed', years: 40, interestOnly: 0},  
])

export const basicInputAtom = atom([
  {label: 'House Price', id: 'housePrice', prepend: '$', delta: 1000},
  {label: 'Down payment', id: 'downPaymentPercentage', append: '%', delta: 5},
  {label: 'Interest Rate', id: 'interestRate', append: '%', delta: 0.1, fixed: 2}
])

export const updatePropertyAtom = atom((get) => get(propertyAtom), (_get, set, update) => {
  const prevState = _get(propertyAtom);
  set(propertyAtom, {...prevState, ...update})
})

export const updatePropertyDeltaAtom = atom(null, (get, set, changes) => {
  const {id, delta, fixed} = changes;
  const prevState = get(propertyAtom);
  const target = prevState[id];
  const value = Number(target) + delta;
  const update = {[id]: value.toFixed(fixed ? fixed : 0).toString()};
  set(propertyAtom, {...prevState, ...update})
})

export const getLoadTypeLabelAtom = atom((get) => {
  const loanTypeId = get(loanTypeAtom);
  const loanTypes = get(loanTypesAtom);
  return loanTypes[loanTypeId]['label'];
})

export const getMontlyMortgagePaymentAtom = atom((get) => {
  const loanTypeId = get(loanTypeAtom);
  const loanTypes = get(loanTypesAtom);
  const months = loanTypes[loanTypeId]['years'] * 12
  // calculate the annually interest rate
  const {housePrice, downPaymentPercentage, interestRate} = get(propertyAtom);
  const r = Math.pow((1 + Number(interestRate) / 100), 1/12) - 1;
  
  // const r = Number(interestRate) / 12;
  const princple = Number(housePrice) * (1 - Number(downPaymentPercentage) / 100);
  const e = Math.pow((1+r), months)
  const pmt = princple * ( r * e ) / (e - 1);
  return pmt.toFixed(2).toString();
})