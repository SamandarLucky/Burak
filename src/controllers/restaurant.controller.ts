import {T} from "../libs/types/common";
import { Request, Response} from 'express';
import MemberService from "../models/Member.service"


const restaurantConroller: T  = {};
restaurantConroller.goHome = (req: Request, res: Response) => {
    try {
    res.send('Home Page')
    } catch(err) {
        console.log('Error, goHome:', err)
    }
};

restaurantConroller.getLogin = (req: Request, res: Response) => {
    try {
    res.send('Login Page')
    } catch(err) {
        console.log('Error, goLogin:', err)
    }
};

restaurantConroller.getSignup = (req: Request, res: Response) => {
    try {
    res.send('Signup Page')
    } catch(err) {
        console.log('Error, getSignup:', err)
    }
};

export default restaurantConroller;