import HS from './Form.module.css';
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import { shake, bounceInUp } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const Form = () => {
    const [firstAnimation, setFirstAnimation] = useState(true)
    const [anim, setAnim] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {   
        setFirstAnimation(false)
    };
    const Bounce = styled.div`animation: 1s ${keyframes`${shake}`}`;
    const FirstLine = styled.div`animation: 1s ${keyframes`${bounceInUp}`}`;
    const SecondLine = styled.div`animation: 2s ${keyframes`${bounceInUp}`}`;
    const ThreeLine = styled.div`animation: 3s ${keyframes`${bounceInUp}`}`;
    const FourLine = styled.div`animation: 4s ${keyframes`${bounceInUp}`}`;

    useEffect(()=> {
        setAnim(errors ? true : false);        
    });    

    const years = [];
    for (let i = 1990; i < 2021; i++) years.push(i);

    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const dayData = days.map(item => {
        return <option key={item} value="">{item}</option>
    });

    const monthData = month.map(item => {
        return <option key={item} value="">{item}</option>
    });

    const yearData = years.map(item => {
        return <option key={item} value="">{item}</option>
    });

    return (
        <div className={HS.container}>
            <div className={HS.formTitle}>New user?</div>
            <div className={HS.formDescription}>Use the form below to create your account.</div>
            <form onSubmit={handleSubmit(onSubmit)} className={HS.formContainer}>
                <FirstLine>
                    <div className={HS.formItem}>
                        <label htmlFor="name">First Name
                            <input
                                id='name'
                                defaultValue="Alice"
                                {...register("name", { required: true })} />
                        </label>
                    </div>
                </FirstLine>
                <FirstLine>
                    <div className={HS.formItem}>
                        <label htmlFor="lastName">Last Name
                            <input defaultValue="Miller" id='lastName' />
                        </label>
                    </div>
                </FirstLine>
                <SecondLine>
                    <div className={HS.formItem}>
                        <label htmlFor="nation">Nationality
                            <input id='nation' defaultValue="American" />
                        </label>
                    </div>
                </SecondLine>
                <SecondLine>
                    <div className={HS.formItem}>
                        <label htmlFor="email">E-mail
                            <input
                                style={{
                                    color: errors["email"] ? "red" : null,
                                    borderBottom: errors["email"] ? "2px solid red" : null
                                }}
                                id='email'
                                defaultValue="alice.miller@yahoo.com"
                                type={'email'}
                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        </label>
                    </div>
                </SecondLine>
                <ThreeLine>
                    <div className={HS.formItem}>
                        <div className={HS.dateContainer}>
                            <label className={HS.date} htmlFor="date">Date of Birth</label>
                            <select id='dateDay' >
                                {dayData}
                            </select>
                            <select id='dateMonth' >
                                {monthData}
                            </select>
                            <select id='dateYear' >
                                {yearData}
                            </select>
                        </div>
                    </div>
                </ThreeLine>
                <ThreeLine>
                    <div className={HS.formItem} id={HS.gender}>
                        <div className={HS.genderTitle}>Gender</div>
                        <input
                            className={HS.gender}
                            name='gender'
                            id='male'
                            type={'radio'} />
                        <label htmlFor="male">Male</label>

                        <input
                            className={HS.gender}
                            name='gender'
                            id='female'
                            type={'radio'} />
                        <label htmlFor="female">Female</label>

                    </div>
                </ThreeLine>
                <FourLine>
                    <div className={HS.formItem}>
                        <label className={HS.lastInput} htmlFor="password">Password
                            <input
                                style={{
                                    color: errors["password"] ? "red" : null,
                                    borderBottom: errors["password"] ? "2px solid red" : null
                                }}
                                id='password' defaultValue=""
                                type={'password'}
                                {...register("password", { required: true, minLength: 8, pattern: /^[A-Za-z]+$/i })} />
                        </label>
                    </div>
                </FourLine>
                <FourLine>
                    <div className={HS.formItem}>
                        <label className={HS.lastInput} htmlFor="passConfirm">Confirm Password
                            <input
                                style={{
                                    color: errors["passwordConfirm"] ? "red" : null,
                                    borderBottom: errors["passwordConfirm"] ? "2px solid red" : null
                                }}
                                id='passConfirm'
                                type={'password'}
                                defaultValue=''
                                {...register("passwordConfirm", { required: true, minLength: 8, pattern: /^[A-Za-z]+$/i })} ></input>
                        </label>
                    </div>
                </FourLine>
                <div className={HS.formText}>Have an account? <Link to={'/'}>Login</Link> </div>
                {anim ? <Bounce >
                    <input className={HS.formSubmit} type="submit" value="Complete Signup" />
                </Bounce>
                    : <input className={HS.formSubmit} type="submit" value="Complete Signup" />}
            </form>
        </div>

    )
};

export default Form;