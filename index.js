import AddPackingItem from './addPackingItemWeb'
import SimpleList from './simpleListWeb'

// Switch out for reactNative?
let RNItems = {}
if (!navigator.platform) {
  RNItems = {
    AddPackingItem: require('./addPackingItem'),
    SimpleList: require('./simpleListWeb'),
    MultiButtonColumn: require('./multiButtonColumn')
  }
}

export default {
  AddPackingItem,
  SimpleList,
  ...RNItems
}
