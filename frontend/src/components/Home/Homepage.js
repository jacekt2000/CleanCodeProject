import React, { useState } from 'react';
import HeaderSmall from '../HeaderSmall'
import { Link } from 'react-router-dom';
import '../../style/register.css';
import Tag from '../Tag';
import CardList from './CardList';
// import ImageList from '../ImageList'


const Homepage = () => {


    return (

        <div className='homepage'>
            <div className='header'>

                <nav className='navBar'>
                    <HeaderSmall className='logoSmall' key={"header"} />

                    <div className='searchLine'>
                        <div className='searchButton'>
                            <input className='search' type='text' ></input>
                            <button type="submit" className='searchForm'>Search</button>
                        </div>
                    </div>
                    <div className='buttomsNav'>
                        <div className='registrationButton'>
                            <Link to="/register" className='signUp'>Sign up</Link>
                        </div>

                        <div className='loginButton'>
                            <Link to="/login" className="signIn">Sign in</Link>
                        </div>
                    </div>

                </nav>
                <Tag key={"tag"} />


            </div>

            <CardList />

        </div>
    )
}
export default Homepage


