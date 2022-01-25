import http from 'http';
import express ,{ Request, Response, NextFunction} from 'express';
import logger from 'morgan'
import bodyParser from 'body-parser'
import { response } from 'express';

const express = require('express');
const hostname = '127.0.0.1';
const port = 5000;
const app = express() 
const server = http.createServer(app);


app.get('/', (req, res, next) => {
    res.status(200).json({
        message: "weather rangers"
    })
})

