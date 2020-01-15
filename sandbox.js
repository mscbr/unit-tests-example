const fetch = require('node-fetch');
const result = fetch(
  'http://apilayer.net/api/rate?access_key=62fa34be411777b74645bb5006a2d3fd&country_code=DE'
)
  .then(response => response.text())
  .tehn(data => data.standard_rate);
