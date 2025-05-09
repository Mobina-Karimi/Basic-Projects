import React, { useState } from 'react'
import ContactList from './ContactList'
import inputs from '../constants/inputs'
import { v4 } from 'uuid'
import styles from "./ContactForm.module.css"

function ContactForm() {
  const [contacts , setContacts] = useState([])
  const [alert , setAlert] = useState("")
  const [contact, setContact] = useState({
    id: "",
    name : "",
    lastName : "",
    email : "",
    phone : "",
  })
  
  const changeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    // console.log({name,value})

    setContact((contact) => ({...contact, [name] : value}))
  }

  const addHandler = (event) => {
    event.preventDefault()

    if(!contact.name || !contact.lastName || !contact.email || !contact.phone ||contact.phone.length<11){
      setAlert("Please enter valid data!")
      return
    }
    setAlert("")
    

    const newContact = {...contact, id : v4()}
    setContacts((contacts) => ([...contacts, newContact]))
    setContact({
      name : "",
      lastName : "",
      email : "",
      phone : "",
    })
  }

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => (contact.id !== id)) 
    setContacts(newContacts)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Contact App</h1>
      </div>
      <form className={styles.form}>
        {inputs.map((input,index) => (
          <input type={input.type} name={input.name} placeholder={input.placeholder} value={contact[input.name]} key={index} onChange={changeHandler}/>
        ))}
        <button onClick={addHandler}>Add Contact</button>
      </form>
      <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
      <ContactList contacts={contacts} deleteHandler={deleteHandler}/>
    </div>
  )
}

export default ContactForm