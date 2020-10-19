const { json } = require('express');
const express = require('express');

const router = express();

const Suggestion = require('../models/Suggestions')



router.get('/all-suggestions', (req, res) => {
    Suggestion.find()
    .then((suggestions) => res.status(200).json({confirmation: 'success', suggestions}))
})


router.post('/make-suggestion', (req, res) => {

        const newSuggestion = new Suggestion();

        newSuggestion.title = req.body.title;
        newSuggestion.name = req.body.name;
        newSuggestion.suggestion = req.body.suggestion;
        newSuggestion.likes = req.body.likes;
        newSuggestion.anonymous = req.body.anonymous;
        

        newSuggestion.save()
        .then((val) => res.status(200).json({confirmation: 'Success', val: val}))
        .catch((err) => `${err}` )

})






module.exports = router