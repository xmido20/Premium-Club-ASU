import React from 'react'
import styled from 'styled-components'
import { Button, Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { mobile } from '../responsive';
import FirebaseActivation from '../js/FirebaseActivation';
import { getFirestore } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../js/firebaseConfig';
import { doc, setDoc } from "firebase/firestore"; 
import { useState } from 'react';
import { Helmet } from 'react-helmet';


const Section = styled.section`
    padding: 150px 0 100px;
    width: 100%;
    min-height: 100vh;
    height: fit-content;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 70%;
    ${mobile({
        width:'100%'
    })}
`
const FormContainer = styled.div`
    backdrop-filter: blur(90px);
    padding: 30px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid rgba(152, 152, 152, 0.411);
    box-shadow: 0px 5px 20px 1px black;
`
const FormDivider = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: space-around;
    ${mobile({
        flexDirection:'column',
        gap:'0'
    })}
`
const DivideLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    ${mobile({
        width:'100%'
    })}
    
`
const DivideRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    ${mobile({
        width:'100%'
    })}

`
const FormTitle = styled.h1`
    text-align: center;
`
const FormElement = styled.form`

`
const FormLabel = styled.label``

const Application = ( { images } ) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [university, setUniversity] = useState('')
    const [faculty, setFaculty] = useState('')
    const [session_field, setSessionField] = useState('')
    const [why_choose_field, setWhyChooseField] = useState('')

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    FirebaseActivation();
    const app = initializeApp(firebaseConfig)
    const db = getFirestore(app);

    const current_date = () => {
        // get Current date
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        if (day < 10) {
            day = `0${day}`
        }
        if (month < 10) {
            month = `0${month}`
        }
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        if (hours > 12) {
            hours = hours-12
        }
        if (hours < 10) {
            hours = `0${hours}`
        }
        if (minutes < 10) {
            minutes = `0${minutes}`
        }
        if (seconds < 10) {
            seconds = `0${seconds}`
        }
        let time = `${hours}:${minutes}:${seconds}`
        let full_date = `${day}/${month}/${year}`
        let current_time = `${time} - ${full_date}`
        return current_time
    }
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            setIsLoading(true)
            setSuccess('')
    
            if (!name || !email || !phone || !university ||  !faculty || !session_field || !why_choose_field) {
                throw Error('All fields must be filled')
            }
            const nameRegex = /^[a-zA-Z\u0600-\u06FF,-\s][\s\d\a-zA-Z\u0600-\u06FF,-]*$/i
            if (!name.match(nameRegex)) {
                throw Error('Not Valid Name')
            }
            const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
            if (!email.match(emailRegex)) {
                throw Error('Not Valid Email')
            }
            const phoneRegex = /^(002|\+2)?01[0125][0-9]{8}$/
            if (!phone.match(phoneRegex)) {
                throw Error('Not Valid Phone Number')
            }
    
            await setDoc(doc(db, "Sessions Applications 2024", name), {
                timestamp: current_date(),
                name: name,
                email: email,
                phone: phone,
                university:university,
                faculty: faculty,
                session_field: session_field, 
                why_choose_field: why_choose_field
            })
            setIsLoading(false)
            setSuccess("Form has been Submitted Successfully")
            setError('')
            setName('')
            setEmail('')
            setUniversity('')
            setFaculty('')
            setPhone('')
            setSessionField('')
            setWhyChooseField('')
        } catch (error) {
            setError(error.message)
            setIsLoading(false)
            setSuccess('')
        }
    }


    

    return (
        <>
            <div className="wrapper">
                <Helmet>
                    <meta property="og:title" content="Premium Club ASU" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.premium-club-asu.org" />
                    <meta property="og:image" content={images["premiumClubLogoTextMouse.png"]} />
                    
                    <title>Sessions Application</title>

                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta name="description" content="Premium Club is a Nonprofit Organization and one of the leading student activities in faculty of Commerce Ain shams University."/>
                    <meta name="keywords" content="premium club,premium, premium club asu, club, asu, بريميم, premium student activity, student activity, كلية تجارة"/>
                </Helmet>
            </div>
            <Container>
                <Section>
                    <Wrapper>
                        <FormContainer className='text-light'>
                            <FormTitle>
                                Join Us in Premium Sessions
                            </FormTitle>
                            <FormElement onSubmit={handleSubmit}>
                                <FormDivider>
                                    <DivideLeft>
                                        <Form.Group className="mb-3">
                                            <FormLabel htmlFor='full-name'>Name</FormLabel>
                                            <Form.Control name='name' value={name} onChange={(e) => setName(e.target.value)} type="text" id='full-name' placeholder="Enter your full name .." />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <FormLabel htmlFor='email'>Email</FormLabel>
                                            <Form.Control name='email' value={email} onChange={(e) => setEmail(e.target.value)} id='email' type="email" placeholder="Enter your Email Address .." />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <FormLabel htmlFor='phone'>Phone Number</FormLabel>
                                            <Form.Control name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} id='phone' type="tel" placeholder="Enter a phone number that we can contact you on .." />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <FormLabel htmlFor='university'>University</FormLabel>
                                            <Form.Control name='university' value={university} onChange={(e) => setUniversity(e.target.value)} type="text" id='university' placeholder="Enter your University .." />
                                        </Form.Group>
                                    </DivideLeft>
                                    <DivideRight>
                                        <Form.Group className="mb-3">
                                            <FormLabel htmlFor='faculty'>Faculty</FormLabel>
                                            <Form.Select name='faculty' value={faculty} onChange={(e) => setFaculty(e.target.value)} aria-label="Default select example">
                                                <option>Choose Your Faculty ..</option>
                                                <option value="Business">Faculty of Business</option>
                                                <option value="Medicine">Faculty of Medicine</option>
                                                <option value="Alsun">Faculty of Al-Alsun</option>
                                                <option value="Law">Faculty of Law</option>
                                                <option value="Agriculture">Faculty of Agriculture</option>
                                                <option value="Specific Education">Faculty of Specific Education</option>
                                                <option value="Dentistry">Faculty of Dentistry</option>
                                                <option value="Computer and Information Sciences">Faculty of Computer and Information Sciences</option>
                                                <option value="Engineering">Faculty of Engineering</option>
                                                <option value="Science">Faculty of Science</option>
                                                <option value="Pharmacy">Faculty of Pharmacy</option>
                                                <option value="Women">Faculty of Women</option>
                                                <option value="Arts">Faculty of Arts</option>
                                                <option value="Nursing">Faculty of Nursing</option>
                                                <option value="Postgraduate Childhood Studies">Faculty of Postgraduate Childhood Studies</option>
                                                <option value="Archaeology">Faculty of Archaeology</option>
                                                <option value="Veterinary Medicine">Faculty of Veterinary Medicine</option>
                                                <option value="Media and Mass Communication">Faculty of Media and Mass Communication</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <FormLabel htmlFor='session_field'>Which Field do you want to apply for ?</FormLabel>
                                            <Form.Select name='session_field' value={session_field} onChange={(e) => setSessionField(e.target.value)} aria-label="Default select example">
                                                <option>Choose Your Field ..</option>
                                                <option value="Banking">Banking</option>
                                                <option value="Entrepreneur">Entrepreneurship</option>
                                                <option value="Marketing">Marketing</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <FormLabel htmlFor='why_choose_field'>Why did you choose this field?</FormLabel>
                                            <Form.Control name='why_choose_field' value={why_choose_field} onChange={(e) => setWhyChooseField(e.target.value)} type="text" id='why_choose_field' />
                                        </Form.Group>
                                        <div style={{display:'flex',justifyContent:'center'}}>
                                            <Button disabled={isLoading} className="w-50 btn-success" variant="primary" type="submit">
                                                Submit
                                            </Button>
                                        </div>
                                    </DivideRight>
                                </FormDivider>
                                
                                
                                {
                                    error && (<div style={{color:'red',textAlign:'center',textShadow:'0px 0px 10px black'}}>{error}</div>)
                                }
                                {
                                    success && (<div style={{color:'lightgreen',textAlign:'center', textShadow:'0px 0px 10px black'}}>{success}</div>)
                                }
                            </FormElement>
                        </FormContainer>
                    </Wrapper>
                </Section>
            </Container>
        </>
    )
}

export default Application
