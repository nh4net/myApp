import React from 'react';

const ThemeContext = React.createContext('light');

function Toolbar(props) {
    return (
        <div>
            <ThemeButton/>
        </div>
    )
}

const styles = {
    dark: {
        background: "gray",
        color: "white"
    },
    light: {
        background: "white",
        color: "black"
    }
}

function ThemeButton(props) {
    return (
        <ThemeContext.Consumer>
            <h1>value</h1>
        </ThemeContext.Consumer>
    )
}

export default Theme;