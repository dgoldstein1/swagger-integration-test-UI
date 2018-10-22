// utils.test.js

import * as utils from "./utils";

describe("utils", () => {
  describe("getHeaderClass", () => {
    it("shows red if some tests have failed", () => {
      let classes = {
        appBarSuccess: "App-appBarSuccess-1",
        appBarFailure: "App-appBarFailure-2",
        appBarLoading: "App-appBarLoading-3",
        icon: "App-icon-4",
        heroUnit: "App-heroUnit-5",
        heroContent: "App-heroContent-6",
        heroButtons: "App-heroButtons-7",
        layout: "App-layout-8",
        cardGrid: "App-cardGrid-9",
        card: "App-card-10",
        cardMedia: "App-cardMedia-11",
        cardContent: "App-cardContent-12",
        footer: "App-footer-13",
        statusAvatarloading: "App-statusAvatarloading-14",
        statusAvatarfailure: "App-statusAvatarfailure-15",
        statusAvatarsuccess: "App-statusAvatarsuccess-16",
        progress: "App-progress-17",
        root: "App-root-18",
        wrapper: "App-wrapper-19",
        buttonSuccess: "App-buttonSuccess-20",
        buttonLoading: "App-buttonLoading-21",
        buttonFailure: "App-buttonFailure-22",
        buttonFailureMain: "App-buttonFailureMain-23",
        buttonSuccessMain: "App-buttonSuccessMain-24",
        fabProgress: "App-fabProgress-25",
        buttonProgress: "App-buttonProgress-26"
      };
      let tests = {
        "get/example": {
          getExamplePositiveTest: {
            name: "PositiveTest",
            ID: "getExamplePositiveTest",
            success: false
          }
        }
      };
      expect(utils.getHeaderClass(classes, tests)).toEqual(
        classes.appBarFailure
      );
    });
  });
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
                  schema: {
                    $ref: "#/definitions/protobufHelloResponse"
                  }
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
          {
            name: "hello_text",
            in: "query",
            required: false,
            type: "string"
          }
        ],
        tags: ["Exemplar"]
      });
    });
  });
  describe("json to array", () => {
    it("converts json to array", () => {
      let data = {
        "get/examples/services/hello": {
          randomId1: {
            name: "returns 200 response",
            test: "randomId1"
          }
        }
      };
      expect(utils.JSONtoArray(data)).toEqual([
        {
          randomId1: {
            name: "returns 200 response",
            test: "randomId1"
          }
        }
      ]);
    });
  });
});
