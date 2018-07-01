import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-globe" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Crymbo</h1>
        <p>A crypto community.</p>
        <p>Coming soon to someone near you.</p>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
