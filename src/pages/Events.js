import React, { useState, useEffect } from 'react';
import api from '../apis/api'
import axios from 'axios';
import ApiLoading from '../components/molecules/ApiLoading';
import CustomPaginationActionsTable from '../components/molecules/CustomPaginationActionsTable';

const Events = () => {

    const ListLoading = ApiLoading(CustomPaginationActionsTable);

    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });

    const handleErrorResponse = error => {
        console.error(error);
    };

    useEffect(() => {
        setAppState({ loading: true });

        function getAPI() {
            const getAPIList = []
            for (let item of api()) {
                getAPIList.push(axios.get(item));
            }
            return getAPIList;
        }
        
        axios.all(getAPI())
        .then(axios.spread((obj1, obj2, obj3, obj4) => {
            const CAD1 = obj1.data.data;
            const CAD2 = obj2.data.data;
            const CAD3 = obj3.data.data;
            const CAD4 = obj4.data.data;
            const CADList = [CAD1, CAD2, CAD3, CAD4]
            const CADFunc = () => {for (let api of CADList) {return CADList[api]}}
            setAppState({ loading: false, events: CADFunc() });
        }))
        .catch(handleErrorResponse);
    }, [setAppState]);    

    return (
        <div>
            <h1>Events</h1>
            <div className='repo-container'>
                <ListLoading isLoading={appState.loading} events={appState.events} />
            </div>
        </div>
    );
};

export default Events;