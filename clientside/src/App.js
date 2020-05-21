import React, {useEffect, useState} from 'react';
import Container from "@material-ui/core/Container";
import Header from "./components/Header";
import {Route} from 'react-router-dom';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserExists from "./components/errors/UserExists";
import LoginIncorrect from "./components/errors/LoginIncorrect";
import Dashboard from "./components/Dashboard";
import axios from 'axios';
import NewClaim from "./components/NewClaim";
import AllFieldsRequired from "./components/errors/AllFieldsRequired";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [claimNumber, setClaimNumber] = useState('');
    const [claimID, setClaimID] = useState('');

    useEffect(() => {
        async function fetchData() {
            const user = await axios.get('userinfo');
            if (user.data.id) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false)
            }
        }

        fetchData();
    }, []);

    const initialClaim = () => {
        axios.post('/claims/initial')
            .then(info => {
                setClaimNumber(info.data.claimNumber);
                setClaimID(info.data._id);
            });
    };

    return (
        <Container maxWidth="xl">
            <Header
                isLoggedIn={isLoggedIn}
                initialClaim={initialClaim}
                claimNumber={claimNumber}
            />
            <Route exact path='/'>{isLoggedIn ? <Dashboard/> : <Login/>}</Route>
            <Route path='/login'><Login/></Route>
            <Route path='/signup'><SignUp/></Route>
            <Route path='/userexists'><UserExists/></Route>
            <Route path='/loginincorrect'><LoginIncorrect/></Route>
            <Route
                path='/newclaim'
                render={(props) => <NewClaim {...props} claimNumber={claimNumber} claimID={claimID} />}
            />
            <Route path='/claim/:topic'><NewClaim/></Route>
            <Route path='/allfieldsrequired'><AllFieldsRequired/></Route>

        </Container>
    );
}

export default App;
