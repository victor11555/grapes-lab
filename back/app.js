const express = require('express');

const app = express();

const useMiddleware = require('./middleware/index');

const useErrorHandlers = require('./middleware/error-handlers');

const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const projectRouter = require('./routes/project');


useMiddleware(app);

app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/projects', projectRouter);

useErrorHandlers(app);

module.exports = app;
