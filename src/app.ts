

import express from 'express';
import path from "path";
import router from "./router";
import routerAdmin from "./routerAdmin"
/* 1 - ENTRANCE */
const app = express();
console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

/* 2 - SESSIONS */



/* 3 -VIEWS */
app.set('view', path.join(__dirname, 'views'));
app.set('view engine', "ejs");



/* 4 - ROUTERS */
// BSSR: backenda fronted qurish EJS frameworkdan foydalanamiz
app.use('/admin', routerAdmin);

// SPA: REACT rest api server sifatida ishlatamiz
app.use('/', router);

export default app; // module exports 