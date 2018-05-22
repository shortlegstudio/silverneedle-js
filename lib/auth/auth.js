const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
const models = require('../../models');

console.log(`Domain: ${process.env.AUTH0_DOMAIN}`)
console.log(`Audience: ${process.env.AUTH0_AUDIENCE}`)

const validateJwt = jwt({
    // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 25,
      jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
  
    // Validate the audience and the issuer.
    audience: process.env.AUTH0_AUDIENCE,
    issuer: `https://${process.env.AUTH0_DOMAIN}/`,
    aklgorithms: ['RS256']
  });

function setUserReference (req, res, next) {
    console.log("Handling User Reference");
    models.User.findOrCreate({
        where: {authid: req.user.sub}
    }).then(function (user, created) {
        req.userModel = user[0];
        next();
    });
}

const protectedRequest = [validateJwt, setUserReference];

module.exports = protectedRequest;