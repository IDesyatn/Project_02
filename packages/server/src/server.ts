import path from 'path';
import bodyParser from 'body-parser';
import { Methods } from './Methods';
import { App } from './App';

const app = new App();
// fill up middlewares
app.setMiddleware(bodyParser);

// set static folder
app.setStatic(path.resolve(process.env.cwd, '/packages/web/dist'));

// fill up route handlers
// auth routes
app.setRoute(Methods.GET, '/', (req, res) => {
  res.sendFile(path.resolve(path.resolve(), 'static', './login.html'));
  res.status(200);
});

// {
//   login: login*,
//   password: password*
// }
//
// =>
//
// {
//   id: id*
//   authentication: true/false
// }

app.setRoute(Methods.GET, '/auth', (req, res) => {
  // select request to users table
});

// registration routes
app.setRoute(Methods.GET, '/registration', (req, res) => {
  res.sendFile(path.resolve(path.resolve(), 'static', './registration.html'));
  res.status(200);
});

// {
//   login: login*,
//   password: password*
// }
//
// =>
//
// {
//   registration: true/false
//   id: id*
// }

app.setRoute(Methods.POST, '/registration', (req, res) => {
  // select request to users table
});

// {
//   login: login*,
//   password: password*
//   id: id*
//
// }
//
// =>
//
// {
//   update: true/false
//   id: id*
// }

app.setRoute(Methods.PUT, '/registration', (req, res) => {
  // select request to users table
});

// main routes
app.setRoute(Methods.GET, '/main', (req, res) => {
  res.sendFile(path.resolve(path.resolve(), 'static', './main.html'));
  res.status(200);
});

// {
//   database: mySQL/mongoDB,
//   firstName: firstName/null,
//   lastName: lastName/null,
//   sortField: fieldName/null
// }
//
// =>
//
// {
//   data: [{row}]
// }

app.setRoute(Methods.GET, '/main', (req, res) => {
  // select request to users table
});

// {
//   database: mySQL/mongoDB,
//   fname: fname*,
//   lname: lname*,
//   age: age*,
//   city: city*,
//   phoneNumber: phoneNumber*,
//   email: email*,
//   companyName: companyName*,
// }
//
// =>
//
// {
//   data: [{row}]
// }

app.setRoute(Methods.POST, '/main', (req, res) => {
  // select request to users table
});

// {
//   database: mySQL/mongoDB,
//   fname: fname*,
//   lname: lname*,
//   age: age*,
//   city: city*,
//   phoneNumber: phoneNumber*,
//   email: email*,
//   companyName: companyName*,
//   id: id*,
// }
//
// =>
//
// {
//   data: [{row}]
// }

app.setRoute(Methods.PUT, '/main', (req, res) => {
  // select request to users table
});

// {
//   database: mySQL/mongoDB,
//   id: id*,
// }
//
// =>
//
// {
//   data: [{row}]
// }

app.setRoute(Methods.DELETE, '/main', (req, res) => {
  // select request to users table
});

// {
//   database: mySQL/mongoDB,
// }
//
// =>
//
// {
//   data: [{row}]
// }

app.setRoute(Methods.DELETE, '/main/truncate', (req, res) => {
  // select request to users table
});
