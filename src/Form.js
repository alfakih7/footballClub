import React from 'react';

const Form = () => {
    const inputStyle = {
        borderRadius: '0', // Remove border radius
        padding: '5px', // Increase padding
        marginBottom: '10px',
        width: '100%',
        outline: 'none', // Remove outline
        borderLeft: 'none', // Remove left border
        borderRight: 'none', // Remove right border
        borderTop: 'none',
        borderBottom : 'none', // Remove top border
        backgroundColor: 'black', // Set background color to black
        color: 'grey' // Set text color to grey
    };

    const hrStyle = {
        border: 'none',
        borderTop: '1px solid white', // Set borderTop color to red
        width: '200%', // Increase the width to 200%
        marginBottom: '10px'
    };

    const buttonStyle = {
        marginLeft: '0', // Remove the left margin
        width: 'calc(100% + 150px)', // Set button width to 100% minus 20px
        height : '45px',
        borderRadius: '0', // Make it a rectangle
        marginTop: '50px', // Add some space above the button
        marginBottom: '20px', // Add some space below the button
        backgroundColor: 'black', // Set button background color to black
        color: 'white', // Set button text color to grey
        padding: '10px',
        cursor: 'pointer',
        alignSelf: 'flex-start', // Align the button with the start of the input
        marginRight: '0' // Remove the right margin
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '300px' }}> 
            <input type="text" placeholder="Username" style={inputStyle} />
            <hr style={hrStyle} />
            <input type="password" placeholder="Password" style={inputStyle} />
            <hr style={hrStyle} />
            <button style={{...buttonStyle, fontSize : "20px" , fontFamily : 'Roboto'}}>Login</button>
        </div>
    );
};

export default Form;