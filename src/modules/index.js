const AdminRouter = require('./admin/router.js')
const UserRouter = require('./users/router.js')
const ScienceRouter = require('./science/router.js')
const UniverRouter = require('./universty/router.js')
const FacultyRouter = require('./faculty/router.js')
const TestRouter = require('./tests/router.js')
const ResaltRouter = require('./resalt/router.js')

module.exports = [
    AdminRouter,
    UserRouter,
    ScienceRouter,
    UniverRouter,
    FacultyRouter,
    TestRouter,
    ResaltRouter
]