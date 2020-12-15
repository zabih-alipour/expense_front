// import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/Menu'
import Home from './components/home/Home'
import Invoice from './components/invoice/Invoice'
import Report from './components/report/Report'
import React from "react";

class App extends React.Component {
    state = {
        tabIndex: 0
    }

    changeTab(index) {
        this.setState({tabIndex: index})
    }

    render() {
        let currentTab;
        if (this.state.tabIndex === "0")
            currentTab = <Home/>
        else if (this.state.tabIndex === "1")
            currentTab = <Invoice/>
        else if (this.state.tabIndex === "2")
            currentTab = <Report/>
        return (
            <div className="App">
                <Menu onClick={(p) => this.changeTab(p)}/>
                {currentTab}
            </div>
        );
    }
}

export default App;
