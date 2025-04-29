import React from "react";
import "../src/index.css";
import { useState } from "react";
import Toast from "./Toast";

import { useDispatch } from 'react-redux'
import { addContact } from './features/contactslice'


function Contact() {
    let slno =1

  const dispatch = useDispatch()

  const [showToast, setShowtoast] = useState(false);

  const [uname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [interest, setInterest] = useState(false);
  const [agreement, setAgreement] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [serviceError, setServiceError] = useState(false);
  const [interestError, setInterestError] = useState(false);
  const [agreementError, setAgreementError] = useState(false);

  function closeToast() {
    setShowtoast(false);
  }

  function handleToast() {
    const isnamevalid = uname.trim() !== "";
    const isemailvalid = isValid(email);
    const isservicevalid = service !== "";
    const isinterestvalid = interest;
    const isagreementvalid = agreement;

    setNameError(!isnamevalid);
    setEmailError(!isemailvalid);
    setServiceError(!isservicevalid);
    setInterestError(!isinterestvalid);
    setAgreementError(!isagreementvalid);

    if (
      isnamevalid &&
      isemailvalid &&
      isservicevalid &&
      isinterestvalid &&
      isagreementvalid
    ) {

    slno++
    //  dispatch to redux
    dispatch(addContact({
      id:Date.now(),
      name: uname,
      email,
      service,
      interest,
      agreement
    }))



      setShowtoast(true);

      setTimeout(() => {
        setShowtoast(false);
      }, 3000);

      setName("");
      setEmail("");
      setService("");
      setInterest(false);
      setAgreement(false);
    } else {
      // alert("please fill all fields valid data and accept agreement")
      setShowtoast(false);
    }
  }

  function isValid(email) {
    const valid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-z]{2,}$/;
    return valid.test(email);
  }

  return (
    <div className="contact-inner">
      {showToast && <Toast hideToast={closeToast} />}
      <h2 style={{ textAlign: "center", marginBottom: "20px" ,fontSize:"30px"}}>Contact us</h2>
      <table>
        <tbody>
          <tr>
            <td className="contact-table-label-box">
              <span className="label">Name </span>
            </td>
            <td>
                <div>
              <input
                type="text"
                className={`input ${nameError ? "input-error" : ""}`}
                value={uname}
                onChange={(e) => setName(e.target.value)}
              />
              <p className={`error-msg ${nameError ? "show":""}`}>Enter Valid Username</p>
                </div>
            </td>
          </tr>
          <tr>
            <td className="contact-table-label-box">
              <span className="label">Email </span>
            </td>
            <td>
            <div>
              <input
                type="text"
                className={`input ${emailError ? "input-error" : ""}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className={`error-msg ${emailError ? "show":""}`}>Enter Valid Username</p>
            </div>
            </td>
          </tr>
          <tr>
            <td className="contact-table-label-box">
              <span className="label">Service </span>
            </td>
            <td>
            <div>
              <select
                name="service"
                className={`input ${serviceError ? "input-error" : ""}`}
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option value="">Select a service</option>
                <option value="service 1">service 1</option>
                <option value="service 2">service 2</option>
                <option value="service 3">service 3</option>
                <option value="service 4">service 4</option>
              </select>
              <p className={`error-msg ${serviceError ? "show":""}`}>Please select a  Service</p>
            </div>
            </td>
          </tr>
          <tr>
            <td className="contact-table-label-box">
              <span className="label">Inetrested </span>
            </td>
            <td>
            <div>
              <input
                type="checkbox"
                className={`check-box ${interestError ? "checkbox-error" : ""}`}
                checked={interest}
                onChange={(e) => setInterest(e.target.checked)}
              />
              <p className={`error-msg ${interestError ? "show":""}`}>Please Accept Interest</p>
            </div>
            </td>
          </tr>
          <tr>
            <td colSpan={2} style={{ textAlign: "center" }}>
            <div>
              <input
                type="checkbox"
                name=""
                className={`check-box check-license ${
                  agreementError ? "checkbox-error" : ""
                }`}
                checked={agreement}
                onChange={(e) => setAgreement(e.target.checked)}
              />
              <label className="license">I agge the terms and condition</label>
              <p className={`error-msg ${agreementError ? "show":""}`} style={{paddingLeft:"45px",textAlign:"left"}}>Please Accept terms & condition</p>
            </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button className="btn-submit" onClick={handleToast}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Contact;
