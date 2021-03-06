// {
//     id: INTEGER; // assigned by database, auto increments
//     username: STRING; // not nullable, unique - 128 chars max
//     password: STRING; // not nullable - 256 chars max
//     email: STRING; // not nullable, unique - 128 chars max
//     created_at: TIMESTAMP; // defaults to now, server will handle this
//   }

import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import * as Yup from 'yup'
import loginSchema from './Validation/loginSchema'


//Initial States
const initialFormValues = {
    username: '',
    password: ''
}
  
const initialFormErrors = {
    username: '',
    password: ''
}

const initialDisabled = true


export default function Login(){

    //States
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const postNewAccount = newAccount => {
        Axios.post('https://reqres.in/api/users', newAccount)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          setFormValues(initialFormValues)
        })
      }

    const onInputChange = evt => {
        const {name, value} = evt.target

        Yup
            .reach(loginSchema, name)
            .validate(value)
            .then(() => {
                setFormErrors({
                    ...formErrors,
                    [name]: ""
                });
            })
            .catch(err => {
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0]
                });
            })

        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const onSubmit = evt => {
        evt.preventDefault()

        const newAccount = {
            username: formValues.username.trim(),
            password: formValues.password.trim()
        }
        

        postNewAccount(newAccount)
    }

    //Toggle button disable
    useEffect(() => {
        loginSchema.isValid(formValues).then(valid => {
            setDisabled(!valid);
        }, [formValues])
    })

    return(
        <form className = 'form container' onSubmit={onSubmit}>
            {/* Form Inputs */}
            <div className="form-group inputs">
                <label> Username
                    <input 
                        value={formValues.username}
                        onChange={onInputChange}
                        name='username'
                        type='text'
                    />
                </label>

                <label> Password:
                    <input
                        value={formValues.password}
                        onChange={onInputChange}
                        name='password'
                        type='password'
                    />
                </label>
            </div>

            {/* Submit */}
            <div className='form-group submit'>
                <div className='errors'>
                    <div>{formErrors.username}</div>
                    <div>{formErrors.password}</div>
                </div>

                <button id='submitBtn' disabled={disabled}>submit</button>
            </div>
        </form>
    )
}