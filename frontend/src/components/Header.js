import React from 'react'

const Header = () => {
    const imageLogo = <img style={{ height:180}} src={require('../images/logo3.png')} alt="" />
  return (
    <header>{imageLogo}</header>
  )
}

export default Header