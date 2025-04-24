import React from 'react'
import '../src/index.css'
import { useState } from 'react'
import Toast from './Toast'
function Contact() {

    const [showToast, setShowtoast] = useState(false)

    const [uname, setName] = useState("")
    const [email, setEmail] = useState("")
    const [service, setService] = useState(false)
    const [interest,setInterest] =useState(false)
    const [agreement, setAgreement] = useState(false)

    function closeToast(){
        setShowtoast(false)
    }

    function handleToast(){
        if(
            uname.trim() !== "" &&
            isValid(email) &&
            service !== "" &&
            interest &&
            agreement
        ){
            setShowtoast(true)

            setTimeout(()=>{
                setShowtoast(false)
            },3000)
            
            setName("")
            setEmail("")
            setService("")
            setInterest(false)
            setAgreement(false)
    
        } else{
            alert("please fill all fields valid data and accept agreement")
            setShowtoast(false)

        }
    }

    function isValid(email){
        const valid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-z]{2,}$/
        return valid.test(email)
    }
 
  return (
        <div className='contact-inner'>
            { showToast && <Toast hideToast={closeToast}/>}
            <h2 style={{textAlign:"center",marginBottom:'20px'}}>Contact us</h2>
            <table>
                <tbody>
                    <tr>
                        <td><span className='label'>Name </span></td><td><input type="text" value={uname} onChange={e => setName(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><span className='label'>Email </span></td><td><input type="text" value={email} onChange={e => setEmail(e.target.value)}  /></td>
                    </tr>
                    <tr>
                        <td><span className='label'>Service </span></td>
                        <td><select name="service" value={service} onChange={e => setService(e.target.value)} >
                            <option value="" >Select a service</option>
                            <option value="service 1">service 1</option>
                            <option value="service 2">service 2</option>
                            <option value="service 3">service 3</option>
                            <option value="service 4">service 4</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td><span className='label' >Inetrested </span></td><td><input type="checkbox" className='check-box' checked={interest} onChange={e=> setInterest(e.target.checked)}/></td>
                    </tr>
                    <tr><td colSpan={2} style={{textAlign:'center'}}><input type="checkbox" name="" className='check-box check-license' checked={agreement} onChange={e=> setAgreement(e.target.checked)}/><label className='license'>I agge the terms and condition</label></td></tr>                                               
                </tbody>
            </table>

            <div style={{textAlign:"center",marginTop:"30px"}}>
                <button className='btn-submit' onClick={handleToast}>Submit</button>
            </div>
        </div>
  )
}

export default Contact