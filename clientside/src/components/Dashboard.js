import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    const [claimList, setClaimList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get('/claims/recent')
            .then(items => {
                const getValues = Object.values(items.data);
                setClaimList(getValues);
                setLoading(false);
            })
            .catch(err => err)
    }, []);

    if (loading) {
        return null
    }

    return (
        <div>
            <div>
                Search Fields
            </div>
            <div>
                {claimList.map(item => {
                    return (
                        <Link to={'/claim/updateclaim?'+ item.claimNumber} key={item.claimNumber}>
                            <ul style={{columnCount: '4', listStyleType: 'none', display: 'flex', justifyContent: 'center'}}>
                                <li
                                    style={{width: '250px', textAlign: 'center'}}
                                >
                                    Driver<br/>
                                    <hr/>
                                    {item.driverValues.lastName}, {item.driverValues.firstName}
                                </li>
                                <li style={{width: '250px', textAlign: 'center'}}>
                                    Date of Incident:<br/>
                                    <hr/>
                                    {item.selectedDate}
                                </li>
                                <li style={{width: '250px', textAlign: 'center'}}>
                                    Date Reported:<br/>
                                    <hr/>
                                    {item.reportedOn}
                                </li>
                                <li style={{width: '250px', textAlign: 'center'}}>
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
