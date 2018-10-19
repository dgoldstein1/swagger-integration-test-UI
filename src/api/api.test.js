// api.test.js

// methods to test
import * as api from "./api";

// testing utils
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// mocks
let mockUrl = "/test/url";
var mock = new MockAdapter(axios);

/**
 * Tests for fetch.js
 **/

describe("api", () => {
  describe("get", () => {
    it("on success", () => {
      let mockResponse = {};
      mock.onGet(mockUrl).reply(200, mockResponse);
      return api.get(mockUrl).then(res => {
        expect(res.success).toEqual(true);
        expect(res.data).toEqual(mockResponse);
      });
    });
    it("on failure", () => {
      mock.onGet(mockUrl).reply(400, {});
      return api.get(mockUrl).then(res => {
        expect(res.success).toEqual(false);
        expect(res.error).not.toEqual(undefined);
      });
    });
  });
  describe("patch", () => {
    it("on success", () => {
      let mockResponse = {};
      mock.onPatch(mockUrl).reply(200, mockResponse);
      return api.patch(mockUrl).then(res => {
        expect(res.success).toEqual(true);
        expect(res.data).toEqual(mockResponse);
      });
    });
    it("on failure", () => {
      mock.onPatch(mockUrl).reply(400, {});
      return api.patch(mockUrl).then(res => {
        expect(res.success).toEqual(false);
        expect(res.error).not.toEqual(undefined);
      });
    });
  });
  describe("post", () => {
    it("on success", () => {
      let mockResponse = {};
      mock.onPost(mockUrl).reply(200, mockResponse);
      return api.post(mockUrl).then(res => {
        expect(res.success).toEqual(true);
        expect(res.data).toEqual(mockResponse);
      });
    });
    it("on failure", () => {
      mock.onPost(mockUrl).reply(400, {});
      return api.post(mockUrl).then(res => {
        expect(res.success).toEqual(false);
        expect(res.error).not.toEqual(undefined);
      });
    });
  });
  // for some reason axios.axos(method : delete) causes tests to fail
  describe("delete", () => {
    it("on success", () => {
      let mockResponse = {};
      mock.onDelete(mockUrl).reply(200, mockResponse);
      return api.del(mockUrl).then(res => {
        expect(res.success).toEqual(true);
        expect(res.data).toEqual(mockResponse);
      });
    });
    it("on failure", () => {
      mock.onDelete(mockUrl).reply(400, {});
      return api.del(mockUrl).then(res => {
        expect(res.success).toEqual(false);
        expect(res.error).not.toEqual(undefined);
      });
    });
  });
  describe("params to uri", () => {
    it("returns an empty string if no params are passed", () => {
      expect(api.paramsToUri()).toBe("");
    });
    it("returns page number and page size as correct uri", () => {
      let filters = { pageSize: 1, pageNumber: 0 };
      expect(api.paramsToUri(filters)).toBe("?pageSize=1&pageNumber=0");
    });
  });
});
