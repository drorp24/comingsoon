import styled from 'styled-components'
import PropTypes from 'prop-types'

const Aligned = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => (props.vertically ? 'column' : 'row')};
`

Aligned.propTypes = {
  vertically: PropTypes.bool,
  horizontally: PropTypes.bool,
}

export default Aligned
