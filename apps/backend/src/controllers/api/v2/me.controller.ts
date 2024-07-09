import { Request, Response, NextFunction } from "express";

import { User } from "../../../models/user.model.js";

export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const contextUser = new User();
    contextUser.setId(req.body.jwt.sub);

    await contextUser.fetchUserById(contextUser.getId());

    res.status(200).json(JSON.parse(contextUser.getObject()));
  } catch (e) {
    next(e);
  }
};
