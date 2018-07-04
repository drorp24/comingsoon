import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 70vh;
  border-bottom: 1px solid #000;
  color: ${props => props.theme.color};
`

const Section = props => (
  <Container>
    <p>Section</p>
    {props.children}
  </Container>
)

export default Section
