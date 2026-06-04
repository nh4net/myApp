import React from 'react';
const ThemeContext = React.createContext('light');
const UserContext = React.createContext('user');

export default function Theme(props) {
    return (
        <ThemeContext.Provider value="dark">
            <UserContext.Provider value="induk">
                <Toolbar />
            </UserContext.Provider>
        </ThemeContext.Provider>
    );
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
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
function ThemedButton(props) {
    return (
        <ThemeContext.Consumer>
            {value => (                
                <UserContext.Consumer>
                    {user => (
                        <button
                            style={value === 'dark' ? styles.dark : styles.light}
                        >
                            Button {user}
                        </button>
                    )}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}