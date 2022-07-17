const motorolaController = {
  motorola: (req,res) => {
   res.render('motorola')
  },
  motorolaEdge30ProAzul: (req,res) => {
    res.render('motorolaEdge30ProAzul')
  },
  motorolaEdge30Azul: (req,res) => {
    res.render('motorolaEdge30Azul')
  },
  motorolaEdge20ProAzul: (req,res) => {
    res.render('motorolaEdge20ProAzul')
  }
};

module.exports = motorolaController;