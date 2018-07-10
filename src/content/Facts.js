import React from 'react'
import Fact from '../components/Fact'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Aligned = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

/* eslint quotes: 'off' */
const Facts = () => (
  <Aligned>
    <Container className="fadeIn">
      <Fact
        title={'Soaring market'}
        count={99}
        text={"of world's population have not yet acquired cryptocurrency."}
      />
    </Container>
    <Container className="fadeIn">
      <Fact
        title={'Soaring market'}
        count={99}
        text={"of world's population have not yet acquired cryptocurrency."}
      />
    </Container>
    <Container className="fadeIn">
      <Fact
        title={'Soaring market'}
        count={99}
        text={"of world's population have not yet acquired cryptocurrency."}
      />
    </Container>
  </Aligned>
)

export default Facts
