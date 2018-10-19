import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import App from "./App";

describe("app", () => {
  let div;
  beforeEach(() => {
    div = document.createElement("div");
  });
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders without crashing", () => {
    let el = ReactDOM.render(<App />, div);
    expect(el).not.toBeUndefined();
  });
  it("renders copyright", () => {
    let stringEl = ReactDOMServer.renderToStaticMarkup(<App />);
    expect(stringEl.includes(`Copyright © 2018`)).toEqual(true);
    expect(
      stringEl.includes(
        `href="http://deciphernow.com/"> Decipher Technology Studios`
      )
    ).toEqual(true);
  });
  it("renders title", () => {
    let title = "Service Integration Tests";
    let stringEl = ReactDOMServer.renderToStaticMarkup(<App />);
    expect(stringEl.includes(title)).toEqual(true);
  });
  it("renders test buttons", () => {
    let runAllTests = `Run All Tests</span>`;
    let runFailing = `Run Failing Tests</span></button>`;
    let stringEl = ReactDOMServer.renderToStaticMarkup(<App />);
    expect(stringEl.includes(runAllTests)).toEqual(true);
    expect(stringEl.includes(runFailing)).toEqual(true);
  });
  it("renders when tests are unsuccessful", () => {
    let mapping = {
      "get/example": {
        getExamplePositiveTest: {
          name: "PositiveTest",
          ID: "getExamplePositiveTest",
          test: () => Promise.resolve({ success: false })
        }
      }
    };
    let stringEl = ReactDOMServer.renderToStaticMarkup(
      <App testMapping={mapping} />
    );
    expect(stringEl).not.toBeUndefined();
  });
});
