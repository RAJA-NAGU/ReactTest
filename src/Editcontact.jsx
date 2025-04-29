import React, { useState } from 'react'

import { useParams,useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {updateContact} from "./features/contactslice"

function Editcontact() {
    const {id} = useParams()
    const index = parseInt(id,10)-1
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const contact = useSelector(state => state.contact.entries[index])

    const [name,setName] = useState(contact?.name || "")
    const [email,setEmail] = useState(contact?.email||"")
    const [service,setService] = useState(contact?.service||"")

    function handleUpdate(e){
        e.preventDefault()
        dispatch(updateContact({id:index,updatedContact:{name,email,service}}))
        navigate(`/submittedcontact/${id}`)
    }


    return (
        <div className='edit-contact-container'>
            <h2 style={{marginBottom:"20px",fontSize:"30px",paddingLeft:"25px"}}>Edit Contact</h2>
            <form onSubmit={handleUpdate} className='edit-contact-form'>
                <div className='edit-contact-input-container'>
                    <div>
                    <label>Name:</label>
                    </div>
                    <input className="input" value={name} onChange={(e)=> setName(e.target.value)} />
                </div>
                <div className='edit-contact-input-container'>
                    <div>
                    <label>Email:</label>
                    </div>
                    <input className="input" value={email} onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div className='edit-contact-input-container'>
                    <div>
                    <label>Service:</label>
                    </div>
                    <input className="input" value={service} onChange={(e)=> setService(e.target.value)} />
                </div>

                <button type="submit" className='btn-action btn-save'>Save</button>                
            </form>
        </div>
    )
}

export default Editcontact