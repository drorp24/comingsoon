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

const Facts = () => (
  <Aligned>
    <Container>
      <Fact
        title={'Soaring market'}
        count={99}
        text={"of world's population have not yet acquired cryptocurrency."}
      />
    </Container>
    <Container>
      <Fact
        title={'Soaring market'}
        count={99}
        text={"of world's population have not yet acquired cryptocurrency."}
      />
    </Container>
    <Container>
      <Fact
        title={'Soaring market'}
        count={99}
        text={"of world's population have not yet acquired cryptocurrency."}
      />
    </Container>
  </Aligned>
)

export default Facts
