import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Popup from "reactjs-popup";

class App extends React.Component {
  constructor() {
    this.state = {
      data:{
        test: [
          {
            name:"1",
            timestamp: "30-10-1993",
            reportPortfolioDetails: [
              {
                portfolioType: "holding",
                accountAttribuites: [
                  "art 1",
                  "art 2"
                ]
              },
              {
                portfolioType: "transaction",
                accountAttribuites: [
                  "tran 1",
                  "tran 2",
                  "tran 3"
                ]
              }
            ]
          },
          {
            name:"2",
            timestamp: "30-10-1993",
            reportPortfolioDetails: [
              {
                portfolioType: "holding",
                accountAttribuites: [
                  "art 1",
                  "art 2",
                  "art 3"
                ]
              },
              {
                portfolioType: "transaction",
                accountAttribuites: [
                  "tran 1",
                  "tran 2",
                  "tran 3"
                ]
              }
            ]
          }
        ]
      }
    }
    
  }

  render() {
    var response = [];
    this.state.data.test.forEach(main => {
      main.reportPortfolioDetails.forEach(portfol => {
        var data = {
          name:"",
          type:"",
          timestamp:"",
          attr: {
            count: 0,
            attrList: []
          }
        };
        data.name = main.name;
        data.timestamp = main.timestamp;
        data.type = portfol.portfolioType;
        data.attr.count = portfol.accountAttribuites.length;
        data.attr.attrList = portfol.accountAttribuites;
        response.push(data);
      });
    });
    console.log(response);

    const columns = [
    {
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Type',
      accessor: 'type'
    }, {
      Header: 'Timestamp',
      accessor: 'timestamp'
    }, {
      id: 'Attr_Count',
      Header: 'Atttr Count',
      accessor: d => d.attr,
      Cell: props =>
      <Popup trigger={<span>{props.value.count}</span>} position="right center">
      <div class="pops">{props.value.attrList.map((attr, i) =>  <div>{attr}</div>)}</div>
  </Popup>
    }
  ]
 
  return <ReactTable
    data={response}
    columns={columns}
  />
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    );
  }
}

class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.type}</td>
        <td>{this.props.data.attr.count}</td>
      </tr>
    );
  }
}

render(<App />, document.getElementById('root'));
