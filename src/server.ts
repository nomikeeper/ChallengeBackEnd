// Importing components
import express from 'express';
import bodyParser from 'body-parser';
import Routes from "./routes";
import { createServer } from 'http';

const Port = 8000;
// Set the server basic configurations here
const app = express();

app.use(bodyParser.urlencoded({
    extended:true
}));
  
app.use(bodyParser.json());

// Set the routes
app.use(`/api`, Routes);

const httpServer = createServer(app);

app.listen(
    { port: Port },
    () => console.log(`\n🚀      Server is now running on http://localhost:8000/`)
);