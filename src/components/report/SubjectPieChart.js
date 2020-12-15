import React from 'react';
import {Pie} from 'react-chartjs-2';

function dynamicColors() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
}

export default class SubjectPieChart extends React.Component {

    state = {
        labels: [],
        datasets: [
            {
                backgroundColor: [],
                hoverBackgroundColor: [],
                data: []
            }
        ]
    };

    componentDidMount() {
        const labels = []
        const obj = {
            backgroundColor: [],
            hoverBackgroundColor: [],
            data: []
        }

        fetch('/reports/subject-expense')
            .then(res => res.json())
            .then(result => {
                result.forEach(p => {
                    labels.push(p['name'])
                    obj.data.push(p['amount'])
                    obj.backgroundColor.push(dynamicColors())
                    obj.hoverBackgroundColor.push(dynamicColors())
                })
            });

        this.setState({
            labels: labels,
            datasets: [obj]
        })
    }

    render() {
        return (
            <div>
                <Pie
                    data={this.state}
                    options={{
                        title: {
                            display: true,
                            text: 'هزینه براساس ایتم',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        );
    }
}