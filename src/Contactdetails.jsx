import { useNavigate, useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { deleteContact } from './features/contactslice'

function ContactDetail() {
    const { id } = useParams()
    const index = parseInt(id, 10) - 1;
    const contacts = useSelector((state) => state.contact.entries)
    console.log(contacts)
    const contact = contacts[index] 

    const navigate = useNavigate()
    function handleclickBack(){
        navigate(`/submittedcontact`)
    }

    function handleclickEdit(){
        navigate(`/submittedcontact/editcontact/${id}`)
    }

    const dispatch = useDispatch()
    function handleclickDelete(){
        dispatch(deleteContact(id))
        navigate(`/submittedcontact`)
    }

    if (!contact) {
        return <p>Contact not found.</p>
    }

    return (
        <div className='contact-detail-container'>
            <div className='action-container'>
                <div>
                    <a className='btn-action btn-back' onClick={handleclickBack}>Back</a>      
                </div>
                <div style={{display:"flex"}}>
                    <a className='btn-action btn-edit' onClick={handleclickEdit}>Edit</a>
                    <a className='btn-action btn-delete' onClick={handleclickDelete}>Delete</a>      
                </div>
            </div>
            <div className='contact-detail-inner'>
                <h2 style={{fontSize:"30px",marginBottom:"20px",paddingLeft:"25px"}}>Contact Details</h2>
                <ul className='contact-detail-lists'>
                    <li className='contact-detail-list'>
                        <div className='contact-detail-left'>
                            <p className="contact-label"><strong>Name</strong> </p>
                        </div>
                        <div className='contact-detail-right'>
                            <p>{contact.name}</p>
                        </div>
                    </li>
                    <li className='contact-detail-list'>
                        <div className='contact-detail-left'>
                            <p className="contact-label"><strong>Email</strong> </p>
                        </div>
                        <div className='contact-detail-right'>
                            <p>{contact.email}</p>
                        </div>
                    </li>
                    <li className='contact-detail-list'>
                        <div className='contact-detail-left'>
                            <p className="contact-label"><strong>Service</strong> </p>
                        </div>
                        <div className='contact-detail-right'>
                            <p>{contact.service}</p>
                        </div>
                    </li>
                    <li className='contact-detail-list'>
                        <div className='contact-detail-left'>
                            <p className="contact-label"><strong>Interested</strong> </p>
                        </div>
                        <div className='contact-detail-right'>
                            <p>{(contact.interest)? "✅":""}</p>
                            
                        </div>
                    </li>
                    <li className='contact-detail-list'>
                        <div className='contact-detail-left'>
                            <p className="contact-label"><strong>Agreement</strong> </p>
                        </div>
                        <div className='contact-detail-right'>
                            <p>{(contact.agreement)? "✅":""}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ContactDetail
