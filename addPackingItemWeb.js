import React, { Component } from 'react'

export default class AddPackingItem extends Component {
  render () {
    return (
      <div style={styles.container}>
        <input
          placeholder='Packing Item'
          type='text'
          onChange={this.props.setNewItemText}
          value={this.props.value}
          style={styles.inputStyle}
        />
        <button
          style={styles.buttonAdd}
          onClick={this.props.addItem}
        >
          ADD
        </button>
        <button
          style={styles.buttonClear}
          onClick={this.props.clear}
        >
          CLEAR
        </button>
      </div>
    );
  }
}

const buttonStyle = {
  alignSelf: 'center',
  borderRadius: 4,
  margin: 5,
  height: 30
}
const styles = {
  inputStyle: {
    flex: 1,
    backgroundColor: '#ddf',
    paddingHorizontal: 4,
    height: 30,
    borderRadius: 4,
    borderStyle: 'solid',
    border: 'none'
  },
  buttonAdd: {
    ...buttonStyle,
    backgroundColor: '#cfc',
  },
  buttonClear: {
    ...buttonStyle,
    backgroundColor: '#faa'
  },
  container: {
    flexDirection: 'row',
    padding: 5
  }
}
