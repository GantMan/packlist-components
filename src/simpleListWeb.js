import React, { Component } from 'react'

export default class SimpleList extends Component {
  state = {
    allItems: []
  };

  listItems = () => {
    return this.state.allItems.map(item => (
      <div style={styles.itemContainer} key={item}>
        {item}
      </div>
    ))
  };

  static getDerivedStateFromProps (nextProps, prevState) {
    return {
      allItems: nextProps.value
    }
  }

  render () {
    return <div style={styles.allItemsContainer}>{this.listItems()}</div>;
  }
}

const styles = {
  allItemsContainer: {
    display: 'inline-block'
  },
  itemContainer: {
    height: 15,
    padding: 4,
    borderBottom: '1px solid blue'
  }
}
