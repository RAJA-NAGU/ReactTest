import React from 'react'

function Toast({hideToast}) {
  return (
    <div className='toast' >
        <div className='toast-inner'>
            <div className='flex'><span onClick={hideToast} className='toast-content' style={{cursor:"pointer",fontSize:"16px",position:"absolute",top:'5%',right:"5%",fontFamily:"monospace"}}>x</span></div>
            <span style={{fontSize:"14px",letterSpacing:"1.1px"}}>Successfully Submited</span>
        </div>
    </div>
  )
}

export default Toast