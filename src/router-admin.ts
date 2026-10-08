import express from 'express';
const routerAdmin = express.Router();
import restaurantConroller from './controllers/restaurant.controller';
import productController from './controllers/product.controller';


/* Restaurant */
routerAdmin.get('/', restaurantConroller.goHome);

routerAdmin
.get('/login', restaurantConroller.getLogin)
.post('/login', restaurantConroller.processLogin);

routerAdmin
.get('/signup', restaurantConroller.getSignup)
.post("/signup", restaurantConroller.processSignup);

routerAdmin.get('/logout', restaurantConroller.logout);
routerAdmin.get('/check-me', restaurantConroller.checkAuthSession);

/* Product */

routerAdmin.get('/product/all', 
    restaurantConroller.verifyRestaurant,
    productController.getAllProducts);

routerAdmin.post("/product/create", 
    restaurantConroller.verifyRestaurant,
    productController.createNewProduct);

routerAdmin.post("/product/:id", 
    restaurantConroller.verifyRestaurant,
    productController.updateChosenProduct);

/* User */
export default routerAdmin;