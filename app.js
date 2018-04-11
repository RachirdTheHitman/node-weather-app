const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=300%20swanston%20street%20melbourne&key=AIzaSyA52jktbSAtMTc8QG_9mwMVOKvxp5D3t0M',
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2)); //using stringify to make console results readable
});
