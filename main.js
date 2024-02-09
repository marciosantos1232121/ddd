// Install the client using the following command:
// npm i nopecha

const { Configuration, NopeCHAApi } = require('nopecha');

const configuration = new Configuration({
    apiKey: 'sub_1OfpZmCRwBwvt6ptmfaCDf2U',
});
const nopecha = new NopeCHAApi(configuration);

(async () => {
    // Call the Token API
    const token = await nopecha.solveToken({
        type: 'recaptcha2',
        sitekey: '6LdB5zUUAAAAAHLihxglXSadsWwyqMg4iuvXbj5a',
        url: 'https://www.convergepay.com/hosted-payments/?ssl_txn_auth_token=ZBSwO4k2RMO0Oz9rPHTEJQAAAY1ak5lh#!/payment-form',
    });

    // Print the token
    console.log(token);
})();