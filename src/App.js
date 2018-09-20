import React, { Component } from "react";

// At first we need to create our context
const MyContext = React.createContext();

// Then we need to create our provider
class MyProvider extends Component {
    state = {
        name: "Taen",
        age: 19,
        cool: true
    };
    render() {
        return (
            <MyContext.Provider
                value={{
                    state: this.state,
                    growAgeOneUp: () => {
                        this.setState({ age: this.state.age + 1 });
                    }
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

class App extends Component {
    render() {
        return (
            <MyProvider>
                <Family />
            </MyProvider>
        );
    }
}

const Family = () => <Person />;

class Person extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {context => (
                    <React.Fragment>
                        <h3>Relevant Person</h3>
                        <p>Name: {context.state.name}</p>
                        <p>Age: {context.state.age}</p>
                        <button onClick={context.growAgeOneUp}>
                            Increment Age
                        </button>
                    </React.Fragment>
                )}
            </MyContext.Consumer>
        );
    }
}

export default App;
