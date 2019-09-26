const rp = require('request-promise');

rp.post('http://localhost:7777/upload', null, {
  resolveWithFullResponse: true,
  json: true,
  formData: {
    grant_type: 'mac_address',
    mac_address: '0024E4825924',
    mac_token: '03700546704956',
    client_id: 'xxx',
    client_secret: 'xxx',
    scope_oauth2: 'device.metrics'
  }
}).then((response) => {
  console.log(response);
  console.log(`Succeed`);
  console.log(`Received status code : ${response.statusCode}`);
})
.catch((e) => {
  console.log(e);
  console.log(`Failed`);
  console.log(`Received status code : ${e.statusCode}`);
});
