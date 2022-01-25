import http from 'http';
import express from 'express';
import logger from 'morgan'
import bodyParser from 'body-parser'

const hostname = '127.0.0.1';
const port = 5000;
const app = express() 
const server = http.createServer(app);

