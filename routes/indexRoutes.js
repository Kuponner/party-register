// Pages routes
import homeRouter from './pages/home.js';
import formRouter from './pages/form.js';
import registerRouter from './pages/register.js';
import successRouter from './pages/success.js';
import errorRouter from './pages/error.js';
import dashboardRouter from './pages/dashboard.js';
import rewardRouter from './pages/reward.js';

// Express routes for the pages that require
import express from 'express';
const routerPages = express.Router();

// Define routes for the pages
routerPages.use('/', homeRouter);
routerPages.use('/form', formRouter);
routerPages.use('/register', registerRouter);
routerPages.use('/success', successRouter);
routerPages.use('/error', errorRouter);
routerPages.use('/dashboard', dashboardRouter);
routerPages.use('/reward', rewardRouter);


export default routerPages;