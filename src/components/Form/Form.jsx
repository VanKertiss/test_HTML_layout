import HS from './Form.module.css';
import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

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

                    </select>
                    <select id='dateMonth' {...register("date", { required: true })} ></select>
                    <select id='dateYear' {...register("date", { required: true })} ></select>
                </div>
            </div>
            <div className={HS.formItem}>
                <div>Gender</div>
                <label htmlFor="male">
                    <input className={HS.gender} id='male' type={'radio'} />Male</label>
                <label htmlFor="female">
                    <input className={HS.gender} id='female' type={'radio'} />Female</label>

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