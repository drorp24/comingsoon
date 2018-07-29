/* eslint no-unused-vars: 'off' */
import React from 'react'
import styled from 'styled-components'
import pencil from '../assets/images/pencil.jpeg'

const Container = styled.div`
  height: 70vh;
  border-bottom: 1px solid #000;
  color: ${props => props.theme.color};
  background-image: url(${props => props.background});
  background-size: 100%;
  background-position: center;
  background-position-y: bottom;
`

const Title = styled.div`
  font-size: ${props => props.theme.section.title.fontSize};
`

const Section = ({ background = '', children }) => (
  <Container background={background}>
    <p>Section</p>
    <Title>{children}</Title>
  </Container>
)

export default Section
