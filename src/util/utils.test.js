// utils.test.js

import * as utils from "./utils";

describe("utils", () => {
  describe("swaggerToTestCardArray", () => {
    it("converts a swagger file to valid array", () => {
      let swagger = {
        swagger: "2.0",
        info: { title: "exemplar.proto", version: "version not set" },
        schemes: ["http", "https"],
        consumes: ["application/json"],
        produces: ["application/json"],
        paths: {
          "/examples/services/hello": {
            get: {
              summary:
                "HelloProxy says 'hello' in a form that is handled by the gateway proxy.",
              operationId: "HelloProxy",
              responses: {
                "200": {
                  description: "",
                  schema: { $ref: "#/definitions/protobufHelloResponse" }
                }
              },
              parameters: [
                {
                  name: "hello_text",
                  in: "query",
                  required: false,
                  type: "string"
                }
              ],
              tags: ["Exemplar"]
            }
          }
        },
        definitions: {
          protobufHelloResponse: {
            type: "object",
            properties: { text: { type: "string" } },
            description:
              "Defines the response type for the `HelloProxy` method."
          }
        }
      };
      let array = utils.swaggerToTestCardArray(swagger);
      expect(array.length).toEqual(1);
      expect(array[0].path).toEqual("/examples/services/hello");
      expect(array[0].pathType).toEqual("get");
      expect(array[0].data).toEqual({
        summary:
          "HelloProxy says 'hello' in a form that is handled by the gateway proxy.",
        operationId: "HelloProxy",
        responses: {
          "200": {
            description: "",
            schema: { $ref: "#/definitions/protobufHelloResponse" }
          }
        },
        parameters: [
          { name: "hello_text", in: "query", required: false, type: "string" }
        ],
        tags: ["Exemplar"]
      });
    });
  });
  describe("json to array", () => {
    it("converts json to array", () => {
      let data = {
        "get/examples/services/hello": {
          randomId1: { name: "returns 200 response", test: "randomId1" }
        }
      };
      expect(utils.JSONtoArray(data)).toEqual([
        { randomId1: { name: "returns 200 response", test: "randomId1" } }
      ]);
    });
  });
});
