import React from 'react';

const ApiRetriever = (props) => {
    const { events } = props;
    if (!events || events.length === 0) return <p>No events, sorry</p>;
    return (
        <table>
            <tbody>
                <h2 className='list-head'>Upcoming Events</h2>
                {events.map((event) => {
                    return (
                        <div key={event[0]} className=''>
                            <p className=''>Designated Name: {event[0]} </p>
                            <p className=''>Date: {event[3]}</p>
                        </div>
                    );
                })}
            </tbody>
        </table>
    );
};

export default ApiRetriever;
  