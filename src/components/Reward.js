import React from 'react'
import { PersonalizerClient } from '@azure/cognitiveservices-personalizer'
import { RewardRequest } from '@azure/cognitiveservices-personalizer/esm/models';
import { ApiKeyCredentials } from '@azure/ms-rest-js';
// import { RewardRequest } from '@azure/cognitiveservices-personalizer/esm/models/mappers';


const key = process.env.REACT_APP_apiKey;
const endpoint = process.env.REACT_APP_endPoint;

//features

export const Reward = async ( eventId ) => {

    const cognitiveServiceCredentials = new ApiKeyCredentials({
      inHeader: {
        "Ocp-Apim-Subscription-Key": key
      }
    });
    const personalizerClient = new PersonalizerClient(
      cognitiveServiceCredentials,
      endpoint
    );

    const analysis = await RewardRequest(eventId)
    .then((result) => {
        // localStorage.setItem('cade-result', JSON.stringify(result.rewardActionId));
        return result;
      })
      .catch((err) => {
        console.log("An error occurred:");
        console.error(err);
        alert(err);
      });

    return analysis;
}