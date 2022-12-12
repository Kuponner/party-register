import { conn } from "../../models/dbConnection.js";
import express from 'express';
const registerRouter = express.Router();

//Views render 
registerRouter.post('/', async (req, res) => {
    const { name, lastName, sucursal } = req.body;

    try {
            const [user] = await conn.query('INSERT INTO kp_Workers(kp_Name, kp_LastName, kp_Sucursal) VALUES (?, ?, ?)',
                [name, lastName, sucursal]);

            if (user) {
            console.log('successfully registered user');
            res.redirect('/success');
            }
        
    }
    catch (error) {
        res.redirect('/error');
        console.log(error);
        console.log('Eror create user: ');
    }
});

export default registerRouter; 