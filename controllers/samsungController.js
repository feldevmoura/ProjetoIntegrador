const samsungController = {
  samsung: (req, res) => {
    return res.render('samsung')
  },
  s22UltraVinho: (req, res) => {
    return res.render('s22UltraVinho')
  },
  s22UltraAzul: (req, res) => {
    return res.render('s22UltraAzul')
  },
  s22UltraPreto: (req, res) => {
    return res.render('s22UltraPreto')
  },
  s22UltraBranco: (req, res) => {
    return res.render('s22UltraBranco')
  },
  s22PlusPreto: (req, res) => {
    res.render('s22PlusPreto')
  },
  s22Preto: (req,res) => {
    res.render('s22Preto')
  }
}

module.exports = samsungController;