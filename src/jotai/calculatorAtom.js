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
  'Int-Only','3/1 ARM', '5/1 ARM','7/1 ARM','10 Fixed',
  '15 Fixed','20 Fixed','25 Fixed','30 Fixed','40 Fixed'
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
  return loanTypes[loanTypeId];
})