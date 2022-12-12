import express from 'express';
import { conn } from "../../models/dbConnection.js";
const dashboardRouter = express.Router();


//View main form
dashboardRouter.get('/', async (req, res) => {
    try {
        const [data] = await conn.query('SELECT * FROM kp_Workers');

        if (data) {
            console.log(data);
            res.render('./pages/dashboard',{
                data: data
            });
        }

    }
    catch (error) {
        res.redirect('/error');
        console.log(error);
        console.log('Eror create user: ');
    }
});


export default dashboardRouter; 