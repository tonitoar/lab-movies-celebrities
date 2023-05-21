const Celebrity = require("../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here

router.get("/celebrities/create", (req, res, next) => {
    res.render("celebrities/new-celebrity")

})

router.post("/celebrities/create", (req, res, next) => {

    const {name, occupation, catchPhrase} = req.body;    

    const newCelebrity = new Celebrity({
        name,
        occupation,
        catchPhrase
      });

      newCelebrity.save()
    .then(result => {
        res.redirect("/celebrities");
    })
    .catch(err => res.render("celebrities/new-celebrity.hbs"))
    
})

router.get("/celebrities", (req, res, next)=>{
    Celebrity.find()
    .then((celebrities) => {
      res.render('celebrities/celebrities', { celebrities });
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/');
    });
});



module.exports = router;