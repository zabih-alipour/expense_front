// import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/Menu'
import Home from './components/home/Home'
import Invoice from './components/invoice/Invoice'
import Report from './components/report/Report'
import Subject from './components/subject/Subject'
import React from "react";

class App extends React.Component {
    state = {
        tabIndex: "home"
    }

    changeTab(index) {
        this.setState({tabIndex: index})
    }

    render() {
        let currentTab;
        if (this.state.tabIndex === "home")
            currentTab = <Home/>
        else if (this.state.tabIndex === "invoice")
            currentTab = <Invoice/>
        else if (this.state.tabIndex === "report")
            currentTab = <Report/>
        else if (this.state.tabIndex === "subject")
            currentTab = <Subject/>
        return (
            <div className="App">
                <Menu onClick={(p) => this.changeTab(p)}/>
                {currentTab}
            </div>
        );
    }
}

export default App;
