import { Request, Response } from "express";
import { authService } from "./auth.service";



const loginUserb = async (req : Request , res : Response) => {
    const result = await authService.loginUser(req.body);
    res.status(200).json({
        success: true,
        message: 'User is Logged in succesfully',
        data: result,
      });
}