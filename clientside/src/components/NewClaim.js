import React, {useState} from 'react';
import {
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const useTabStyles = makeStyles({
    root: {
        flexGrow: 1,
        margin: "auto",
    },
});

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
        margin: '20px auto',
        justifyContent: 'center'
    },
    margin: {
        margin: theme.spacing(4),
    },
    formControl: {
        margin: theme.spacing(4),
        minWidth: 220,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const NewClaim = () => {
    const [value, setValue] = useState(0);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [vehicleValues, setVehicleValues] = useState({
        year: '',
        make: '',
        model: '',
        color: '',
        plate: ''
    });
    const [driverValues, setDriverValues] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        injured: '',
        injuryType: '',
        streetAddress: '',
        city: '',
        state: '',
        zipcode: '',
        alternateContact: '',
        altContactPhoneNumber: '',
        altContactEmail: ''
    });
    const [accidentValues, setAccidentValues] = useState({
        accidentDetails: '',
        accidentStreet: '',
        accidentCity: '',
        accidentState: '',
        drivable: '',
        safeToDrive: '',
        lightsWork: '',
        airbags: '',
        mobileDevice: '',
        handsFree: '',
        seatBelt: '',
        passengers: '',
        howManyPassengers: '',
        passengersInjured: '',
        howManyPassengersInjured: '',
        weather: '',
        damagePhotos: '',
        scenePhotos: '',
        atFault: '',
        vehicleTowed: '',
        towLocationName: '',
        towStreetAddress: '',
        towCity: '',
        towState: '',
        towZipcode: '',
        towPhoneNumber: ''
    });
    const [thirdPartyValues, setThirdPartyValues] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        injured: '',
        injuryType: '',
        streetAddress: '',
        city: '',
        state: '',
        zipcode: '',
        year: '',
        make: '',
        model: '',
        color: '',
        plate: '',
        damagePhotos: '',
        drivable: '',
        ownerSameAsDriver: '',
        ownerFirstName: '',
        ownerLastName: '',
        ownerPhoneNumber: '',
        ownerEmail: '',
        ownerStreetAddress: '',
        ownerCity: '',
        ownerState: '',
        ownerZipcode: ''
    });


    const tabClasses = useTabStyles();
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const driverInfoChange = (e) => {
        const {name, value} = e.target;
        setDriverValues(prevValues => {
            return ({...prevValues, [name]: value})
        });
    };

    const vehicleInfoChange = (e) => {
        const {name, value} = e.target;
        setVehicleValues(prevValues => {
            return ({...prevValues, [name]: value})
        });
    }

    const accidentInfoChange = (e) => {
        const {name, value} = e.target;
        setAccidentValues(prevValues => {
            return ({...prevValues, [name]: value})
        });
    }

    const thirdPartyInfoChange = (e) => {
        const {name, value} = e.target;
        setThirdPartyValues(prevValues => {
            return ({...prevValues, [name]: value})
        });
    }

    return (
        <div>
            <AppBar
                position='static'
                style={{
                    background: 'white',
                    boxShadow: 'none',
                    borderTop: '2px solid black',
                    borderBottom: '1px solid gray'
                }}
            >
                <Paper square className={tabClasses.root} style={{width: '100%'}}>
                    <Tabs
                        variant="fullWidth"
                        indicatorColor="primary"
                        textColor="primary"
                        aria-label="icon label tabs example"
                        style={{float: 'right'}}
                    >
                        <Tab style={{border: '1px solid gray', color: 'green'}} icon={<PhoneIcon/>}
                             label="Save" {...a11yProps(5)} />
                        <Tab style={{border: '1px solid gray', color: 'red'}} icon={<PersonPinIcon/>}
                             label="Delete" {...a11yProps(6)} />
                    </Tabs>
                </Paper>
            </AppBar>
            <AppBar
                position='static'
                style={{
                    background: 'white',
                    boxShadow: 'none',
                    borderTop: '2px solid black',
                    borderBottom: '1px solid gray'
                }}
            >
                <Paper square className={tabClasses.root}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                        indicatorColor="primary"
                        textColor="primary"
                        aria-label="icon label tabs example"
                    >
                        <Tab icon={<PersonPinIcon/>} label="Driver" {...a11yProps(0)} />
                        <Tab icon={<PersonPinIcon/>} label="Vehicle" {...a11yProps(1)} />
                        <Tab icon={<PersonPinIcon/>} label="Accident" {...a11yProps(2)} />
                        <Tab icon={<PersonPinIcon/>} label="Other Parties" {...a11yProps(3)} />
                        <Tab icon={<PersonPinIcon/>} label="Police Info" {...a11yProps(4)} />
                        <Tab icon={<PersonPinIcon/>} label="Summary" {...a11yProps(5)} />
                    </Tabs>
                </Paper>
            </AppBar>
            <form
                className={classes.root}
                noValidate autoComplete='off'
                method="POST"
                action="#"
            >
                <TabPanel value={value} index={0} style={{margin: 'auto', textAlign: 'center'}}>
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='First Name'
                        name='firstName'
                        id='firstName'
                        onChange={driverInfoChange}
                        value={driverValues.firstName}
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Last Name'
                        name='lastName'
                        id='lastName'
                        onChange={driverInfoChange}
                        value={driverValues.lastName}
                    />
                    <CssTextField
                        className={classes.margin}
                        type='number'
                        label='Phone Number'
                        name='phoneNumber'
                        id='phoneNumber'
                        onChange={driverInfoChange}
                        value={driverValues.phoneNumber}
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Email'
                        name='email'
                        id='email'
                        onChange={driverInfoChange}
                        value={driverValues.email}
                    />
                    <br/>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="injured">Injured?</InputLabel>
                        <Select
                            labelId="injured"
                            id="injured"
                            name='injured'
                            value={driverValues.injured}
                            onChange={driverInfoChange}
                        >
                            <MenuItem value={'Yes'}>Yes</MenuItem>
                            <MenuItem value={'No'}>No</MenuItem>
                        </Select>
                    </FormControl>
                    <CssTextField
                        className={classes.margin}
                        style={{minWidth: '300px'}}
                        type='text'
                        label='Injury Type'
                        name='injuryType'
                        id='injuryType'
                        disabled={driverValues.injured !== 'Yes'}
                        onChange={driverInfoChange}
                        value={driverValues.injuryType}
                        multiline
                    />
                    <br/>
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Street Address'
                        name='streetAddress'
                        id='streetAddress'
                        onChange={driverInfoChange}
                        value={driverValues.streetAddress}
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='City'
                        name='city'
                        id='city'
                        onChange={driverInfoChange}
                        value={driverValues.city}
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='State'
                        name='state'
                        id='state'
                        onChange={driverInfoChange}
                        value={driverValues.state}
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Zipcode'
                        name='zipcode'
                        id='zipcode'
                        onChange={driverInfoChange}
                        value={driverValues.zipcode}
                    />
                    <br/>
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Alternate Contact'
                        name='alternateContact'
                        id='alternateContact'
                        onChange={driverInfoChange}
                        value={driverValues.alternateContact}
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Phone Number'
                        name='altContactPhoneNumber'
                        id='altContactPhoneNumber'
                        onChange={driverInfoChange}
                        value={driverValues.altContactPhoneNumber}
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Email'
                        name='altContactEmail'
                        id='altContactEmail'
                        onChange={driverInfoChange}
                        value={driverValues.altContactEmail}
                    />
                </TabPanel>
                <TabPanel value={value} index={1} style={{margin: 'auto', textAlign: 'center'}}>
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Year'
                        name='year'
                        id='year'
                        onChange={vehicleInfoChange}
                        value={vehicleValues.year}
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Make'
                        name='make'
                        id='make'
                        onChange={vehicleInfoChange}
                        value={vehicleValues.make}
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Model'
                        name='model'
                        id='model'
                        onChange={vehicleInfoChange}
                        value={vehicleValues.model}
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Color'
                        name='color'
                        id='color'
                        onChange={vehicleInfoChange}
                        value={vehicleValues.color}
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Plate'
                        name='plate'
                        id='plate'
                        onChange={vehicleInfoChange}
                        value={vehicleValues.plate}
                    />
                </TabPanel>
                <TabPanel value={value} index={2} style={{margin: 'auto', textAlign: 'center'}}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="center">
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date of Incident"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                style={{margin: '40px'}}
                            />
                            <KeyboardTimePicker
                                margin="normal"
                                id="time-picker"
                                label="Time of Incident"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                                style={{margin: '40px'}}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <br/>
                    <CssTextField
                        className={classes.margin}
                        style={{width: '800px', marginTop: '0'}}
                        type='text'
                        label='Accident Details'
                        multiline
                        name='accidentDetails'
                        id='accidentDetails'
                        onChange={accidentInfoChange}
                        value={accidentValues.accidentDetails}
                    />
                    <br/>
                    <CssTextField
                        className={classes.margin}
                        style={{width: '300px'}}
                        type='text'
                        label='Street Name Or Address Of Incident'
                        name='accidentStreet'
                        id='accidentStreet'
                        onChange={accidentInfoChange}
                        value={accidentValues.accidentStreet}
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='City'
                        name='accidentCity'
                        id='accidentCity'
                        onChange={accidentInfoChange}
                        value={accidentValues.accidentCity}
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='State'
                        name='accidentState'
                        id='accidentState'
                        onChange={accidentInfoChange}
                        value={accidentValues.accidentState}
                    />
                    <br/>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="drivable">Vehicle Drivable?</InputLabel>
                        <Select
                            labelId="drivable"
                            id="drivable"
                            name='drivable'
                            value={accidentValues.drivable}
                            onChange={accidentInfoChange}
                        >
                            <MenuItem value={'Yes'}>Yes</MenuItem>
                            <MenuItem value={'No'}>No</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="safeToDrive">Vehicle Safe To Drive?</InputLabel>
                        <Select
                            labelId="safeToDrive"
                            id="safeToDrive"
                            name='safeToDrive'
                            value={accidentValues.safeToDrive}
                            onChange={accidentInfoChange}
                        >
                            <MenuItem value={'Yes'}>Yes</MenuItem>
                            <MenuItem value={'No'}>No</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="lightsWork">Do All Lights Work?</InputLabel>
                        <Select
                            labelId="lightsWork"
                            id="lightsWork"
                            name='lightsWork'
                            value={accidentValues.lightsWork}
                            onChange={accidentInfoChange}
                        >
                            <MenuItem value={'Yes'}>Yes</MenuItem>
                            <MenuItem value={'No'}>No</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="airbags">Airbags Deploy?</InputLabel>
                        <Select
                            labelId="airbags"
                            id="airbags"
                            name='airbags'
                            value={accidentValues.airbags}
                            onChange={accidentInfoChange}
                        >
                            <MenuItem value={'Yes'}>Yes</MenuItem>
                            <MenuItem value={'No'}>No</MenuItem>
                        </Select>
                    </FormControl>
                    <br/>
                    <FormControl className={classes.formControl} style={{minWidth: '350px'}}>
                        <InputLabel id="mobileDevice">On A Mobile Device At Time Of Incident?</InputLabel>
                        <Select
                            labelId="mobileDevice"
                            id="mobileDevice"
                            name='mobileDevice'
                            value={accidentValues.mobileDevice}
                            onChange={accidentInfoChange}
                        >
                            <MenuItem value={'Yes'}>Yes</MenuItem>
                            <MenuItem value={'No'}>No</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="handsFree">Was It Hands Free?</InputLabel>
                        <Select
                            labelId="handsFree"
                            id="handsFree"
                            name='handsFree'
                            disabled={accidentValues.mobileDevice !== 'Yes'}
                            value={accidentValues.handsFree}
                            onChange={accidentInfoChange}
                        >
                            <MenuItem value={'Yes'}>Yes</MenuItem>
                            <MenuItem value={'No'}>No</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="seatBelt">Wearing Your Seat Belt?</InputLabel>
                        <Select
                            labelId="seatBelt"
                            id="seatBelt"
                            name='seatBelt'
                            value={accidentValues.seatBelt}
                            onChange={accidentInfoChange}
                        >
                            <MenuItem value={'Yes'}>Yes</MenuItem>
                            <MenuItem value={'No'}>No</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="atFault">Driver At Fault?</InputLabel>
                        <Select
                            labelId="atFault"
                            id="atFault"
                            name='atFault'
                            value={accidentValues.atFault}
                            onChange={accidentInfoChange}
                        >
                            <MenuItem value={'Yes'}>Yes</MenuItem>
                            <MenuItem value={'No'}>No</MenuItem>
                            <MenuItem value={'Not Determined'}>Not Determined</MenuItem>
                        </Select>
                    </FormControl>
                    <br/>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="passengers">Any Passengers?</InputLabel>
                        <Select
                            labelId="passengers"
                            id="passengers"
                            name='passengers'
                            value={accidentValues.passengers}
                            onChange={accidentInfoChange}
                        >
                            <MenuItem value={'Yes'}>Yes</MenuItem>
                            <MenuItem value={'No'}>No</MenuItem>
                        </Select>
                    </FormControl>
                    <CssTextField
                        className={classes.margin}
                        type='number'
                        label='How Many Passengers?'
                        name='howManyPassengers'
                        id='howManyPassengers'
                        disabled={accidentValues.passengers !== 'Yes'}
                        onChange={accidentInfoChange}
                        value={accidentValues.howManyPassengers}
                    />
                    <FormControl className={classes.formControl}>
                        <InputLabel id="passengersInjured">Any Passengers Injured?</InputLabel>
                        <Select
                            labelId="passengersInjured"
                            id="passengersInjured"
                            name='passengersInjured'
                            disabled={accidentValues.passengers !== 'Yes'}
                            value={accidentValues.passengersInjured}
                            onChange={accidentInfoChange}
                        >
                            <MenuItem value={'Yes'}>Yes</MenuItem>
                            <MenuItem value={'No'}>No</MenuItem>
                        </Select>
                    </FormControl>
                    <CssTextField
                        className={classes.margin}
                        type='number'
                        label='How Many Were Injured?'
                        name='howManyPassengersInjured'
                        id='howManyPassengersInjured'
                        disabled={accidentValues.passengersInjured !== 'Yes'}
                        onChange={accidentInfoChange}
                        value={accidentValues.howManyPassengersInjured}
                    />
                    <br/>
                    <CssTextField
                        className={classes.margin}
                        style={{minWidth: '320px'}}
                        type='text'
                        label='Any Contributing Weather Factors?'
                        name='weather'
                        id='weather'
                        onChange={accidentInfoChange}
                        value={accidentValues.weather}
                    />
                    <FormControl className={classes.formControl}>
                        <InputLabel id="damagePhotos">Any Photos Of Damage?</InputLabel>
                        <Select
                            labelId="damagePhotos"
                            id="damagePhotos"
                            name='damagePhotos'
                            value={accidentValues.damagePhotos}
                            onChange={accidentInfoChange}
                        >
                            <MenuItem value={'Yes'}>Yes</MenuItem>
                            <MenuItem value={'No'}>No</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="scenePhotos">Any Photos Of The Scene?</InputLabel>
                        <Select
                            style={{minWidth: '260px'}}
                            labelId="scenePhotos"
                            id="scenePhotos"
                            name='scenePhotos'
                            value={accidentValues.scenePhotos}
                            onChange={accidentInfoChange}
                        >
                            <MenuItem value={'Yes'}>Yes</MenuItem>
                            <MenuItem value={'No'}>No</MenuItem>
                        </Select>
                    </FormControl>
                    <br/>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="vehicleTowed">Was The Vehicle Towed?</InputLabel>
                        <Select
                            labelId="vehicleTowed"
                            id="vehicleTowed"
                            name='vehicleTowed'
                            value={accidentValues.vehicleTowed}
                            onChange={accidentInfoChange}
                        >
                            <MenuItem value={'Yes'}>Yes</MenuItem>
                            <MenuItem value={'No'}>No</MenuItem>
                        </Select>
                    </FormControl>
                    <br/>
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Tow Location Name'
                        name='towLocationName'
                        id='towLocationName'
                        onChange={accidentInfoChange}
                        disabled={accidentValues.vehicleTowed !== 'Yes'}
                        value={accidentValues.towLocationName}
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Street Address'
                        name='towStreetAddress'
                        id='towStreetAddress'
                        onChange={accidentInfoChange}
                        disabled={accidentValues.vehicleTowed !== 'Yes'}
                        value={accidentValues.towStreetAddress}
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='City'
                        name='towCity'
                        id='towCity'
                        onChange={accidentInfoChange}
                        disabled={accidentValues.vehicleTowed !== 'Yes'}
                        value={accidentValues.towCity}
                    />
                    <br/>
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='State'
                        name='towState'
                        id='towState'
                        onChange={accidentInfoChange}
                        disabled={accidentValues.vehicleTowed !== 'Yes'}
                        value={accidentValues.towState}
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Zipcode'
                        name='towZipcode'
                        id='towZipcode'
                        onChange={accidentInfoChange}
                        disabled={accidentValues.vehicleTowed !== 'Yes'}
                        value={accidentValues.towZipcode}
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Phone Number'
                        name='towPhoneNumber'
                        id='towPhoneNumber'
                        onChange={accidentInfoChange}
                        disabled={accidentValues.vehicleTowed !== 'Yes'}
                        value={accidentValues.towPhoneNumber}
                    />
                </TabPanel>
                <TabPanel value={value} index={3} style={{margin: 'auto', textAlign: 'center'}}>
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='First Name'
                        name='firstName'
                        id='firstName'
                        onChange={thirdPartyInfoChange}
                        value={thirdPartyValues.firstName}
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Last Name'
                        name='lastName'
                        id='lastName'
                        onChange={thirdPartyInfoChange}
                        value={thirdPartyValues.lastName}
                    />
                    <CssTextField
                        className={classes.margin}
                        type='number'
                        label='Phone Number'
                        name='phoneNumber'
                        id='phoneNumber'
                        onChange={thirdPartyInfoChange}
                        value={thirdPartyValues.phoneNumber}
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Email'
                        name='email'
                        id='email'
                        onChange={thirdPartyInfoChange}
                        value={thirdPartyValues.email}
                    />
                    <br/>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="injured">Injured?</InputLabel>
                        <Select
                            labelId="injured"
                            id="injured"
                            name='injured'
                            value={thirdPartyValues.injured}
                            onChange={thirdPartyInfoChange}
                        >
                            <MenuItem value={'Yes'}>Yes</MenuItem>
                            <MenuItem value={'No'}>No</MenuItem>
                        </Select>
                    </FormControl>
                    <CssTextField
                        className={classes.margin}
                        style={{minWidth: '300px'}}
                        type='text'
                        label='Injury Type'
                        name='injuryType'
                        id='injuryType'
                        disabled={thirdPartyValues.injured !== 'Yes'}
                        onChange={thirdPartyInfoChange}
                        value={thirdPartyValues.injuryType}
                        multiline
                    />
                    <br/>
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Street Address'
                        name='streetAddress'
                        id='streetAddress'
                        onChange={thirdPartyInfoChange}
                        value={thirdPartyValues.streetAddress}
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='City'
                        name='city'
                        id='city'
                        onChange={thirdPartyInfoChange}
                        value={thirdPartyValues.city}
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='State'
                        name='state'
                        id='state'
                        onChange={thirdPartyInfoChange}
                        value={thirdPartyValues.state}
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Zipcode'
                        name='zipcode'
                        id='zipcode'
                        onChange={thirdPartyInfoChange}
                        value={thirdPartyValues.zipcode}
                    />
                    <br/>
                    <h2>Third Party Vehicle Info</h2>
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Year'
                        name='year'
                        id='year'
                        onChange={thirdPartyInfoChange}
                        value={thirdPartyValues.year}
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Make'
                        name='make'
                        id='make'
                        onChange={thirdPartyInfoChange}
                        value={thirdPartyValues.make}
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Model'
                        name='model'
                        id='model'
                        onChange={thirdPartyInfoChange}
                        value={thirdPartyValues.model}
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Color'
                        name='color'
                        id='color'
                        onChange={thirdPartyInfoChange}
                        value={thirdPartyValues.color}
                    />
                    <br/>
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Plate'
                        name='plate'
                        id='plate'
                        onChange={thirdPartyInfoChange}
                        value={thirdPartyValues.plate}
                    />
                    <FormControl className={classes.formControl}>
                        <InputLabel id="damagePhotos">Any Photos Of Damage?</InputLabel>
                        <Select
                            labelId="damagePhotos"
                            id="damagePhotos"
                            name='damagePhotos'
                            value={thirdPartyValues.damagePhotos}
                            onChange={thirdPartyInfoChange}
                        >
                            <MenuItem value={'Yes'}>Yes</MenuItem>
                            <MenuItem value={'No'}>No</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="drivable">Vehicle Drivable?</InputLabel>
                        <Select
                            labelId="drivable"
                            id="drivable"
                            name='drivable'
                            value={thirdPartyValues.drivable}
                            onChange={thirdPartyInfoChange}
                        >
                            <MenuItem value={'Yes'}>Yes</MenuItem>
                            <MenuItem value={'No'}>No</MenuItem>
                        </Select>
                    </FormControl>
                    <br/>
                    <h2>Third Party Owner Info</h2>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="ownerSameAsDriver">Owner Same As Driver?</InputLabel>
                        <Select
                            labelId="ownerSameAsDriver"
                            id="ownerSameAsDriver"
                            name='ownerSameAsDriver'
                            value={thirdPartyValues.ownerSameAsDriver}
                            onChange={thirdPartyInfoChange}
                        >
                            <MenuItem value={'Yes'}>Yes</MenuItem>
                            <MenuItem value={'No'}>No</MenuItem>
                        </Select>
                    </FormControl>
                    <br/>
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='First Name'
                        name='ownerFirstName'
                        id='ownerFirstName'
                        onChange={thirdPartyInfoChange}
                        disabled={thirdPartyValues.ownerSameAsDriver === 'Yes'}
                        value={
                            thirdPartyValues.ownerSameAsDriver === 'Yes' ?  thirdPartyValues.firstName
                        : thirdPartyValues.ownerFirstName
                        }
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Last Name'
                        name='ownerLastName'
                        id='ownerLastName'
                        onChange={thirdPartyInfoChange}
                        disabled={thirdPartyValues.ownerSameAsDriver === 'Yes'}
                        value={
                            thirdPartyValues.ownerSameAsDriver === 'Yes' ?  thirdPartyValues.lastName
                                : thirdPartyValues.ownerLastName
                        }
                    />
                    <CssTextField
                        className={classes.margin}
                        type='number'
                        label='Phone Number'
                        name='ownerPhoneNumber'
                        id='ownerPhoneNumber'
                        onChange={thirdPartyInfoChange}
                        disabled={thirdPartyValues.ownerSameAsDriver === 'Yes'}
                        value={
                            thirdPartyValues.ownerSameAsDriver === 'Yes' ?  thirdPartyValues.phoneNumber
                                : thirdPartyValues.ownerPhoneNumber
                        }
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Email'
                        name='ownerEmail'
                        id='ownerEmail'
                        onChange={thirdPartyInfoChange}
                        disabled={thirdPartyValues.ownerSameAsDriver === 'Yes'}
                        value={
                            thirdPartyValues.ownerSameAsDriver === 'Yes' ?  thirdPartyValues.email
                                : thirdPartyValues.ownerEmail
                        }
                    />
                    <br/>
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Street Address'
                        name='ownerStreetAddress'
                        id='ownerStreetAddress'
                        onChange={thirdPartyInfoChange}
                        disabled={thirdPartyValues.ownerSameAsDriver === 'Yes'}
                        value={
                            thirdPartyValues.ownerSameAsDriver === 'Yes' ?  thirdPartyValues.streetAddress
                                : thirdPartyValues.ownerStreetAddress
                        }
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='City'
                        name='ownerCity'
                        id='ownerCity'
                        onChange={thirdPartyInfoChange}
                        disabled={thirdPartyValues.ownerSameAsDriver === 'Yes'}
                        value={
                            thirdPartyValues.ownerSameAsDriver === 'Yes' ?  thirdPartyValues.city
                                : thirdPartyValues.ownerCity
                        }
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='State'
                        name='ownerState'
                        id='ownerState'
                        onChange={thirdPartyInfoChange}
                        disabled={thirdPartyValues.ownerSameAsDriver === 'Yes'}
                        value={
                            thirdPartyValues.ownerSameAsDriver === 'Yes' ?  thirdPartyValues.state
                                : thirdPartyValues.ownerState
                        }
                    />
                    <CssTextField
                        className={classes.margin}
                        type='text'
                        label='Zipcode'
                        name='ownerZipcode'
                        id='ownerZipcode'
                        onChange={thirdPartyInfoChange}
                        disabled={thirdPartyValues.ownerSameAsDriver === 'Yes'}
                        value={
                            thirdPartyValues.ownerSameAsDriver === 'Yes' ?  thirdPartyValues.zipcode
                                : thirdPartyValues.ownerZipcode
                        }
                    />
                </TabPanel>
                <TabPanel value={value} index={4} style={{margin: 'auto', textAlign: 'center'}}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={5} style={{margin: 'auto', textAlign: 'center'}}>
                    Item Three
                </TabPanel>
            </form>
        </div>
    );
};

export default NewClaim;
