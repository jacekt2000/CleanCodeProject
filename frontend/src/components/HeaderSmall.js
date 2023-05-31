import React from 'react'
import { Link } from 'react-router-dom';

const HeaderSmall = () => {
    const imageLogo = <img style={{ height:60}} src={require('../images/logo3.png')} alt="" />
  return (
    <header><Link to="/login">{imageLogo}</Link></header>
  )

  
}

export default HeaderSmall