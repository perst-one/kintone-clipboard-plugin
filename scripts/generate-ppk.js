const process = require('process');
const fs = require('fs');
const NodeRsa = require('node-rsa');

const keyFileName = 'private.ppk';
const keyEnvName = 'KINTONE_PRIVATE_PPK';

if (fs.existsSync(keyFileName)) {
  process.exitCode = 1;

  console.log(`already exists: ${keyFileName}`);
} else if (process.env[keyEnvName]) {
  const key = new NodeRsa(process.env[keyEnvName]);
  fs.writeFileSync(keyFileName, key.exportKey('pkcs1-private-pem'));

  console.log(`restore from environments: ${keyFileName}`);
} else {
  const key = new NodeRsa({b: 1024});
  fs.writeFileSync(keyFileName, key.exportKey('pkcs1-private-pem'));

  console.log(`generated: ${keyFileName}`);
}
