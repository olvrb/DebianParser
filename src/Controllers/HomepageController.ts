import { Request, Response, NextFunction } from "express";
export async function homepageController(
    req: Request,
    res: Response,
    next: NextFunction
) {
    res.render("index", {
        requests: "requests"
    });
}
