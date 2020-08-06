import React, { useState } from "react";
import Password from "../PersonalInfo/Password";
import AddImage from "../AddImage";
import httpClient from "../../httpClient";
// import BankInformation from '../PersonalInfo/BankInformation';

function EditSettings(currentUser) {
  const [currentUserObj, setCurrentUserObj] = useState({
    currentUser: httpClient.getCurrentUser(),
  });

  currentUser = [
    {
      name: currentUserObj.currentUser.name,
      email: currentUserObj.currentUser.email,
      city: currentUserObj.currentUser.city,
      state: currentUserObj.currentUser.state,
      phone: currentUserObj.currentUser.phone,
    },
  ];

  return (
    <>
      {currentUserObj.currentUser !== null ? (
        <div className="column is-two-thirds content" id="personal-information">
          <div className="box">
            <h2 className="title is-3">Personal Information</h2>
            <p>
              If you are changing your personal information, please make sure it
              is the same as the legal informtaion associated with your bank
              account.
            </p>
            <div id="name">
              <div>
                <form>
                  <p className="subtitle" id="formTitle">
                    Edit your name
                  </p>
                  <div className="field">
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="text"
                        name="name"
                        placeholder={currentUser[0].name}
                      />
                      {/* {values.name.length < 1 && touched.name && 'errors' ? (
                    <p className="errMsg">Please enter your name</p>
                            ): ''} */}
                      <span className="icon is-small is-left">
                        <i className="fas fa-user-astronaut"></i>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div id="phone-number">
              <div>
                <form>
                  <p className="subtitle" id="formTitle">
                    Edit your phone number
                  </p>
                  <div className="field">
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="text"
                        name="phone"
                        placeholder={currentUser[0].phone}
                      />
                      {/* {!values.phone.match(phoneno) &&  touched.phone && 'errors' ? (
                              <p className="errMsg">Please enter a valid Phone</p>
                            ): ''} */}
                      <span className="icon is-small is-left">
                        <i className="fas fa-mobile-alt"></i>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div id="location">
              <div>
                <form>
                  <p className="subtitle" id="formTitle">
                    Edit your location
                  </p>
                  <div className="field">
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="text"
                        name="city"
                        placeholder={currentUser[0].city}
                      />
                      {/* {values.city.length <2 &&  touched.city && 'errors' ? (
                        <p className="errMsg">Please enter a valid City</p>
                    ): ''} */}
                      <span className="icon is-small is-left">
                        <i className="fas fa-city"></i>
                      </span>
                    </div>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="text"
                        name="state"
                        placeholder={currentUser[0].state}
                      />
                      {/* {values.state.length < 2 &&  touched.state && 'errors' ? (
                    <p className="errMsg">Please enter a valid State</p>
                    ): ''} */}
                      <span className="icon is-small is-left">
                        <i className="far fa-compass"></i>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div id="email">
              <div className="box">
                <form>
                  <p className="subtitle" id="formTitle">
                    Edit your email
                  </p>
                  <div className="field">
                    <div className="control has-icons-left has-icons-right">
                      <input
                        className="input "
                        type="email"
                        name="email"
                        placeholder={currentUser[0].email}
                      />
                      {/* {!values.email.match(emailVal) &&  touched.email && 'errors' ? (
                        <p className="errMsg">Please enter a valid Email</p>
                      ): ''} */}
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                    </div>
                    <div className="field is-grouped">
                      <div className="control">
                        <button className="button is-light" id="twofish">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="edit-password">
            <div className="box">
              <Password />
            </div>
          </div>
          <br/>
          <div id="edit-photo">
            <div className="box">
              <AddImage />
            </div>
          </div>
          <div id="edit-bank-informaion">{/* <BankInformation/> */}</div>
        </div>
      ) : (
        window.location.replace("/")
      )}
    </>
  );
}

export default EditSettings;
