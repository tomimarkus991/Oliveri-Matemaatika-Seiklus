import React, { Component } from "react";

class Settings extends Component {
  constructor() {
    super();
    this.state = {
      maxNumber: 5,
      levelDownWhen: -15,
      levelUpWhen: 15,
      add: true,
      substract: false,
      multiply: false,
      divide: false,
    };
  }
  handleSettingChange = (e) => {
    if (e.target.type === "number") {
      this.setState({
        [e.target.id]: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        [e.target.id]: e.target.checked,
      });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const {
      maxNumber,
      levelDownWhen,
      levelUpWhen,
      add,
      substract,
      multiply,
      divide,
    } = this.state;
    this.props.updateSettings(
      maxNumber,
      levelDownWhen,
      levelUpWhen,
      add,
      substract,
      multiply,
      divide
    );
  };
  render() {
    const {
      maxNumber,
      levelDownWhen,
      levelUpWhen,
      add,
      substract,
      multiply,
      divide,
    } = this.state;

    return (
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <p className="h1">Settings</p>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="row justify-content-sm-center">
            <div className="col-sm-auto">
              <div className="input-group mb-1">
                <div className="input-group-prepend">
                  <span className="set-input input-group-text text-setting">
                    Kui suurt arvu soovid
                  </span>
                </div>
                <input
                  type="number"
                  className="set form-control text-setting-field"
                  id="maxNumber"
                  onChange={this.handleSettingChange}
                  value={maxNumber}
                  max="999999"
                />
              </div>
            </div>
          </div>

          <div className="row justify-content-sm-center">
            <div className="col-sm-auto">
              <div className="input-group mb-1">
                <div className="input-group-prepend">
                  <span className="set-input input-group-text text-setting">
                    Millal levelist läbi kukud
                  </span>
                </div>
                <input
                  type="number"
                  className="set form-control text-setting-field"
                  id="levelDownWhen"
                  onChange={this.handleSettingChange}
                  value={levelDownWhen}
                  max="999999"
                />
              </div>
            </div>
          </div>

          <div className="row justify-content-sm-center">
            <div className="col-sm-auto">
              <div className="input-group mb-1">
                <div className="input-group-prepend">
                  <span className="set-input input-group-text text-setting">
                    Millal läheb level suuremaks
                  </span>
                </div>
                <input
                  type="number"
                  className="set form-control text-setting-field"
                  id="levelUpWhen"
                  onChange={this.handleSettingChange}
                  value={levelUpWhen}
                  max="999999"
                />
              </div>
            </div>
          </div>

          <div className="container my-2">
            <div className="row justify-content-center">
              <div className="col-sm-auto">
                <div className="input-group mb-1">
                  <div className="input-group-text custom-control custom-switch">
                    <div className="ml-1">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="add"
                        onChange={this.handleSettingChange}
                        value={add}
                        defaultChecked
                      />
                      <label
                        className="custom-control-label checkbox-setting-label"
                        htmlFor="add"
                      >
                        Liitmine
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-auto">
                <div className="input-group mb-1">
                  <div className="input-group-text custom-control custom-switch">
                    <div className="ml-1">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="substract"
                        onChange={this.handleSettingChange}
                        value={substract}
                      />
                      <label
                        className="custom-control-label checkbox-setting-label"
                        htmlFor="substract"
                      >
                        Lahutamine
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-auto">
                <div className="input-group mb-1">
                  <div className="input-group-text custom-control custom-switch">
                    <div className="ml-1">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="multiply"
                        onChange={this.handleSettingChange}
                        value={multiply}
                      />
                      <label
                        className="custom-control-label checkbox-setting-label"
                        htmlFor="multiply"
                      >
                        Korrutamine
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-auto">
                <div className="input-group mb-1">
                  <div className="input-group-text custom-control custom-switch">
                    <div className="ml-1">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="divide"
                        onChange={this.handleSettingChange}
                        value={divide}
                      />
                      <label
                        className="custom-control-label checkbox-setting-label"
                        htmlFor="divide"
                      >
                        Jagamine
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center my-4">
            <div className="col">
              <button className="btn btn-outline-secondary">Save</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Settings;
