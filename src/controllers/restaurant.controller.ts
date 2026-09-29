import {T} from "../libs/types/common";
import { Request, Response} from 'express';
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const memberService = new MemberService();

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

restaurantConroller.processSignup = async(req: Request, res: Response) => {
    try {
    console.log('processSignup');

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.processSignUp(newMember);
    // TODO: SESSIONS AUTHENTIFICATION
    res.send(result);
    } catch(err) {
        console.log('Error, processSignup:', err)
        res.send(err);
    }
};

restaurantConroller.processLogin = async (req: Request, res: Response) => {
    try {
    console.log('processLogin');
    
    const input: LoginInput = req.body,
        result = await memberService.processLogin(input);
        // TODO: SESSIONS AUTHENTIFICATION
    res.send(result);
    } catch(err) {
        console.log('Error, processLogin:', err)
    res.send(err);
    }
};



export default restaurantConroller;