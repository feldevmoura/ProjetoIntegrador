const samsungController = {
  samsung: (req, res) => {
    return res.render('samsung')
  },
  s20UltraVinho: (req, res) => {
    return res.render('s20UltraVinho')
  },
  s20UltraAzul: (req, res) => {
    return res.render('s20UltraAzul')
  }
}

module.exports = samsungController;