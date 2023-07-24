export const getImageString = (field)=>{
    return (req,res,next)=>{
        if(!req.file && req.method != 'POST') return next()
        

        if(!req.file) return res.status(400).json({error: "Necesitas que '"+field+"' sea una imagen"})
        req.body[field] = req.file.path;
        next();
    }
}