import React from 'react'
import { TouchableWithoutFeedback, Text, View, StyleSheet } from 'react-native'

const defaultOptions = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const styles = StyleSheet.create({
  button: {
    width: '50%',
    borderWidth: 1,
    // Trick||Hack to stop double border-lines
    marginBottom: -1,
    marginLeft: -1
  },
  buttonText: {
    margin: 18,
    textAlign: 'center',
    fontSize: 12
  }
})

export default class MultiButtonColumn extends React.Component {

  constructor (props) {
    super(props)

    // We've been given state
    if (this.props.value) {
      this.state = {
        options: this.props.value.map(i => i.value),
        items: this.props.value
      }
    // We make state from options
    } else {
      this.state = {
        // create index bound version of options state
        options: this.props.options,
        items: this.props.options.map((v, i) => ({value: v, active: false}))
      }
    }
  }

  // Deprecated - Use static getDerivedStateFromProps()
  // componentWillReceiveProps = (nextProps) => {
  // }
  static getDerivedStateFromProps (nextProps, prevState) {
    // returns setState object
    return {
      options: nextProps.value.map(i => i.value),
      items: nextProps.value
    }
  }

  onToggle = (index) => {
    this.setState((state, props) => {
      let items = state.items
      items[index].active = !items[index].active
      return { items }
    }, this.props.onChange && this.props.onChange.bind(this, this.state.items))
  }

  renderOption = (text, active, index, renderLength) => {
    const evenAmount = renderLength % 2 === 0
    let containerAdjustments = {}
    let textAdjustments = this.props.inactive.font
    // Top left cell
    if (index === 0 && evenAmount) {
      containerAdjustments = { borderTopLeftRadius: this.props.borderRadius }
    // Top alone cell
    } else if (index === 0) {
      containerAdjustments = {
        width: '99.7%',
        borderTopLeftRadius: this.props.borderRadius,
        borderTopRightRadius: this.props.borderRadius
      }
    // Top right cell
    } else if (index === 1 && evenAmount) {
      containerAdjustments = { borderTopRightRadius: this.props.borderRadius }
    // Bottom left cell
    } else if (index === renderLength - 2) {
      containerAdjustments = { borderBottomLeftRadius: this.props.borderRadius }
    // Bottom right cell
    } else if (index === renderLength - 1) {
      containerAdjustments = { borderBottomRightRadius: this.props.borderRadius }
    }

    // check if active
    if (this.state.items[index] && this.state.items[index].active) {
      containerAdjustments = {
        ...containerAdjustments,
        ...this.props.active.cell
      }
      textAdjustments = this.props.active.font
    }

    return (
      <TouchableWithoutFeedback key={text} onPress={this.onToggle.bind(this, index)}>
        <View style={[styles.button, containerAdjustments, this.props.inactive.cell]} >
          <Text style={[styles.buttonText, textAdjustments]}>{text}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  value = () => this.state.items

  renderOptions = () => {
    return this.state.options.map((option, index) => {
      return this.renderOption(option, false, index, this.state.options.length)
    })
  }

  render () {
    return (
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {this.renderOptions()}
      </View>
    )
  }
}

MultiButtonColumn.defaultProps = {
  options: defaultOptions,
  active: {
    font: {
      color: 'white'
    },
    cell: {
      backgroundColor: 'blue'
    }
  },
  inactive: {
    font: {
      color: 'blue'
    },
    cell: {
      borderColor: 'blue'
    }
  },
  borderRadius: 4
}
