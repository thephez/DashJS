import DashJS from "../../../src";

const network = "testnet";
const sdkOpts = {
  network,
  mnemonic:"your mnemonic here"
};
const identityId = "your identity id";
const sdk = new DashJS.SDK(sdkOpts);

const registerName = async function () {
  let platform = sdk.platform;
  await sdk.isReady();

  platform
      .identities
      .get(identityId)
      .then(async (identity) => {
        const nameRegistration = await platform.names.register('alice', identity);
        console.log({nameRegistration});
      });

};
registerName();