import { Application, RequestHandler, Request, Response } from 'express';
//import express from 'express'
import path from 'path';
const express = require("express");


class Server {
    private app: Application;
    private readonly PORT: number;

    constructor(app: Application, PORT: number){
        this.app = app;
        this.PORT = PORT || 3000 ;
    }

    public run() {
        this.app.listen(this.PORT, () => {
            console.log(`Server is running on port ${this.PORT}`);
        })
    }

    /*public loadMiddleware(middlewares: Array<RequestHandler>): void {
        middlewares.forEach(middleware => {
            this.app.use(middleware);
        });
    };*/

    public renderClient(): void {
        this.app.use(express.static('../../dist'));
        this.app.get('/', (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname, '../../dist/', 'index.html'));
        })
        this.app.get('/home', (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname, '../../dist/', 'index.html'));
        })
        this.app.get('/home', (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname, '../../dist/', 'index.html'));
        })
        
    }

}

const app = new Server(express(), 3003);
app.run();
app.renderClient();