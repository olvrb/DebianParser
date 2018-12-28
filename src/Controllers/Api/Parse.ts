import { Request, Response, NextFunction } from "express";
import { AptParser } from "../../Util/AptParser";

export async function ApiParse(
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (!req.body.str) {
        return res.status(422).end();
    }
    const stringToParse = req.body.str;
    const parsedString = AptParser.ParseString(stringToParse);
    return res.status(200).json({
        sample: parsedString
    });
}
