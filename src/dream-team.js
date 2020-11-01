const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) {
    return false;  
  }

  let isUncorrect = true;
  let fLet = [];

  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) === "string"){
      fLet.push(members[i].trim().slice(0,1).toUpperCase());
      isUncorrect = false;
    }
  }

  let dreamTeamName = fLet.sort().join("");
  if (isUncorrect) {
    return false;
  }

  return dreamTeamName;
  // remove line with error and write your code here
};
