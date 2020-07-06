import React, { useState, useContext } from "react";
import ThemeToggler from "./ThemeToggler";
import { ThemeContext } from "../contexts/ThemeContext";

const Settings = ({ updateSettings }) => {
  const [maxNumber, setMaxNumber] = useState(5);
  const [levelDownWhen, setLevelDownWhen] = useState(-15);
  const [levelUpWhen, setLevelUpWhen] = useState(15);
  const [add, setAdd] = useState(true);
  const [substract, setSubstract] = useState(false);
  const [multiply, setMultiply] = useState(false);
  const [divide, setDivide] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSettings(
      maxNumber,
      levelDownWhen,
      levelUpWhen,
      add,
      substract,
      multiply,
      divide
    );
  };
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { syntax, ui, bg } = theme;
  return (
    <div
      className="container text-center pb-2 rounded-bottom"
      style={{ background: bg, color: syntax }}
    >
      <div className="row">
        <div className="col">
          <p className="h1">Settings</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
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
                onChange={(e) => setMaxNumber(e.target.value)}
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
                onChange={(e) => setLevelDownWhen(e.target.value)}
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
                onChange={(e) => setLevelUpWhen(e.target.value)}
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
                      onChange={(e) => setAdd(e.target.checked)}
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
                      onChange={(e) => setSubstract(e.target.checked)}
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
                      onChange={(e) => setMultiply(e.target.checked)}
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
                      onChange={(e) => setDivide(e.target.checked)}
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
            <button className="btn btn-dark mb-4">Save</button>
            <ThemeToggler />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Settings;
