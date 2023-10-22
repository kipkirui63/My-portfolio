import React, { useRef } from 'react'
import './Form.css'
import emailjs from 'emailjs-com'

function Form() {
    const refForm = useRef();
  
    const sendEmail =(e)=>{
       e.preventDefault()