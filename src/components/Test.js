import React from "react";

import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";

import "survey-core/defaultV2.css";
import { testJSON } from "./test-json"


StylesManager.applyTheme("defaultV2");

function Test() {
    localStorage.removeItem('cade-test');

    const test = new Model(testJSON);

    test.onComplete.add(
      function (sender) {
          console.log(sender.data);
          localStorage.setItem('cade-test', JSON.stringify(sender.data));
        });
        
    return (
    <Survey model={test} />
    );
}

export default Test;
