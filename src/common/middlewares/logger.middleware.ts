import { Injectable, NestMiddleware } from "@nestjs/common";
import { 
    Request,
    Response,
    NextFunction 
} from "express";

@Injectable()   
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const autorization = req.headers.authorization;
        if (autorization) {
            if (autorization === '123456') {
                return next();
            }
            res.status(401).json({ message: 'Unauthorized' });
        }
        next();
    }
}