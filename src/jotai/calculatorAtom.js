import {atom} from 'jotai'

export const propertyAtom = atom({
  housePrice: "800000",
  downPaymentPercentage: "2",
  interestRate: "2",
  // loadType: "1",
  rentAmount: "2000",
  hoaAmount: "0",
  propertyTax: "1",
  insuranceAmount: "900",
  vacancyPercentage: "0",
  maintenance: "0"
})

export const updatePropertyAtom = atom((get) => get(propertyAtom), (_get, set, update) => {
  const prevState = _get(propertyAtom);
  set(propertyAtom, {...prevState, ...update})
})

export const basicInputAtom = atom([
  {label: 'House Price', id: 'housePrice', prepend: '$'},
  {label: 'Down payment %', id: 'downPaymentPercentage', append: '%'}
])