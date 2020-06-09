import React from 'react';
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

const Login = () => {
    const classes = useStyles();

    return (
        <div>
            <form
                className={classes.root}
                noValidate autoComplete='off'
                method="POST"
                action="/login/authorize"
            >
                <CssTextField
                    className={classes.margin}
                    type='text'
                    label='Email'
                    name='username'
                    id='username'
                />
                <CssTextField
                    className={classes.margin}
                    type='password'
                    label='Password'
                    name='password'
                    id='password'
                />
                <Button
                    style={{margin: '40px auto', width: '80%', cursor: 'pointer'}}
                    type='submit'
                    variant="contained"
                    color="primary"

                >
                    Login
                </Button>
            </form>
        </div>
    );
};

export default Login;
