import React, { Component } from 'react'
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

export default class AddPackingItem extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TextInput placeholder='Packing Item'
          autoFocus
          clearTextOnFocus
          onSubmitEditing={this.props.addItem}
          onChangeText={this.props.setNewItemText}
          value={this.props.value}
          returnKeyLabel='Add Item'
          returnKeyType='done'
          style={{flex: 1, backgroundColor: '#ddf', paddingHorizontal: 4}}
        />
        <TouchableOpacity
          style={[{backgroundColor: '#cfc'}, styles.button]}
          onPress={this.props.addItem}>
          <Text>ADD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[{backgroundColor: '#faa'}, styles.button]}
          onPress={this.props.clear}>
          <Text>CLEAR</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderRadius: 4,
    margin: 5,
    padding: 10
  },
  container: {
    flexDirection: 'row',
    padding: 5
  }
})
