// PlayArrowWithSpinner.test.js

import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import PlayArrowWithSpinner from "./PlayArrowWithSpinner";

describe("play arrow with spinner", () => {
  let defaultProps = {
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
    success: true
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
    expect(PlayArrowWithSpinner).not.toBeUndefined();
    let stringEl = ReactDOMServer.renderToStaticMarkup(
      <PlayArrowWithSpinner {...defaultProps} />
    );
    expect(stringEl).not.toBeUndefined();
  });
  it("renders check Icon on success", () => {
    defaultProps.success = true;
    let success = defaultProps.classes.buttonSuccess;
    let stringEl = ReactDOMServer.renderToStaticMarkup(
      <PlayArrowWithSpinner {...defaultProps} />
    );
    expect(stringEl.includes(success)).toEqual(true);
  });
  it("renders play arrow when success is undefined", () => {
    defaultProps.success = undefined;
    let loading = defaultProps.classes.buttonLoading;
    let stringEl = ReactDOMServer.renderToStaticMarkup(
      <PlayArrowWithSpinner {...defaultProps} />
    );
    expect(stringEl.includes(loading)).toEqual(true);
  });
  it("renders Error when success is false", () => {
    defaultProps.success = false;
    let error = defaultProps.classes.buttonFailure;
    let stringEl = ReactDOMServer.renderToStaticMarkup(
      <PlayArrowWithSpinner {...defaultProps} />
    );
    expect(stringEl.includes(error)).toEqual(true);
  });
});
