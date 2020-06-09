import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {withStyles, makeStyles,} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../css/dashboard.css';

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

const Dashboard = () => {
    const [claimList, setClaimList] = useState([]);
    const [claimsSearchList, setClaimsSearchList] = useState([]);
    const [searchRequest, setSearchRequest] = useState({
        claimNumber: '',
        lastName: '',
        plateNumber: ''
    });
    const [loading, setLoading] = useState(true);

    const classes = useStyles();

    useEffect(() => {
        setLoading(true);
        axios.get('/claims/recent')
            .then(items => {
                const getValues = Object.values(items.data);
                setClaimList(getValues);
                setLoading(false);
            })
            .catch(err => err);
    }, []);

    const claimsNumberSearch = (e) => {
        e.preventDefault();
        axios.get('/claims/claimnumbersearch', {params: searchRequest})
            .then(items => {
                const getValues = Object.values(items.data);
                setClaimsSearchList(getValues);
            })
            .catch(err => err);
    }

    const lastNameSearch = (e) => {
        e.preventDefault();
        axios.get('/claims/lastnamesearch', {params: searchRequest})
            .then(items => {
                const getValues = Object.values(items.data);
                setClaimsSearchList(getValues);
            })
            .catch(err => err);
    }

    const plateNumberSearch = (e) => {
        e.preventDefault();
        axios.get('/claims/platenumbersearch', {params: searchRequest})
            .then(items => {
                const getValues = Object.values(items.data);
                setClaimsSearchList(getValues);
            })
            .catch(err => err);
    }

    const setSearchValues = (e) => {
        const {name, value} = e.target;
        setSearchRequest(prevValues => ({...prevValues, [name]: value}));
    }

    if (loading) {
        return null
    }

    return (
        <div>
            <div>
                <form
                    className={classes.root}
                    noValidate
                    autoComplete='off'
                    method="POST"
                    action="/claims/claimnumbersearch"
                    onClick={claimsNumberSearch}
                    style={{display: 'block', margin: 'auto', textAlign: 'center'}}
                >
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Claim Number'
                        name='claimNumber'
                        id='claimNumber'
                        value={searchRequest.claimNumber}
                        onChange={setSearchValues}
                        style={{margin: '10px 50px 10px 0'}}
                    />
                    <Button
                        style={{margin: '20px auto', cursor: 'pointer', background: 'blue', width: '120px'}}
                        type='submit'
                        variant="contained"
                        color="primary"
                    >
                        Search
                    </Button>
                </form>
                <form
                    className={classes.root}
                    noValidate
                    autoComplete='off'
                    method="POST"
                    action="/claims/lastnamesearch"
                    onClick={lastNameSearch}
                    style={{display: 'block', margin: 'auto', textAlign: 'center'}}
                >
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Last Name'
                        name='lastName'
                        id='lastName'
                        value={searchRequest.lastName}
                        onChange={setSearchValues}
                        style={{margin: '10px 50px 10px 0'}}
                    />
                    <Button
                        style={{margin: '20px auto', cursor: 'pointer', background: 'blue', width: '120px'}}
                        type='submit'
                        variant="contained"
                        color="primary"
                    >
                        Search
                    </Button>
                </form>
                <form
                    className={classes.root}
                    noValidate
                    autoComplete='off'
                    method="POST"
                    action="/claims/platenumbersearch"
                    onClick={plateNumberSearch}
                    style={{display: 'block', margin: 'auto', textAlign: 'center'}}
                >
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Plate Number'
                        name='plateNumber'
                        id='plateNumber'
                        value={searchRequest.plateNumber}
                        onChange={setSearchValues}
                        style={{margin: '10px 50px 10px 0'}}
                    />
                    <Button
                        style={{margin: '20px auto', cursor: 'pointer', background: 'blue', width: '120px'}}
                        type='submit'
                        variant="contained"
                        color="primary"
                    >
                        Search
                    </Button>
                </form>
            </div>
            <div style={{textAlign: 'center'}}>
                {claimsSearchList.length === 0 ? null : <h1>Search Results</h1>}
                {claimsSearchList.length === 0 ? null : claimsSearchList.map(item => {
                    return (
                        <Link className="link" to={'/claim/updateclaim?'+ item.claimNumber} key={item.claimNumber}>
                            <ul style={{columnCount: '4', listStyleType: 'none', display: 'flex', justifyContent: 'center'}}>
                                <li
                                    style={{width: '250px'}}
                                >
                                    Driver<br/>
                                    <hr/>
                                    {item.driverValues.lastName}, {item.driverValues.firstName}
                                </li>
                                <li style={{width: '250px'}}>
                                    Date of Incident:<br/>
                                    <hr/>
                                    {item.selectedDate}
                                </li>
                                <li style={{width: '250px'}}>
                                    Date Reported:<br/>
                                    <hr/>
                                    {item.reportedOn}
                                </li>
                                <li style={{width: '250px'}}>
                                    claim Number:<br/>
                                    <hr/>
                                    {item.claimNumber}
                                </li>
                            </ul>
                        </Link>

                    )
                })}
            </div>
            <div style={{textAlign: 'center'}}>
                <hr style={{width: '80%', margin: '40px auto'}}/>
                <h1 style={{textAlign: 'center'}}>Recent Claims</h1>
                {claimList.slice(0).reverse().map(item => {
                    return (
                        <Link className="link" to={'/claim/updateclaim?'+ item.claimNumber} key={item.claimNumber}>
                            <ul style={{columnCount: '4', listStyleType: 'none', display: 'flex', justifyContent: 'center'}}>
                                <li
                                    style={{width: '250px'}}
                                >
                                    Driver<br/>
                                    <hr/>
                                    {item.driverValues.lastName}, {item.driverValues.firstName}
                                </li>
                                <li style={{width: '250px'}}>
                                    Date of Incident:<br/>
                                    <hr/>
                                    {item.selectedDate}
                                </li>
                                <li style={{width: '250px'}}>
                                    Date Reported:<br/>
                                    <hr/>
                                    {item.reportedOn}
                                </li>
                                <li style={{width: '250px'}}>
                                    claim Number:<br/>
                                    <hr/>
                                    {item.claimNumber}
                                </li>
                            </ul>
                        </Link>

                    )
                })}
            </div>
        </div>
    );
};

export default Dashboard;
