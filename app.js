import express from 'express';
import path from 'path';
import morgan from 'morgan';

import routerPages from './routes/indexRoutes.js';

// Initializations 
const app = express();
const __dirname = path.resolve();

// Settings 
app.set('port', process.env.PORT || 3000);

// View engine configuration
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Files Public
app.use(express.static(path.join(__dirname, 'public')));
app.use('/dashboard', express.static('public'));

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Routes
app.use('/', routerPages);

// Exports
export default app;