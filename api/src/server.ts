import express, { Express, Request, Response } from 'express';

const server: Express = express();

server.get('/', (req: Request, res: Response) => {
  res.status(200).send("GET a barra nada");
});

module.exports = server;
