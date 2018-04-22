import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

const styles = StyleSheet.create({
  itemText: {
    fontSize: 18
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderColor: 'blue',
    padding: 1,
    paddingHorizontal: 6
  }

})

export default class SimpleList extends Component {
  state = {
    allItems: []
  }

  listItems = () => {
    return this.state.allItems.map(item =>
      <View style={styles.itemContainer} key={item}>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    )
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    // window.alert(nextProps.value)
    return {
      allItems: nextProps.value
    }
  }

  render() {
    return (
        <View>
          { this.listItems() }
        </View>
    )
  }
}
