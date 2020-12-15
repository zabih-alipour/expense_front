import React from 'react';
import {Line} from 'react-chartjs-2';

export default class SubjectLineChart extends React.Component {
    state = {
        item_name: '',
        isDataPrepared: false,
        labels: [],
        datasets: []
    }
    chartReference = {};

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.selectedSubject !== this.props.selectedSubject) {
            const obj = {
                item_name: '',
                labels: [],
                resultData: [
                    /*{
                        label: 'تعداد',
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'rgb(248,232,95)',
                        borderColor: 'rgb(129,208,239)',
                        borderWidth: 2,
                        data: []
                    },*/
                    {
                        label: 'قیمت',
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'rgb(248,232,95)',
                        borderColor: 'rgb(184,33,6)',
                        borderWidth: 2,
                        data: []
                    },
                    // {
                    //     label: 'مجموع',
                    //     fill: false,
                    //     lineTension: 0.5,
                    //     backgroundColor: 'rgb(248,232,95)',
                    //     borderColor: 'rgb(231,8,227)',
                    //     borderWidth: 2,
                    //     data: []
                    // }
                ]
            }
            fetch('/invoices/' + this.props.selectedSubject)
                .then(res => res.json())
                .then(result => {
                    result.forEach(p => {
                        obj['item_name'] = p['item_name']
                        obj.labels.push(p['factor_date'])
                        // obj.resultData[0].data.push(p['quality'])
                        obj.resultData[0].data.push(p['price'])
                        // obj.resultData[1].data.push((p['quality'] * p['price']))
                    })
                });
            this.setState({
                isDataPrepared: true,
                item_name: obj.item_name,
                labels: obj.labels,
                datasets: obj.resultData
            })


        }
    }


    render() {
        let lineChart = this.chartReference.chartInstance
        if (lineChart !== undefined)
            lineChart.update();
        return (
            <div>
                <Line ref={(reference) => this.chartReference = reference}
                      data={this.state}
                      redraw={true}
                      options={{
                          title: {
                              display: true,
                              text: 'هزینه خرید ' + this.state.item_name,
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