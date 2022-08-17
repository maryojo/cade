import { PersonalizerClient } from '@azure/cognitiveservices-personalizer'
import { ApiKeyCredentials } from '@azure/ms-rest-js';
import ResultLayout from './ResultLayout';

const key = process.env.REACT_APP_apiKey;
const endpoint = process.env.REACT_APP_endPoint;

//features

export const Personalizer = async ( list ) => {

    const cognitiveServiceCredentials = new ApiKeyCredentials({
      inHeader: {
        "Ocp-Apim-Subscription-Key": key
      }
    });
    const personalizerClient = new PersonalizerClient(
      cognitiveServiceCredentials,
      endpoint
    );

    const analysis = await personalizerClient.rank(list)
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
