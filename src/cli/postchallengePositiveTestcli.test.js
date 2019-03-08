/**
 * @jest-environment node
 */
const testEndpoint = require("../definitions/cliEndpoint");
const postchallengePositiveTest = require("../tests/postchallengePositiveTest");
var exec = require("child_process").exec;
const api = require("../api/api");

const MongoClient = require("mongodb").MongoClient;

let mockUser = {
    user: {
        first: "David",
        last: "Goldstein",
        email: "david@david.com"
    },
    auth: {
        dn: "postchallengetest@integration-tests.com",
        authpassword: "poiw83vliuaywelfiauwheflkajsdhdrvl938lwu3iohf",
        accesstoken: "",
        failedlogins: 0,
        authquestions: [
            {
                q: "what is your pet's name?",
                a: "penny"
            }
        ],
        knownips: ["172.42.64.6"]
    },
    logins: [
        {
            timestamp: 1541867160,
            location: {
                "ip": "172.42.64.6",
                "type": "ipv4",
                "countrycode": "US",
                "countryname": "United States",
                "regioncode": "VA",
                "regionname": "Virginia",
                "city": "Charlottesville",
                "zip": "22901",
                "latitude": 38.0936,
                "longitude": -78.5611
            }
        }
    ],
    passwords: "ewogIC"
};

let collection, client;
describe("post/challenge", () => {
    beforeEach(done => {
        // conect to mongodb
        const url = "mongodb://localhost:27017";
        client = new MongoClient(url);
        client.connect(function(err) {
            if (err) {
                console.error(err);
                done();
            }
            const db = client.db("passwords");
            collection = db.collection("passwords");
            // insert mock data into mongo
            collection.insertMany([mockUser], err => {
                if (err) console.error(err);
                done();
            });
        });
    });

    afterEach(done => {
        collection.deleteMany(
            { "auth.dn": mockUser.auth.dn },
            undefined,
            err => {
                if (err) console.error(err);
                client.close();
                done();
            }
        );
    });

    test("retrieve new challenge", done => {
        let endpoint =
            testEndpoint.default +
            postchallengePositiveTest.path +
            "?user=" +
            mockUser.auth.dn;
        let body = {
            location: {
                ...mockUser.logins[0].location,
                countryCode : mockUser.logins[0].location.countrycode,
            }
        };

        api.post(endpoint, body).then(({ error, success, data }) => {
            try {
                if (error) throw new Error(error.response.data.error);
                expect(success).toBe(true);
                expect(error).toBeFalsy();
                if (postchallengePositiveTest.expectedOutput !== undefined) {
                    expect(data).not.toBeUndefined()
                    expect(data.user).toEqual(mockUser.user)
                    
                }
                done();
            } catch (e) {
                done.fail(e);
            }
        });
    });
});
