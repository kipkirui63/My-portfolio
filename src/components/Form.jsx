import React, { useRef } from 'react'
import './Form.css'
import emailjs from 'emailjs-com'

function Form() {
    const refForm = useRef();
  
    const sendEmail =(e)=>{
       e.preventDefault()

       emailjs
       .sendForm(
        'service_m1q7z13',
        'template_jkyvw9s',
        refForm.current,
        'uOhYZaCgks3SJrs1J'
       )