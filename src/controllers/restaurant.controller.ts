import {T} from "../libs/types/common";
import { Request, Response} from 'express';
import MemberService from "../models/Member.service"


const restaurantConroller: T  = {};
restaurantConroller.goHome = (req: Request, res: Response) => {
    try {
    console.log('go Home');
    res.send('Home Page')
    // send | json | redirect | end | render
    } catch(err) {
        console.log('Error, goHome:', err)
    }
};

restaurantConroller.getLogin = (req: Request, res: Response) => {
    try {
    console.log('getLogin');
    res.send('Login Page')
    } catch(err) {
        console.log('Error, goLogin:', err)
    }
};

restaurantConroller.getSignup = (req: Request, res: Response) => {
    try {
    console.log('getSignup');
    res.send('Signup Page')
    } catch(err) {
        console.log('Error, getSignup:', err)
    }
};

restaurantConroller.processLogin = (req: Request, res: Response) => {
    try {
    console.log('processLogin');
    res.send("DONE");
    } catch(err) {
        console.log('Error, processLogin:', err)
    }
};

restaurantConroller.processSignup = (req: Request, res: Response) => {
    try {
    console.log('processSignup');
    res.send("DONE");
    } catch(err) {
        console.log('Error, processSignup:', err)
    }
};

export default restaurantConroller;