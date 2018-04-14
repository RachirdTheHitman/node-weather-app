const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyA52jktbSAtMTc8QG_9mwMVOKvxp5D3t0M`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Google servers.');
      // console.log('Unable to connect to Google servers.');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address.');
      // console.log('Unable to find that address.');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      })
      // console.log(`Address: ${body.results[0].formatted_address}`);
      // console.log(`Latitude: ${body.results[0].geometry.location.lat}, Longtitude: ${body.results[0].geometry.location.lng}`);
    }
    // console.log(JSON.stringify(error, undefined, 2)); //using stringify to make console results readable, 2 indicates the indention of output format

  });
};

// dba71931fcfacc647dcd2379ce7acacd

module.exports = {
  geocodeAddress
};
