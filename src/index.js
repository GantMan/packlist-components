import AddPackingItem from './addPackingItemWeb'
import SimpleList from './simpleListWeb'

// Switch out for reactNative?
let RNItems = {}
if (!navigator.platform) {
  RNItems = {
    AddPackingItem: require('./native/addPackingItem'),
    SimpleList: require('./native/simpleListWeb'),
    MultiButtonColumn: require('./native/multiButtonColumn')
  }
}

export default {
  AddPackingItem,
  SimpleList,
  ...RNItems
}
