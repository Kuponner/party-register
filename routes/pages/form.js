import express from 'express';
const formRouter = express.Router();


//View main form
formRouter.get('/', async (req, res) => {
    res.render('./pages/form');    
});


export default formRouter; 