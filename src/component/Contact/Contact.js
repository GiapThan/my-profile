import { useState } from 'react'
import './Contact.css'

export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [mess, setMess] = useState('')

    function Submit(e) {
        e.preventDefault()
        console.log(e)
        var details = {
            name,
            email,
            subject,
            mess
        };
        
        var formBody = [];
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        fetch('http://localhost:8000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formBody,
        })
        .then((e)=> {console.log(e)})
    }

    return (
        <div>
            <form onSubmit={e=>Submit(e)}>
                <input
                    name='name'
                    placeholder='Your Name...'
                    value={name}
                    onChange={e=>setName(e.target.value)}
                />
                <input
                    name='email'
                    placeholder='Your Email...'
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                />
                <input
                    name='subject'
                    placeholder='Your Subject...'
                    value={subject}
                    onChange={e=>setSubject(e.target.value)}
                />
                <textarea
                    name='mess'
                    placeholder='Your Message...'
                    value={mess}
                    onChange={e=>setMess(e.target.value)}
                />
                <input type="submit"/>
            </form>
        </div>
    )
}