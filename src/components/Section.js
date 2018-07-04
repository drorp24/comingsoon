import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 70vh;
  border-bottom: 1px solid #000;
  color: ${props => props.theme.color};
`

const Title = styled.div`
  font-size: ${props => props.theme.section.title.fontSize};
`

const Section = props => (
  <Container>
    <p>Section</p>
    <Title>{props.children}</Title>
  </Container>
)

export default Section
