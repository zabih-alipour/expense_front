import React from 'react';
import {Line} from 'react-chartjs-2';

export default class DailyExpenseChart extends React.Component {
    state = {
        isDataPrepared: false,
        labels: [],
        datasets: []
    }
    componentDidMount() {

        const obj = {
            labels: [],
            resultData: []
        }


        fetch('/reports/daily-expense')
            .then(res => res.json())
            .then(result => {
                result.forEach(p => {
                    obj.labels.push(p['factor_date'])
                    obj.resultData.push(p['amount'])
                })
            });


        const dataToShow = {
            label: 'مبلغ خرج شده',
            fill: true,
            lineTension: 0.5,
            backgroundColor: 'rgb(248,232,95)',
            borderColor: 'rgb(129,208,239)',
            borderWidth: 2,
            data: obj.resultData
        }
        this.setState({
            isDataPrepared: true,
            labels: obj.labels,
            datasets: [dataToShow]
        })
    }


    render() {
        return (
            <div>
                <Line
                    data={this.state}
                    options={{
                        title: {
                            display: true,
                            text: 'مخارج روزانه',
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