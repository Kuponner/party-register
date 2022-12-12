import express from 'express';
const errorRouter = express.Router();


//View main succes
errorRouter.get('/', async (req, res) => {
    res.render('./pages/error');    
});


export default errorRouter; 