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

const Counter = styled.div`
  font-weight: 900;
  font-size: 5em;
  color: #000;
`

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

const Fact = props => (
  <InViewMonitor
    classNameNotInView="vis-hidden"
    classNameInView="animated fadeInUp delay"
  >
    <Container>
      <Title>{props.title}</Title>
      <Counter>
        <CountUp start={0} end={props.count} duration={3} />%
      </Counter>
      <Text>{props.text}</Text>
    </Container>
  </InViewMonitor>
)

Fact.propTypes = {
  title: PropTypes.string,
  count: PropTypes.string,
  text: PropTypes.number,
}

export default Fact
