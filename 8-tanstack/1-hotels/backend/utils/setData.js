const fs = require('fs');

exports.setData = (data) => {
  fs.writeFileSync(`${__dirname}/../data.json`, JSON.stringify(data));
};
