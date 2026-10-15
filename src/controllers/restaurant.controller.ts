import {T} from "../libs/types/common";
import { NextFunction, Request, Response} from 'express';
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import { HttpCode, Message } from "../libs/Errors";
import Errors from "../libs/Errors";

const memberService = new MemberService();

const restaurantConroller: T  = {};
restaurantConroller.goHome = (req: Request, res: Response) => {
    try {
    console.log('go Home');
    res.render("home");
    // send | json | redirect | end | render
    } catch(err) {
        console.log('Error, goHome:', err);
        res.redirect("/admin");
    }
};

restaurantConroller.getSignup = (req: Request, res: Response) => {
    try {
    console.log('getSignup');
    res.render("signup");
    } catch(err) {
        console.log('Error, getSignup:', err);
        res.redirect("/admin");
    }
};

restaurantConroller.getLogin = (req: Request, res: Response) => {
    try {
    console.log('getLogin');
    res.render("login");
    } catch(err) {
        console.log('Error, goLogin:', err);
        res.redirect("/admin");
    }
};


restaurantConroller.processSignup = async(req: AdminRequest, res: Response) => {
    try {
    console.log('processSignup');
    console.log("req.body: ", req.body);

    const file = req.file;
    if(!file) throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG);

    const newMember: MemberInput = req.body;
    newMember.memberImage = file.path;
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.processSignUp(newMember);
    // TODO: SESSIONS AUTHENTIFICATION

    req.session.member = result;
    req.session.save(function() {
    res.redirect("/admin/product/all");
    });
    } catch(err) {
        console.log('Error, processSignup:', err)
        const message = 
        err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("${message}"); window.location.replace('/admin/signup') </script>`);
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
    res.redirect("/admin/product/all");
    })}
    catch(err) {
        console.log('Error, processLogin:', err);
        const message = 
        err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("${message}"); window.location.replace('/admin/login') </script>`);
    }
};

restaurantConroller.logout = async (req: AdminRequest, res: Response) => {
    try {
    console.log('logout');
    req.session.destroy(function(){
        res.redirect("/admin");
    });
    }
    catch(err) {
        console.log('Error, processLogin:', err)
    res.redirect("/admin");
    }
};

restaurantConroller.getUsers = async (req: Request, res: Response) => {
    try {
    console.log('getUsers');
    const result = await memberService.getUsers();
   

    res.render("users", {users: result});
    } catch(err) {
        console.log('Error, getUsers:', err);
        res.redirect("/admin/login");
    }
};


restaurantConroller.updateChosenUser = async (req: Request, res: Response) => {
    try {
    console.log('updateChosenUser');
    const result = await memberService.updateChosenUser(req.body);

    res.status(HttpCode.OK).json({data: result});
    } catch(err) {
        console.log('Error, updateChosenUser:', err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
        
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

restaurantConroller.verifyRestaurant = (req: AdminRequest, res: Response, next: NextFunction) => {
        if(req.session?.member?.memberType === MemberType.RESTAURANT) {
            req.member = req.session.member;
            next();
        } else {
            const message = Message.NOT_AUTHENTICATRD;
    res.send(`<script> alert("${Message.NOT_AUTHENTICATRD}"); window.location.replace('/admin/login'); </script>`);
        };
};




export default restaurantConroller;