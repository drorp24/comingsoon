/* eslint no-unused-vars: 'off' */
import React from 'react'
import styled from 'styled-components'
import pencil from '../assets/images/pencil.jpeg'
import dream from '../assets/images/dream.jpeg'

const Container = styled.div`
  height: 100vh;
  color: ${props => props.theme.color};
  background-image: url(${props => props.background});
  background-size: 100%;
  background-position: center;
  background-position-y: bottom;
  background-repeat: no-repeat;
`

const Title = styled.div`
  font-size: ${props => props.theme.section.title.fontSize};
`

const Section = ({ background = '', children }) => (
  <Container background={background}>
    <Title>{children}</Title>
  </Container>
)

export default Section
