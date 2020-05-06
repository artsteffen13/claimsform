import React, {useState} from 'react';
import {
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'blue',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'blue',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    },
})(TextField);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        maxWidth: '500px',
        margin: '20px auto'
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const SignUp = () => {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [matchPasswordValue, setMatchPasswordValue] = useState('');
    const [emailValidated, setEmailValidated] = useState(false);
    const [emailMessage, setEmailMessage] = useState('');
    const [passwordValidated, setPasswordValidated] = useState(false);
    const [passwordMessage, setPasswordMessage] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    const [passwordsMatchMessage, setPasswordsMatchMessage] = useState('');
    const [formComplete, setFormComplete] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const classes = useStyles();
    const invalidButtonStyles = {margin: '40px auto', width: '80%', cursor: 'not-allowed', opacity: '80%'};
    const validButtonStyles = {margin: '40px auto', width: '80%', cursor: 'pointer'};

    const checkEmail = (e) => {
        //eslint-disable-next-line
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (re.test(e.target.value)) {
            setEmailValidated(true);
            setEmailMessage('');
        } else {
            setEmailValidated(false);
            setEmailMessage('Please enter a valid email');
        }
    };

    const checkPassword = (e) => {
        const re = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
        if (re.test(e.target.value)) {
            setPasswordValidated(true);
            setPasswordMessage('');
        } else {
            setPasswordValidated(false);
            setPasswordMessage('Must be 8 characters long, at least one uppercase letter, lower case letter, and number')
        }
    }

    const checkMatchingPassword = (e) => {
        if (passwordValue === matchPasswordValue) {
            setPasswordsMatch(true);
            setPasswordsMatchMessage('');
        } else {
            setPasswordsMatch(false);
            setPasswordsMatchMessage('Passwords must match!')
        }
    }

    const getValue = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === 'user') {
            setEmailValue(value);
        } else if (name === 'password') {
            setPasswordValue(value);
        } else if (name === 'confirmPassword') {
            setMatchPasswordValue(value);
        } else if (name === 'firstName') {
            setFirstName(value);
        } else if (name === 'lastName') {
            setLastName(value);
        }
    };

    const isFormComplete = () => {
        if (emailValidated && passwordValidated && passwordsMatch) {
            setFormComplete(true);
        } else {
            setFormComplete(false);
        }
    }

    return (
        <div style={{textAlign: 'center'}}>
            <form
                style={{color: 'red'}}
                className={classes.root}
                noValidate autoComplete='off'
                method="POST"
                action="/signup/newuser"
                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
            >
                <CssTextField
                    className={classes.margin}
                    id="user"
                    name='user'
                    label='Email'
                    onChange={getValue}
                    value={emailValue}
                    onKeyUp={checkEmail}
                />
                {emailMessage}
                <CssTextField
                    className={classes.margin}
                    id="firstName"
                    name='firstName'
                    label='First Name'
                    onChange={getValue}
                    value={firstName}
                    required
                />
                <CssTextField
                    className={classes.margin}
                    id="lastName"
                    name='lastName'
                    label='Last Name'
                    onChange={getValue}
                    value={lastName}
                    required
                />
                <CssTextField
                    className={classes.margin}
                    type='password'
                    label='Password'
                    name='password'
                    id='password'
                    onChange={getValue}
                    value={passwordValue}
                    onKeyUp={checkPassword}
                />
                {passwordMessage}
                <CssTextField
                    className={classes.margin}
                    type='password'
                    label='Confirm Password'
                    name='confirmPassword'
                    id='confirmPassword'
                    onChange={getValue}
                    value={matchPasswordValue}
                    onKeyUp={checkMatchingPassword}
                />
                {passwordsMatchMessage}
                <Button
                    onMouseEnter={isFormComplete}
                    onFocus={isFormComplete}
                    style={formComplete ? validButtonStyles : invalidButtonStyles}
                    type={formComplete ? 'submit' : 'button'}
                    variant="contained"
                    color="primary"

                >
                    Sign Up
                </Button>
            </form>
        </div>
    );
};

export default SignUp;
