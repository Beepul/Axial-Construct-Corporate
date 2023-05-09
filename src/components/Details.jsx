import React from 'react'
import { contact } from '../constants'

const Details = () => {
  return (
    <div className='info__con d-flex flex-column gap-4 py-lg-5 px-lg-5'>
              <div className='info'>
                <p>Address</p>
                <p>{contact.address}</p>
              </div>
              <div className='info'>
                <p>Email</p>
                {contact.email.map((item,index)=>(
                  <p key={index}>{item}</p>
                ))}
              </div>
              <div className='info'>
                <p>Phone</p>
                {contact.phone.map((item,index)=>(
                  <p key={index}>{item}</p>
                ))}
              </div>
              <div className='icons'>
              <ul className='d-flex justify-content-between align-items-center'>
                            <li><i className="fa fa-facebook"></i></li>
                            <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                            <li><i className="fa fa-twitter"></i></li>
                            <li><i className="fa fa-linkedin"></i></li>
                        </ul>
              </div>
            </div>
  )
}

export default Details