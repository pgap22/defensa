export function toDateField(field){
    return (req,res,next) => {
        req.body[field] = new Date(req.body[field]);
        next();
    }
}