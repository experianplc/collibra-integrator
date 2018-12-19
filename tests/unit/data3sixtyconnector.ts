import { Data3SixtyConnector } from "../../src/data3sixty-connector";
import intern from "intern";

const { expect, assert } = intern.getPlugin("chai");
const { registerSuite } = intern.getInterface("object");

registerSuite("Data3SixtyConnector tests", {

  tests: {
    "Data3SixtyConnector can be instantiated"() {
      let connector = new Data3SixtyConnector();
      assert.equal(Boolean(connector.apiKey), true, "API key exists");
      assert.equal(Boolean(connector.apiSecret), true, "API secret exists");
    },

    "Data3SixtyConnector can retreieve technology assets"() {
      let connector = new Data3SixtyConnector();

      connector.retrieveAssets().then((response) => {
        assert.equal(Boolean(response.data), true, "A response is present");
      });
    },

    "Data3SixtyConnector can post data quality results"() {
      assert.equal(false, true);
    }
  }

});
