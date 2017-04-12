let pagesController = {
  home: (req, res) => {
    res.render('home')
  },

  about: (req, res) => {
    res.render('about')
  },

  faq: (req, res) => {
    res.render('about')
  }
}

module.exports = pagesController
