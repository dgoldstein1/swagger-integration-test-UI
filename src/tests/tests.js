// tests.js

/**
 * a randomly generated test mapped to get/examples/services/hello
 * @param {json} hello request
 * @return {Promise.resolve} {success : true, data}
 **/
let randomId1 = () => {
  return Promise.resolve({
    success: Math.floor(Math.random() * 20) > 10
  });
};

let mapping = {
  "get/examples/services/hello": {
    randomId1: {
      name: "200 Response",
      test: randomId1,
      testId: "randomId1",
      success: undefined
    }
  }
};

export { mapping };
