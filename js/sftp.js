const SftpClient = require('ssh2-sftp-client');

async function loginToSFTP(username,password) {
    webPreferences: {
        nodeIntegration: true
    }

  const sftp = new SftpClient();
  
  const sftpConfig = {
    host: 'eu-central-1.sftpcloud.io',
    port: '22',
    username: username,
    password: password
    // You can also use other authentication methods like private key
    // privateKey: require('fs').readFileSync('/path/to/private/key')
  };

  try {
    await sftp.connect(sftpConfig);
    console.log('Successfully connected to SFTP server');
    await sftp.end();
    return true;
  } catch (err) {
    console.error('Error connecting to SFTP server:', err.message);
    return false;
  }
}
module.exports = { loginToSFTP };