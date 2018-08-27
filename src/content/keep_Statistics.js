import React from 'react'
import Circle from 'react-circle'
import InViewMonitor from 'react-inview-monitor'

const Statistics = () => (
  <InViewMonitor
    classNameNotInView="vis-hidden"
    classNameInView="two_thirds right half_section_height"
    childPropsInView={{ progress: 52 }}
  >
    <Circle
      progress={0}
      animate={true}
      responsive={true}
      libeWidth={50}
      roundedStroke={true}
    />
  </InViewMonitor>
)

export default keep_Statistics
