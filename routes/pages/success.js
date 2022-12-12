import express from 'express';
const successRouter = express.Router();


//View main succes
successRouter.get('/', async (req, res) => {
    res.render('./pages/success');    
});


export default successRouter; 