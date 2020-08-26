import React from 'react';

const Country = (props) => {
    const {name, population, region, flag} = props.country;
    const handleAddCountry = props.handleAddCountry;
    const flagStyle = {height: '50px'};
    const countryStyle = {border: '1px solid red', margin: '10px', padding: '10px'};
    return (
        <div style={countryStyle}>
            {/* <h1>This is {props.children}.</h1> */}
            <h3>This is {name}.</h3>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;