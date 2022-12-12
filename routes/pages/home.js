import express from 'express';
const homeRouter = express.Router();


//View main home
homeRouter.get('/', async (req, res) => {
    res.render('index');    
});


export default homeRouter; 