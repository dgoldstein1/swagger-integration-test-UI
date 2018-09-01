// utils.js

/**
 * @param {swagger} swagger json file
 * @return {array of json in form}

   classes: PropTypes.object.isRequired,
   path : PropTypes.string.isRequired, // e.g. "/examples/services/hello"
   pathType : PropTypes.string.isRequired, // e.g. "get"
   data : PropTypes.object.isRequired
 * 
 **/
let swaggerToTestCardArray = swagger => {
  let toReturn = [];
  for (let path in swagger.paths) {
    for (let pathType in swagger.paths[path]) {
      toReturn.push({
        path,
        pathType,
        data: swagger.paths[path][pathType]
      });
    }
  }
  return toReturn;
};

/**
 * @param {json} {key : {data : 1}, key2 : {data : 2}}
 * return {array} [{data : 1}, {data : 2}]
 **/
let JSONtoArray = json => {
  let toReturn = [];
  for (let i in json) {
    toReturn.push(json[i]);
  }
  return toReturn;
};

export { swaggerToTestCardArray, JSONtoArray };
