import express from 'express';
import { conn } from "../../models/dbConnection.js";
const rewardRouter = express.Router();


//View main form
rewardRouter.get('/', async (req, res) => {
    try {
        const [user] = await conn.query('SELECT kp_Name, kp_LastName, kp_Sucursal FROM kp_Workers ORDER BY RAND () LIMIT 1');
        if (user) {
            res.render('./pages/reward', {
                user: user
            });
        }

    }
    catch (error) {
        console.log(error);
        console.log('Eror create user: ');
    }
});


export default rewardRouter; 