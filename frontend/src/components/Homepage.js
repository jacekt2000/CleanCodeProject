import React, { useState } from 'react';
import Header from './Header';
import HeaderSmall from './HeaderSmall';
import { Link } from 'react-router-dom';
import '../style/register.css';
import ImageList from './ImageList';
import Tag from './Tag';


const Homepage = () => {


    return(

        <div className='homepage'>
            <div className='header'>
                <div className='navBar'>
            
            


                        <div className='logoSmall'>
                            <HeaderSmall/>
                        </div>
                        
                        <div className='searchLine'>
                            <form><input className='search' type='text' ></input></form>
                            <div className='searchButton'>
                                <button type="submit" className='searchForm'>Search</button>
                            </div>
                        </div>
                        <div className='buttomsNav'>
                            <div className='registrationButton'>
                                <Link to="/Register" className='signUp'>Sign up</Link>
                            </div>

                            <div className='loginButton'>
                                <Link to="/Login" className="signIn">Sign in</Link>
                            </div>
                        </div>

                    </div>

                    <div className='categoryBar'>
                        <Tag/>
                        

                    </div>
                </div>

                <div className='photosSection'>
                <ImageList/>
                    {/* <div className='photo'>
                        
                        <div className='image'>
                        <img  src={require('../images/testowe/2.gif')} alt="" />
                        </div>
                        <div className='photoDescription'>
                            opis zdjęcia<br/>like i komentarze
                            <img  src={require('../images/testowe/like.png')} alt="" />
                        </div>
                    </div>

                    <div className='photo'>
                        <div className='image'>
                        <img  src={require('../images/testowe/2.gif')} alt="" />
                        </div>
                        <div className='photoDescription'>
                        opis zdjęcia<br/>like i komentarze
                        </div>
                    </div>
                    <div className='photo'>
                        <div className='image'>
                        <img  src={require('../images/testowe/2.gif')} alt="" />
                        </div>
                        <div className='photoDescription'>
                        opis zdjęcia<br/>like i komentarze
                        </div>
                    </div>
                    <div className='photo'>
                        <div className='image'>
                        <img  src={require('../images/testowe/2.gif')} alt="" />
                        </div>
                        <div className='photoDescription'>
                        opis zdjęcia<br/>like i komentarze
                        </div>
                    </div>
                    <div className='photo'>
                        <div className='image'>
                        <img  src={require('../images/testowe/2.gif')} alt="" />
                        </div>
                        <div className='photoDescription'>
                        opis zdjęcia<br/>like i komentarze
                        </div>
                    </div>
                    <div className='photo'>
                        <div className='image'>
                        <img  src={require('../images/testowe/1.gif')} alt="" />
                        </div>
                        <div className='photoDescription'>
                        opis zdjęcia<br/>like i komentarze
                        </div>
                    </div>
                    <div className='photo'>
                        <div className='image'>
                        <img  src={require('../images/testowe/1.gif')} alt="" />
                        </div>
                        <div className='photoDescription'>
                        opis zdjęcia<br/>like i komentarze
                        </div>
                    </div>

                    <div className='photo'>
                        <div className='image'>
                        <img  src={require('../images/testowe/1.gif')} alt="" />
                        </div>
                        <div className='photoDescription'>
                        opis zdjęcia<br/>like i komentarze
                        </div>
                    </div>
                    <div className='photo'>
                        <div className='image'>
                        <img  src={require('../images/testowe/1.gif')} alt="" />
                        </div>
                        <div className='photoDescription'>
                        opis zdjęcia<br/>like i komentarze
                        </div>
                    </div>
                    <div className='photo'>
                        <div className='image'>
                        <img  src={require('../images/testowe/1.gif')} alt="" />
                        </div>
                        <div className='photoDescription'>
                        opis zdjęcia<br/>like i komentarze
                        </div>
                    </div>
                    <div className='photo'>
                        <div className='image'>
                        <img  src={require('../images/testowe/1.jpg')} alt="" />
                        </div>
                        <div className='photoDescription'>
                        opis zdjęcia<br/>like i komentarze
                        </div>
                    </div>
                    <div className='photo'>
                        <div className='image'>
                        <img  src={require('../images/testowe/2.jpg')} alt="" />
                        </div>
                        <div className='photoDescription'>
                        opis zdjęcia<br/>like i komentarze
                        </div>
                    </div> */}
                    

                </div>

            </div>
    )
}
export default Homepage


