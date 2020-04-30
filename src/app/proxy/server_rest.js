var proxy = require('express-http-proxy');

const targetBaseUrl = 'http://localhost:8081/';

  const pro = proxy(targetBaseUrl);
export default pro