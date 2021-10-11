const nodemailer = require('nodemailer');
const config = require('../config');

// Read more here:
// http://stackoverflow.com/questions/24098461/nodemailer-gmail-what-exactly-is-a-refresh-token-and-how-do-i-get-one
// http://masashi-k.blogspot.nl/2013/06/sending-mail-with-gmail-using-xoauth2.html


// {
//     "web": {
//         "client_id": "**REMOVED**",
//         "project_id": "my-thai-star-graphql",
//         "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//         "token_uri": "https://accounts.google.com/o/oauth2/token",
//         "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//         "client_secret": "**REMOVED**"
//     }
// }
// https://developers.google.com/oauthplayground/?code=4/nMkCl03MF1-RbULCmF0aTeRfWo53k_eIvJVnJrmBu7o#


const productionTransportConfig = {
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    user: 'my.thai.star.devonfw@gmail.com',
    clientId: '**REMOVED**',
    clientSecret: '**REMOVED**',
    refreshToken: ' ',
    accessToken: ' ',
  },
};

// Watch out, might not work when in VPN!
const devTransportConfig = {
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    // Please setup and use your *own* account on mailtrap (or any similar provider)
    user: 'f7756655f55537',
    pass: '041276092ccf4b',
  },
};


const transporter = nodemailer.createTransport(config.prodMode ? productionTransportConfig : devTransportConfig);
console.log('SMTP Configured');


transporter.on('token', (token) => {
  console.log('A new access token was generated');
  console.log('User: %s', token.user);
  console.log('Access Token: %s', token.accessToken);
  console.log('Expires: %s', new Date(token.expires));
});

module.exports = transporter;
