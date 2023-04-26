import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    const imageLogo = <img style={{ height:180}} src={require('../images/logo3.png')} alt="" />
  return (
    <header><Link to="/Homepage">{imageLogo}</Link></header>
  )

  
}

export default Header