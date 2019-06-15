import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  constructor() {
    this.state = {
      data:{
        test: [
          {
            name:"1",
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
          },
          {
            name:"2",
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
        ],
        res: []
      }
    }
    var response = [];
    this.state.data.test.forEach(main => {
      main.reportPortfolioDetails.forEach(portfol => {
        var data = {
          name:"",
          type:"",
          attr: {
            count: 0,
            attrList: []
          }
        };
        data.name = main.name;
        data.type = portfol.portfolioType;
        data.attr.count = portfol.accountAttribuites.length;
        data.attr.attrList = portfol.accountAttribuites;
        response.push(data);
      });
      this.state.res = response;
      console.log(response);
    });
  }

  render() {
    return (
      <div>
        <Header />
        <table>
          <tbody>
            {this.state.res.map((person, i) => <TableRow key={i} data={person} />)}
          </tbody>
        </table>
      </div>
    );
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
      <tr class="rowsss">
        <td class="columnss">{this.props.data.name}</td>
        <td>{this.props.data.type}</td>
        <td>{this.props.data.attr.count}</td>
      </tr>
    );
  }
}

render(<App />, document.getElementById('root'));
