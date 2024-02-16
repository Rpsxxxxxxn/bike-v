import { NextFunction, Request, Response } from "express";

export default class Authenticate {
  public static async authenticateUser(req: Request, res: Response, next: NextFunction) {
    try {
      // const token = req.header("Authorization")?.replace("Bearer ", "");
      // if (!token) {
      //   throw new Error("Please authenticate");
      // }
      // const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // const user = await User.findOne({ _id: (decoded as any)._id, "tokens.token": token });
      // if (!user) {
      //   throw new Error("Please authenticate");
      // }
      // req.user = user;
      // req.token = token;
      next();
    } catch (e) {
      res.status(401).send({ error: "Please authenticate" });
    }
  }
}