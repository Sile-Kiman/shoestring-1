import React, { useState, useEffect } from 'react';
import httpClient from '../../httpClient';

const Location = () => {
    
  const [currentUserObj, setCurrentUserObj] = useState({
    currentUser: httpClient.getCurrentUser()
  })
  
  return (
        <div className="box">
            <form id="location">
                <p className="subtitle" id="formTitle">Edit your location</p>
                <div className="field">
                    {/* <label className="label">, </label> */}
                    <div className="control has-icons-left">
                  <input className="input" type="text"
                    //  onChange={handleChange}
                    // onBlur={handleBlur}
                    name="city"
                    placeholder={currentUserObj.city}
                    // value={values.city}
                  />
                   {/* {values.city.length <2 &&  touched.city && 'errors' ? (
                        <p className="errMsg">Please enter a valid City</p>
                    ): ''} */}
                  <span className="icon is-small is-left">
                    <i className="fas fa-city"></i>
                  </span>
                </div>
                <div className="control has-icons-left">
                  <input className="input" type="text"
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    name="state"
                    placeholder={currentUserObj.state}
                    // value={values.state}
                  />
                   {/* {values.state.length < 2 &&  touched.state && 'errors' ? (
                    <p className="errMsg">Please enter a valid State</p>
                    ): ''} */}
                  <span className="icon is-small is-left">
                    <i className="far fa-compass"></i>
                  </span>
                </div>
                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-light"
                                //   onClick={handleFormOnsubmit} 
                                //   disabled={!values.phone.match(phoneno)}
                                //   disabled={!values.email.match(emailVal)}
                                //   disabled={!values.checked && 'errors'}
                                id="twofish"
                            >Submit</button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
}

export default Location;