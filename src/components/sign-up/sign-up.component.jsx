import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.components";

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

import './sign-up.style.scss'


class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayname : " ",
            email: " ",
            password: " ",
            confirmPassWord: ""
        };
    }
    handleSubmit = async event => {
        event.preventDefault();

        const {displayname, email, password,confirmPassWord} = this.state;

        if(password !== confirmPassWord) {
            alert("Password don't  match")
            return;
        }

        try {
           const {user}  = await auth.createUserWithEmailAndPassword(email, password);

           createUserProfileDocument(user, {displayname});
           this.setState({
            displayname : " ",
            email: " ",
            password: " ",
            confirmPassWord: ""
           });

        } catch (error) {
            console.error(error);
        }
 
    }
    handleChange = event => {
        const{name,value} = event.target;

        this.setState({[name]:value});
    }

    render() {
        const {displayname, email, password,confirmPassWord} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form  className="sign-up-form" onSubmit={this.handleSubmit}>

                <FormInput 
                type="text" 
                name="displayname" 
                value={displayname} 
                onChange={this.handleChange} 
                label="Display name" 
                required
                />  

                <FormInput 
                type="email" 
                name="email" 
                value={email} 
                onChange={this.handleChange} 
                label="Email"
                required
                /> 

                <FormInput 
                type="password" 
                name="password" 
                value={password} 
                onChange={this.handleChange} 
                label="Password"
                required
                /> 
                 
                <FormInput 
                type="password" 
                name="confirmPassWord" 
                value={confirmPassWord} 
                onChange={this.handleChange} 
                label="Confirm Password" 
                required
                /> 
                
                <CustomButton type="submit">SIGN  UP </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;