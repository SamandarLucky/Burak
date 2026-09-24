import express from 'express';
const routerAdmin = express.Router();
import restaurantConroller from './controllers/restaurant.controller';


/* Restaurant */
routerAdmin.get('/', restaurantConroller.goHome);

routerAdmin
.get('/login', restaurantConroller.getLogin)
.post('/login', restaurantConroller.processLogin);

routerAdmin
.get('/signup', restaurantConroller.getSignup)
.post("/signup", restaurantConroller.processSignup);

/* Product */


/* User */
export default routerAdmin;