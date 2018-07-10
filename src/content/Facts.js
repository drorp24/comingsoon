import React from 'react'
import Fact from '../components/Fact'
import Aligned from '../styled/Aligned'

/* eslint quotes: 'off' */
const Facts = () => (
  <Aligned horizontally>
    <Fact
      title={'Soaring market'}
      start={95}
      end={99.99}
      text={"of world's population have not yet acquired cryptocurrency."}
    />
    <Fact
      title={'Soaring market'}
      start={95}
      end={99.99}
      text={"of world's population have not yet acquired cryptocurrency."}
    />
    <Fact
      title={'Soaring market'}
      start={95}
      end={99.99}
      text={"of world's population have not yet acquired cryptocurrency."}
    />
  </Aligned>
)

export default Facts
