import HS from './Form.module.css';
import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const years = [];
    for(let i = 1990; i < 2021; i++) years.push(i);
    const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
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

    return (<div className={HS.container}>
        <div className={HS.formTitle}>New user?</div>
        <div className={HS.formDescription}>Use the form below to create your account.</div>
        <form onSubmit={handleSubmit(onSubmit)} className={HS.formContainer}>
            <div className={HS.formItem}>
                <label htmlFor="name">First Name
                    <input id='name' defaultValue="Alice" {...register("name", { required: true })} />
                </label>
            </div>
            <div className={HS.formItem}>
                <label htmlFor="lastName">Last Name
                    <input defaultValue="Miller" id='lastName' {...register("lastName", { required: true })} />
                </label>
            </div>
            <div className={HS.formItem}>
                <label htmlFor="nation">Nationality
                    <input id='nation' defaultValue="American" {...register("nation", { required: true })} />
                </label>
            </div>
            <div className={HS.formItem}>
                <label htmlFor="email">E-mail
                    <input id='email' defaultValue="alice.miller@yahoo.com" type={'email'} {...register("email", { required: true })} />
                </label>
            </div>
            <div className={HS.formItem}>
                <div className={HS.dateContainer}>
                    <label className={HS.date} htmlFor="date">Date of Birth</label>
                    <select id='dateDay' {...register("date", { required: true })} >
                        {dayData}
                    </select>
                    <select id='dateMonth' {...register("date", { required: true })} >
                        {monthData}
                    </select>
                    <select id='dateYear' {...register("date", { required: true })} >
                        {yearData}
                    </select>
                </div>
            </div>
            
            <div className={HS.formItem} id={HS.gender}>   
                    <div className={HS.genderTitle}>Gender</div>  
                    <input className={HS.gender} name='gender' id='male' type={'radio'} />
                    <label htmlFor="male">Male</label>
                
                    <input className={HS.gender} name='gender' id='female' type={'radio'} />
                    <label htmlFor="female">Female</label>

            </div>
            <div className={HS.formItem}>
                <label className={HS.lastInput} htmlFor="password">Password
                    <input id='password' defaultValue="" type={'password'} {...register("pass", { required: true })} />
                </label>
            </div>
            <div className={HS.formItem}>
                <label className={HS.lastInput} htmlFor="passConfirm">Confirm Password
                    <input id='passConfirm' type={'password'} defaultValue='' {...register("pass", { required: true })}></input>
                </label>
            </div>

            <div className={HS.formText}>Have an account? <a href="#">Login</a></div>
            <input className={HS.formSubmit} type="submit" value="Complete Signup" />
        </form>
    </div>

    )
};

export default Form;