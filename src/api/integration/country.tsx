import countryList from "react-select-country-list"

export const getCountryFlag = (value: string) => {
  return `http://purecatamphetamine.github.io/country-flag-icons/3x2/${value}.svg`
}

export const getCountryLabel = (label: string) => {
  return countryList().getLabel(label)
}

export const getCountryLabels = () => {
  return countryList().getLabels()
}

export const getCountries = () => {
  return countryList().getData()
}
