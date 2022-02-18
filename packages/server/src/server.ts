import express from 'express';
import path from 'path';
import cp from 'cookie-parser';
import bp from 'body-parser';
import { ApplicationView } from './views/Application.view';
import { RouterMiddleware } from './middlewares/Router.middleware';

const server = new ApplicationView();
const router = new RouterMiddleware();

server.setMiddleware(cp());
server.setMiddleware(bp.json());
server.setMiddleware(router.getRoutes());
server.setMiddleware(express.static(path.resolve(process.cwd(), '..', 'web', 'dist/')));
server.run();
