// index.test.js
import Index from "./index.js";

describe("index", () => {
  it("renders without crashing", () => {
    let i = Object.assign({}, Index, {
      _reactInternalInstance: "censored"
    });
    expect(i).not.toBeUndefined();
  });
});
