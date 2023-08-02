const express = require('express');
const dev = require('./config');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const port = dev.app.port;
const app = express();
const cors = require('cors');

app.use(cors());
//USERS ROUTER
const userRoute = require('./router/userRoute');

//PACKAGE USE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// USERS_AUTH; METHOD:-> POST:: "api/users/auth"
app.use('/api/users', userRoute);

//MIDDLEWARE HERE
app.use(notFound);
app.use(errorHandler);

app.get('/', (res, req) => {
  res.send('wellcome home!');
});

//SERVER RUNING CODE
app.listen(port, async () => {
  console.log(`server run http://localhost:${port}`);
  await connectDB();
});
