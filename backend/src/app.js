const Logger = require('./libs/logger')

const bannerLogger = require('./libs/banner')

const expressLoader = require('./loaders/expressLoader')
const mongooseLoader = require('./loaders/mongooseLoader')
const passportLoader = require('./loaders/passportLoader')
const publicLoader = require('./loaders/publicLoader')
const winstonLoader = require('./loaders/winstonLoader')

/**
 * NODEJS API BOILERPLATE
 * ----------------------------------------
 *
 * This is a boilerplate for Node.js Application written in Vanilla Javascript.
 * The basic layer of this app is express. For further information visit
 * the 'README.md' file.
 */
const log = new Logger(__filename)

// Init loaders
async function initApp() {
    // logging
    winstonLoader()

    // Database
    await mongooseLoader()

    // express
    const app = expressLoader()

    // passport init
    passportLoader(app)

    // public Url
    publicLoader(app)
}

initApp()
    .then(() => bannerLogger(log))
    .catch((error) => log.error('Application is crashed: ' + error))
