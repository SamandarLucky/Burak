import express from 'express';
const routerAdmin = express.Router();
import restaurantConroller from './controllers/restaurant.controller';

routerAdmin.get('/', restaurantConroller.goHome);

routerAdmin.get('/login', restaurantConroller.getLogin);

routerAdmin.get('/signup', restaurantConroller.getSignup);


export default routerAdmin;