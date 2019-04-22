import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { registerUser } from '../../util/apiUtils';

import GoogleLogin from 'react-google-login';

export default class SignUp extends React.Component {
    state = {
        name: undefined,
        surname: undefined,
        username: undefined,
        password: undefined,
        repeatpassword: undefined,
        email: undefined,
    };

    handleName = event => {
        this.setState({ name: event.target.value });
    };
    handleSurname = event => {
        this.setState({ surname: event.target.value });
    };
    handleUsername = event => {
        this.setState({ username: event.target.value });
    };
    handlePassword = event => {
        this.setState({ password: event.target.value });
    };
    handlePasswordRepeat = event => {
        this.setState({ repeatpassword: event.target.value });
    };
    handleEmail = event => {
        this.setState({ email: event.target.value });
    };

    isValid = () => {
        if (
            this.state.name &&
            this.state.surname &&
            this.state.username &&
            this.state.password &&
            this.state.repeatpassword &&
            this.state.email
        ) {
            if (this.state.password == this.state.repeatpassword) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    };
    responseGoogleSuccess = response => {
        let userName = response.w3.ofa;
        let userSurname = response.w3.wea;
        let userEmail = response.w3.U3;
        this.setState({
            surname: userSurname,
            username: userName,
            email: userEmail,
        });
    };

    sendData = event => {
        event.preventDefault();

        const user = {
            email: this.state.email,
            firstName: this.state.name,
            lastName: this.state.surname,
            login: this.state.username,
            password: this.state.password,
        };

        registerUser(user)
            .then(res => {
                NotificationManager.success('Verification message has been sent to your e-mail', 'Check your e-mail');
            })
            .catch(error => {
                NotificationManager.error('Invalid input!', 'Error', 5000);
            });
    };

    render() {
        const responseGoogle = response => {
            console.log(response);
        };
        return (
            <div className='FormCenter'>
                <form className='FormFields'>
                    <div className='FormField'>
                        <TextField
                            id='outlined-email-input'
                            label='Name'
                            className='FormField__Input'
                            type='text'
                            name='name'
                            autoComplete='name'
                            margin='normal'
                            variant='outlined'
                            onChange={this.handleName}
                        />
                    </div>
                    <div className='FormField'>
                        <TextField
                            id='outlined-email-input'
                            label='Surname'
                            className='FormField__Input'
                            type='text'
                            value={this.state.surname}
                            name='surname'
                            autoComplete='surname'
                            margin='normal'
                            variant='outlined'
                            onChange={this.handleSurname}
                        />
                    </div>
                    <div className='FormField'>
                        <TextField
                            id='outlined-email-input'
                            label='Username'
                            className='FormField__Input'
                            type='text'
                            name='username'
                            value={this.state.username}
                            autoComplete='username'
                            margin='normal'
                            variant='outlined'
                            onChange={this.handleUsername}
                        />
                    </div>
                    <div className='FormField'>
                        <TextField
                            id='outlined-password-input'
                            label='Password'
                            className='FormField__Input'
                            type='password'
                            autoComplete='current-password'
                            margin='normal'
                            variant='outlined'
                            onChange={this.handlePassword}
                        />
                    </div>
                    <div className='FormField'>
                        <TextField
                            id='outlined-password-input'
                            label='Repeat password'
                            className='FormField__Input'
                            type='password'
                            autoComplete='current-password'
                            margin='normal'
                            variant='outlined'
                            onChange={this.handlePasswordRepeat}
                        />
                    </div>
                    <div className='FormField'>
                        <TextField
                            id='outlined-email-input'
                            label='Email'
                            className='FormField__Input'
                            type='email'
                            name='email'
                            value={this.state.email}
                            autoComplete='email'
                            margin='normal'
                            variant='outlined'
                            onChange={this.handleEmail}
                        />
                    </div>
                    <div className='FromField'>
                        <Button
                            className='FormField__Button'
                            variant='contained'
                            color='primary'
                            disabled={!this.isValid()}
                            onClick={this.sendData}>
                            Sign up
                        </Button>
                        <Link to='/auth/sign-in' className='FormField__Link'>
                            I'm already member
                        </Link>
                    </div>
                    <GoogleLogin
                        clientId='469535828427-l1e7su82oc0bvirtdgmh26krf5p9kj5s.apps.googleusercontent.com' //CLIENTID NOT CREATED YET
                        buttonText='LOGIN WITH GOOGLE'
                        onSuccess={this.responseGoogleSuccess}
                        onFailure={responseGoogle}
                    />
                </form>
                <NotificationContainer />
            </div>
        );
    }
}
