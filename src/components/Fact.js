import React from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import InViewMonitor from 'react-inview-monitor'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const counterStyle = {
  fontWeight: '900',
  fontSize: '4em',
  color: '#000',
}

const Title = styled.div`
  font-weight: 700;
  font-size: 1em;
  text-transform: uppercase;
  color: #000;
`

const Text = styled.div`
  font-weight: 400;
  font-size: 1em;
  color: #888;
  text-align: center;
`

const Counter = props => (
  <InViewMonitor
    classNameNotInView="vis-hidden"
    classNameInView="centered"
    childPropsInView={{ start: props.start }}
  >
    <CountUp
      start={0}
      end={props.end}
      duration={3}
      decimals={2}
      style={counterStyle}
      suffix={'%'}
    />
  </InViewMonitor>
)

const Fact = props => (
  <InViewMonitor classNameNotInView="vis-hidden" classNameInView="centered">
    <Container>
      <Title>{props.title}</Title>
      <Counter start={props.start} end={props.end} />
      <Text>{props.text}</Text>
    </Container>
  </InViewMonitor>
)

Fact.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
  text: PropTypes.string,
}

export default Fact
