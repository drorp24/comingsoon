import React, { Component } from 'react'
import Circle from 'react-circle'
import InViewMonitor from 'react-inview-monitor'

class Statistics extends Component {
  constructor(props) {
    super(props)
    this.state = { progress: 0 }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ progress: 55 })
      console.log('now')
    }, 3000)
  }

  render() {
    return (
      <InViewMonitor
        classNameNotInView="vis-hidden"
        classNameInView="two_thirds right half_section_height"
        childPropsInView={{ progress: this.state.progress }}
      >
        <Circle
          progress={this.state.progress}
          animate={true}
          responsive={true}
          libeWidth={50}
          roundedStroke={true}
        />
      </InViewMonitor>
    )
  }
}

export default Statistics
