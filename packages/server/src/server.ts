import path from 'path';
import bodyParser from 'body-parser';
import { Methods } from './enums/Methods';
import { App } from './models/App';
import { MySQL } from './controllers/MySQL';
import { MongoDB } from './controllers/MongoDB';

const app = new App();
const sql = new MySQL();
const mongo = new MongoDB();

app.setMiddleware(bodyParser);

app.setStatic(path.resolve(process.env.cwd, '/packages/web/dist'));

app.setRoute(Methods.GET, '/', (req, res) => {
  res.sendFile(path.resolve(path.resolve(), 'static', './login.html'));
  res.status(200);
});

app.setRoute(Methods.GET, '/auth', (req, res) => {
  // select request to users table
});

app.setRoute(Methods.GET, '/registration', (req, res) => {
  res.sendFile(path.resolve(path.resolve(), 'static', './registration.html'));
  res.status(200);
});

app.setRoute(Methods.POST, '/registration', (req, res) => {
  // select request to users table
});

app.setRoute(Methods.PUT, '/registration', (req, res) => {
  // select request to users table
});

app.setRoute(Methods.GET, '/main', (req, res) => {
  res.sendFile(path.resolve(path.resolve(), 'static', './main.html'));
  res.status(200);
});

app.setRoute(Methods.GET, '/main', (req, res) => {
  const config = req.body;
  if (config.database === 'mySql') {
    sql
      .read()
      .then((result) => {
        res.json(result).send(200).end();
      })
      .catch(() => {
        res.send(409).end();
      });
  } else {
    mongo
      .read()
      .then((result) => {
        res.json(result).send(200).end();
      })
      .catch(() => {
        res.send(409).end();
      });
  }
});

app.setRoute(Methods.POST, '/main', (req, res) => {
  const config = req.body;
  if (config.database === 'mySql') {
    sql
      .create(config)
      .then(() => {
        res.status(200).end();
      })
      .catch(() => {
        res.send(409).end();
      });
  } else {
    mongo
      .create(config)
      .then((result) => {
        res.json(result).send(200).end();
      })
      .catch(() => {
        res.send(409).end();
      });
  }
});

app.setRoute(Methods.PUT, '/main', (req, res) => {
  const config = req.body;
  if (config.database === 'mySql') {
    sql
      .update(config)
      .then(() => {
        res.status(200).end();
      })
      .catch(() => {
        res.send(409).end();
      });
  } else {
    mongo
      .update(config)
      .then((result) => {
        res.json(result).send(200).end();
      })
      .catch(() => {
        res.send(409).end();
      });
  }
});

app.setRoute(Methods.DELETE, '/main', (req, res) => {
  const config = req.body;
  if (config.database === 'mySql') {
    sql
      .delete(config)
      .then(() => {
        res.status(200).end();
      })
      .catch(() => {
        res.send(409).end();
      });
  } else {
    mongo
      .delete(config)
      .then((result) => {
        res.json(result).send(200).end();
      })
      .catch(() => {
        res.send(409).end();
      });
  }
});

app.setRoute(Methods.DELETE, '/main/truncate', (req, res) => {
  const config = req.body;
  if (config.database === 'mySql') {
    sql
      .clear()
      .then(() => {
        res.status(200).end();
      })
      .catch(() => {
        res.send(409).end();
      });
  } else {
    mongo
      .clear()
      .then((result) => {
        res.json(result).send(200).end();
      })
      .catch(() => {
        res.send(409).end();
      });
  }
});

app.run();
