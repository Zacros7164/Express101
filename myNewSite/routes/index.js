var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'My Lab Practice Site',
    students: [
      "JR",
      "Jimothy",
      "Zac",
      "Matt",
      "Brian",
      "Gregory",
      "Gbenga",
      "Ron",
      "Michael the Avenger",
      "Jason",
      "Katie",
      "Sean",
      "Christopher",
      "Khanh",
      "Brandon", 
      "Connor",
      "Cody",
      "Noelle",
      "Rob",
      "Ian",
      "Kyle",
      "Robert the Bunch"
    ]
  });
});

router.get('/reverse', function(req, res, next) {
  res.render('index-reverse', { 
    title: 'My Lab Practice Site Reversed!',
    students: [
      "JR",
      "Jimothy",
      "Zac",
      "Matt",
      "Brian",
      "Gregory",
      "Gbenga",
      "Ron",
      "Michael the Avenger",
      "Jason",
      "Katie",
      "Sean",
      "Christopher",
      "Khanh",
      "Brandon", 
      "Connor",
      "Cody",
      "Noelle",
      "Rob",
      "Ian",
      "Kyle",
      "Robert the Bunch"
    ]
  });
});

router.get('/movieApp', function(req,res,next){
  res.render('public')
})

module.exports = router;
