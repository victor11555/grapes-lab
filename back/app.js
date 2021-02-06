const express = require('express');

const app = express();

const useMiddleware = require('./middleware/index');

const useErrorHandlers = require('./middleware/error-handlers');

const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const projectRouter = require('./routes/project');
const commentRouter = require('./routes/comments');
const pdfRouter = require('./routes/pdf');
const path = require('path');


useMiddleware(app);

app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/projects', projectRouter);
app.use('/comments', commentRouter);
app.use('/pdf', pdfRouter);

app.use(express.static(path.join(__dirname, '..', 'front', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'front', 'build', 'index.html'));
})

useErrorHandlers(app);

module.exports = app;
