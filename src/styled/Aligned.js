import styled from 'styled-components'
import PropTypes from 'prop-types'
import { css } from 'styled-components'

// notice the conditional
const Aligned = styled.div`
  display: flex;
  justify-content: ${props => (props.around ? 'space-around' : 'center')};
  align-items: center;
  flex-direction: ${props => (props.vertically ? 'column' : 'row')};
  & > div {
    ${props =>
      props.width &&
      css`
        width: ${props.width};
      `};
  }
`

Aligned.propTypes = {
  vertically: PropTypes.bool,
  horizontally: PropTypes.bool,
}

export default Aligned
