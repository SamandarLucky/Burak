import {T} from "../libs/types/common";
import { Request, Response} from 'express';
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import { Message } from "../libs/Errors";


const memberService = new MemberService();

const restaurantConroller: T  = {};
restaurantConroller.goHome = (req: Request, res: Response) => {
    try {
    console.log('go Home');
    res.render("home");
    // send | json | redirect | end | render
    } catch(err) {
        console.log('Error, goHome:', err)
    }
};

restaurantConroller.getSignup = (req: Request, res: Response) => {
    try {
    console.log('getSignup');
    res.render("signup");
    } catch(err) {
        console.log('Error, getSignup:', err)
    }
};

restaurantConroller.getLogin = (req: Request, res: Response) => {
    try {
    console.log('getLogin');
    res.render("login");
    } catch(err) {
        console.log('Error, goLogin:', err)
    }
};


restaurantConroller.processSignup = async(req: AdminRequest, res: Response) => {
    try {
    console.log('processSignup');

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.processSignUp(newMember);
    // TODO: SESSIONS AUTHENTIFICATION

    req.session.member = result;
    req.session.save(function() {
    res.send(result);
    });
    } catch(err) {
        console.log('Error, processSignup:', err)
        res.send(err);
    }
};

restaurantConroller.processLogin = async (req: AdminRequest, res: Response) => {
    try {
    console.log('processLogin');
    
    const input: LoginInput = req.body,
        result = await memberService.processLogin(input);
        // TODO: SESSIONS AUTHENTIFICATION

    req.session.member = result;
    req.session.save(function() {
    res.send(result);
    })}
    catch(err) {
        console.log('Error, processLogin:', err)
    res.send(err);
    }
};


restaurantConroller.checkAuthSession = async (req: AdminRequest, res: Response) => {
    try {
    console.log('checkAuthSession');
    if(req.session?.member) res.send(`<script> alert("${req.session.member.memberNick}") </script>`);
    else res.send(`<script> alert("${Message.NOT_AUTHENTICATRD}") </script>`);
    }
    catch(err) {
        console.log('Error, checkAuthSession:', err)
    res.send(err);
    }
};



export default restaurantConroller;