import DashJS from "../../../src";

const network = "testnet";
const sdkOpts = {
  network,
};
const sdk = new DashJS.SDK(sdkOpts);

const getContract = async function () {
  let platform = sdk.platform;
  await sdk.isReady();

  platform
      .contracts
      .get('2KfMcMxktKimJxAZUeZwYkFUsEcAZhDKEpQs8GMnpUse')
      .then((identity) => {
        console.log({identity});
      });

};
getContract();