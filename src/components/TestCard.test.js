// TestCard.test.js

import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import TestCard from "./TestCard";

describe("test card", () => {
  let defaultProps = {
    tests: [
      {
        name: "PositiveTest",
        ID: "getExamplePositiveTest",
        success: false
      },
      {
        name: "NegativePositiveTest",
        ID: "getExampleNegativeTest",
        success: false
      }
    ],
    path: "/example",
    pathType: "get",
    data: {
      operationId: "Example",
      responses: {
        "200": {
          description: ""
        }
      }
    },
    classes: {
      appBarSuccess: "TestCard-appBarSuccess-228",
      appBarFailure: "TestCard-appBarFailure-229",
      appBarLoading: "TestCard-appBarLoading-230",
      icon: "TestCard-icon-231",
      heroUnit: "TestCard-heroUnit-232",
      heroContent: "TestCard-heroContent-233",
      heroButtons: "TestCard-heroButtons-234",
      layout: "TestCard-layout-235",
      cardGrid: "TestCard-cardGrid-236",
      card: "TestCard-card-237",
      cardMedia: "TestCard-cardMedia-238",
      cardContent: "TestCard-cardContent-239",
      footer: "TestCard-footer-240",
      statusAvatarloading: "TestCard-statusAvatarloading-241",
      statusAvatarfailure: "TestCard-statusAvatarfailure-242",
      statusAvatarsuccess: "TestCard-statusAvatarsuccess-243",
      progress: "TestCard-progress-244",
      root: "TestCard-root-245",
      wrapper: "TestCard-wrapper-246",
      buttonSuccess: "TestCard-buttonSuccess-247",
      buttonLoading: "TestCard-buttonLoading-248",
      buttonFailure: "TestCard-buttonFailure-249",
      buttonFailureMain: "TestCard-buttonFailureMain-250",
      buttonSuccessMain: "TestCard-buttonSuccessMain-251",
      fabProgress: "TestCard-fabProgress-252",
      buttonProgress: "TestCard-buttonProgress-253"
    },
    runTest: (name, id, test) => (runTestCalled = { name, id, test }),
    initiallyExpanded: true
  };

  let div;
  let runTestCalled;
  beforeEach(() => {
    div = document.createElement("div");
    runTestCalled = undefined;
  });
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders without crashing", () => {
    expect(TestCard).not.toBeUndefined();
    let stringEl = ReactDOMServer.renderToStaticMarkup(
      <TestCard {...defaultProps} />
    );
    expect(stringEl).not.toBeUndefined();
  });
  it("renders pathType", () => {
    let header = `MuiCardHeader-title-156">/example</span><`;
    let stringEl = ReactDOMServer.renderToStaticMarkup(
      <TestCard {...defaultProps} />
    );
    expect(stringEl.includes(header)).toEqual(true);
  });
  it("renders path", () => {
    let path = `TestCard-statusAvatarfailure-242">get</div>`;
    let stringEl = ReactDOMServer.renderToStaticMarkup(
      <TestCard {...defaultProps} />
    );
    expect(stringEl.includes(path)).toEqual(true);
  });
  it("renders tests", () => {
    let positive = `MuiListItemText-primary-301">PositiveTest</span>`;
    let otherTest = `MuiListItemText-primary-301">NegativePositiveTest</span>`;
    let stringEl = ReactDOMServer.renderToStaticMarkup(
      <TestCard {...defaultProps} />
    );
    expect(stringEl.includes(positive)).toEqual(true);
    expect(stringEl.includes(otherTest)).toEqual(true);
  });
});
