const router = require('express').Router();
let Guide = require('../models/guide.model');

router.route('/').get((req, res) => {
  Guide.find()
    .then(guides => res.json(guides))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const imgLink = req.body.imgLink;
  const firstText = req.body.firstText;
  const articleLink = req.body.articleLink;
  const secondText = req.body.secondText;
  const spanBody = req.body.spanBody;
  const mainBody = req.body.mainBody;

  const newGuide = new Guide({
    imgLink,
    firstText,
    articleLink,
    secondText,
    spanBody,
    mainBody
  });

  newGuide.save()
  .then(() => res.json('Guide Added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Guide.findById(req.params.id)
    .then(guide => res.json(guide))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Guide.findByIdAndDelete(req.params.id)
    .then(() => res.json('Guide Deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Guide.findById(req.params.id)
    .then(guide => {
      guide.imgLink = req.body.imgLink;
      guide.firstText = req.body.firstText;
      guide.articleLink = req.body.articleLink;
      guide.secondText = req.body.secondText;
      guide.spanBody = req.body.spanBody;
      guide.mainBody = req.body.mainBody;

      guide.save()
        .then(() => res.json('Guide Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;