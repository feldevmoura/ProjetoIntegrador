function auth(req,res,next){
  if(typeof(req.session.user) != "undefined"){
      return next();
  }else{
      return res.redirect('/entrar');
  }
};

module.exports = auth;