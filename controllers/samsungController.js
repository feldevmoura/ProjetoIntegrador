const samsungController = {
  samsung: (req, res) => {
    return res.render('samsung')
  },
  s20UltraVinho: (req, res) => {
    return res.render('s20UltraVinho')
  },
  s20UltraAzul: (req, res) => {
    return res.render('s20UltraAzul')
  },
  s20UltraPreto: (req, res) => {
    return res.render('s20UltraPreto')
  },
  s20UltraBranco: (req, res) => {
    return res.render('s20UltraBranco')
  }
}

module.exports = samsungController;