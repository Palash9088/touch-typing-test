import * as amplitude from '@amplitude/analytics-browser';

const API_KEY ="102e52291f64a2ef195aca0a028cd2c1";
//If you only have one environment, just put the single API key

amplitude.init(API_KEY, null, {
// optional configuration options
    includeUtm: true,
    includeGclid: true,
    includeReferrer: true,
});


export { amplitude };