import { API_VERSION, API_ROUTES, HTTP_STATUS_CODE } from '../helpers';
import express, { NextFunction, Request, Response } from 'express';
import { urlencoded, json } from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';

const { PORT, NODE_ENV } = process.env;

const beeServer = () => {
  const app = express();
  app.disable('x-powered-by');
  app.enable('trust proxy');

  if (NODE_ENV === 'development') {
    app.use(morgan('combined'));
  } else {
    app.use(morgan('combined'));
  }

  app.use(
    cors(),
  );
  app.use(urlencoded({ extended: true }));
  app.use(json({ limit: '10kb' }));
  app.use(cookieParser());

  app.all('/', (req, res) => res.sendStatus(HTTP_STATUS_CODE.OK));

  // UnKnown Routes
  app.all('*', (req: Request, res: Response, next: NextFunction) => {
    const err = new Error(`Route ${req.originalUrl} not found`) as any;
    err.statusCode = HTTP_STATUS_CODE.NOT_FOUND;
    next(err);
  });

  // Global Error Handler
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    err.statusCode = err.statusCode || HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR;

    console.log(`[EXPRESS ERROR] ${err.statusCode} ${err}`);

    err.message = err.statusCode === HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR ? 'Some Server Error :)' : err.message;

    res.status(err.statusCode).json({
      message: err.message,
    });
  });

  return new Promise((resolve) => {
    app.listen(PORT, () => {
      console.log(`[EXPRESS]\t\tSuccessfully opened on port ${PORT}`);
      resolve(null);
    });
  });
};

export default beeServer;
