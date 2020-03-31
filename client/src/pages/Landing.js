//import React from 'react';
import './design/Landing.css'
import FriendCard from './../components/FriendCard';
import SubNav from '../components/SubNav'
import NavBarAuth from '../components/NavBarAuth';
import JT_square from '../images/Team/JT_square.png'; //to be replaced with user photo later
// import AddImage from './../components/AddImage';
 import React, { useState, useEffect } from "react";
import httpClient from '../httpClient'
 

function Landing(props, currentUser) {
 
    const [currentUserObj, setCurrentUserObj] = useState({
         currentUser: httpClient.getCurrentUser()
       
    })
 
//Restructuring the data received from history 
    currentUser =[
        {
        firstName:currentUserObj.currentUser.firstName,
        lastName: currentUserObj.currentUser.lastName,
        phone: currentUserObj.currentUser.phone,
        email: currentUserObj.currentUser.email,
        password: currentUserObj.currentUser.password,
    }]

    // Load the available token on pageload from local storage
     useEffect(() => {
        onLoginSuccess()
          
    }, [])

 	const onLoginSuccess= (user) =>{
        
        setCurrentUserObj({ currentUser: httpClient.getCurrentUser(user) })
         console.log("currentUserObj " , currentUserObj )
        console.log("user " , currentUserObj.currentUser.firstName)
	}
	const logOut =() =>{
		httpClient.logOut()
		setCurrentUserObj({ currentUser: null })
	}
	
    return (
        
        <div>
            <NavBarAuth/>
            <div className="outerTile">
                <div className="is-clearfix columns is-centered">
                <div className="tile is-10 container column is-fluid">
                    <div className="tile is-7 is-vertical is-parent">
                        <div className="tile is-child box">
                            <figure className="image is-128x128">
                                <img className="is-rounded" id="userPic" src={JT_square} />
                                <button id="addImage">Add profile picture</button>
                            </figure>
{/* //                             <AddImage /> */}
                            <br />
                            <p>{currentUser[0].firstName} {currentUser[0].lastName}
                            </p>
                            <p id="funds">Funds Available: $100</p>
                            <p id="member">Member Since: April 2019</p>
                        </div>
                        <div className="tile is-child box">
                            <p className="title" id="paymentList">Payments</p>
                            <p>Lisa paid Arnold for pizza</p>
                            <p>Jeff paid Jesus for rent</p>
                        </div>

                    </div>
                    <FriendCard />
                    {/* /// */}
                    {/* <div className="tile is-3 is-child box">
                        <p className="title" id="friendList">Friends</p>
                        <article className="media">
                            <figure className="media-left">
                                <p className="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="userImage"/>
                                </p>
                            </figure>
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <strong id="friendName">Sean Brown</strong>
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </article>
                        <article className="media">
                            <figure className="media-left">
                                <p className="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="userImage"/>
                                </p>
                            </figure>
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <strong id="friendName">Naomi Campbell</strong>
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </article>
                        <article className="media">
                            <figure className="media-left">
                                <p className="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="userImage"/>
                                </p>
                            </figure>
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <strong id="friendName">Jhene Aiko</strong>
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </article>
                        <article className="media">
                            <figure className="media-left">
                                <p className="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="userImage"/>
                                </p>
                            </figure>
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <strong id="friendName">Billy Rae Cyrus</strong>
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </article>
                        <article className="media">
                            <figure className="media-left">
                                <p className="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="userImage"/>
                                </p>
                            </figure>
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <strong id="friendName">Michael Jordan</strong>
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </article>
                        <article className="media">
                            <figure className="media-left">
                                <p className="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="userImage"/>
                                </p>
                            </figure>
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <strong id="friendName">Megan</strong>
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div> */}
                    {/* /// */}
                </div>
                </div>
            </div>
        </div>



    )
}


export default Landing;