import React, { useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const signup = useAuth();
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign up</h2>
                    <Form>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' required ref={emailRef} />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' required ref={passwordRef} />
                        </Form.Group>
                        <Form.Group id='passwordConfirm'>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type='email' required ref={passwordConfirmRef} />
                        </Form.Group>
                        <Button className='w-100' type='submit'>Sign up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Already have an account? Log in
            </div>
        </>
    )
}
