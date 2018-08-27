import React from 'react'
import Fact from '../components/Fact'
import Aligned from '../styled/Aligned'

/* eslint quotes: 'off' */
const Facts = () => (
  <Aligned vertically className="section_height">
    <Aligned horizontally around width={'30%'}>
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
  </Aligned>
)

export default Facts
