import  Jwt  from "jsonwebtoken";

const middleware = (req, res, next) => {
        var jwtValue = req.headers.authorization;
        if(!jwtValue){
            res.status(401).json();
            return;
        }
        try {
            var data = Jwt.verify(jwtValue, "codeUsers")
            next();
         } catch (e) {
            res.status(401).json();
        
    }

}

export {middleware}