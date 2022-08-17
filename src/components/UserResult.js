import React from 'react'
import { featuresJSON } from './features-json'

export const UserResult = (data) => {

  const username = data.username;
  const gender = data.gender;

  const personality1 = data.personality1;
  const personality2 = data.personality2;
  const personality3 = data.personality3;
  const personality4 = data.personality4;
  const personality5 = data.personality5;
  const personality6 = data.personality6;
  const personality7 = data.personality7;

  const countCode = new Map();

  function count(section){
    section.forEach(option =>{
      if(!countCode.has(option)){
        countCode.set(option, 1);
      } else {
        countCode.set(option, (countCode.get(option)+1));
      }
    });
  }

  count(personality1);
  count(personality2);
  count(personality3);
  count(personality4);
  count(personality5);
  count(personality6);
  count(personality7);

  console.log(countCode);

  let sortedCount = new Map([...countCode.entries()].sort((a,b) => b[1] - a[1]));

  let userPersonality = sortedCount.keys().next().value;

  const results = data.scienceResult;
  console.log(results);

  let goodResults = {};

  for(let result in results){
    if(results[result] === 'A' || results[result] === 'B' || results[result] === 'C'){
      goodResults[result] = results[result];
    }
  }

  console.log(goodResults);

  let rankRequest = {
    // contextFeatures : [],
    // actions: []
  };

  

  rankRequest.contextFeatures = [{goodResults, gender, userPersonality}];
  // rankRequest.contextFeatures = goodResults;

  rankRequest.actions = featuresJSON.features;

  console.log(rankRequest);

  return rankRequest;
}

// export default UserResult