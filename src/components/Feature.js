import React from 'react'
import InViewMonitor from 'react-inview-monitor'
import styled from 'styled-components'

const Title = styled.div`
  font-weight: 700;
  font-size: 2em;
  margin-bottom: 1em;
`

const Text = styled.div`
  text-align: center;
`

const Feature = props => (
  <InViewMonitor
    classNameNotInView="vis-hidden"
    classNameInView="animated fadeInUp delay centered"
  >
    <div>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
    </div>
  </InViewMonitor>
)

export default Feature
