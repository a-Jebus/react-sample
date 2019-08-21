import ReactDOM from "react-dom";
import React, { Component } from "react";
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

class Todo extends Component {
  constructor(props) {
    super(props);
    var data = {
      test: [
        {
          consumerName: "LGIM",
          reportPortfolios: ["Holdings", "Transactions"],
          reportPortfoliosDetails: [
            {
              portfolioType: "Holdings",
              custodyAccountIDs: ["LGIC02", "LGIC03", "LGIC57"]
            },
            {
              portfolioType: "Transactions",
              custodyAccountIDs: ["LGIC02", "LGIC03", "LGIC57"]
            }
          ]
        },
        {
          consumerName: "Test LGIM",
          reportPortfolios: ["Holdings sub", "Transactions sub"],
          reportPortfoliosDetails: [
            {
              portfolioType: "Holdings sub",
              custodyAccountIDs: ["LGIC02", "LGIC03", "LGIC57"]
            },
            {
              portfolioType: "Transactions sub",
              custodyAccountIDs: ["LGIC02", "LGIC03", "LGIC57"]
            }
          ]
        }
      ]
    };
    let options = [
      { label: "Thing 1", value: 1 },
      { label: "Thing 2", value: 2 }
    ];
    this.state = {
      data: data,
      options: options
    };

    this.handleChangeMain = this.handleChangeMain.bind(this);
    this.handleChangeSub = this.handleChangeSub.bind(this);
  }
  handleChangeMain(event) {
    console.log(event.target.value);
    this.setState({
      mainValue: event.target.value,
      mainValueData: this.state.data.test.find(
        obj => obj.consumerName === event.target.value
      )
    });
    console.log(this.state.mainValue);
  }
  handleChangeSub(event) {
    console.log(event.target.value);
    this.setState({
      mainValue: event.target.value,
      mainValueData: this.state.data.test.find(
        obj => obj.consumerName === event.target.value
      )
    });
    console.log(this.state.mainValue);
  }
  render() {
    console.log(this.state.mainValue);
    return (
      <div>
        <div>
          <select
            id="lang"
            onChange={this.handleChangeMain}
            value={this.state.mainValue}
          >
            {this.state.data.test.map(main => {
              return (
                <option value={main.consumerName}>{main.consumerName}</option>
              );
            })}
          </select>
        </div>
        <div>
          {this.state.mainValue ? (
            <div>
              <select
                id="lang1"
                onChange={this.handleChangeSub}
                value={this.state.subValue}
              >
                {this.state.mainValueData.reportPortfoliosDetails.map(sub => {
                  return (
                    <option value={sub.portfolioType}>
                      {sub.portfolioType}
                    </option>
                  );
                })}
              </select>
            </div>
          ) : (
            <div>
              <select>
                <option>Nothing to show</option>
              </select>
            </div>
          )}
        </div>
        <div>
          <ReactMultiSelectCheckboxes options={this.state.options} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Todo />, document.getElementById("root"));
