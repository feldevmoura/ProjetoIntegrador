const appleController = {
  apple: (req, res) => {
    res.render('apple')
  },
  iphone13MiniPreto: (req,res) => {
    res.render('iphone13MiniPreto')
  },
  iphone13MiniBranco: (req,res) => {
    res.render('iphone13MiniBranco')
  },
  iphone13MiniRosa: (req,res) => {
    res.render('iphone13MiniRosa')
  },
  iphone13MiniAzul: (req,res) => {
    res.render('iphone13MiniAzul')
  }
}

module.exports = appleController;