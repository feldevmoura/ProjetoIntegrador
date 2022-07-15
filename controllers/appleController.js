const appleController = {
  apple: (req, res) => {
    res.render('apple')
  },
  produtoCorPreto: (req,res) => {
    res.render('produtoAppleCorPreto')
  }
}

module.exports = appleController;