const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');
const { budgetAllowedUpdates } = require('../scripts/contants');
const Budget = require('../../models/Budget');

//@route    POST api/budgets
//@desc     Create a Budget
//@access   Private
router.post('/',[
    auth,
    check('budget_type', 'budget_type is required').not().isEmpty(),
    check('site', 'site is required').not().isEmpty(),
    check('date', 'date is required').not().isEmpty()
], async (req, res) => {
    //check for errors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()})
    }
    try{
        const budget = new Budget({
            ...req.body
        });
        await budget.save();
        res.status(201).json(budget);
    }catch ({message}) {
        console.error(message);
        res.status(500).json({ errors: message});
    }
});

//@route    GET api/budgets
//@desc     GET Budget object
//@access   Private
router.get('/', auth, async (req, res) =>{
    try{
        const budgets = await Budget.find().sort('date');
        if(!budgets){
            return res.status(404).json({errors: errors.array()})
        }
        res.json(budgets);
    }catch ({message}) {
        console.error(message);
        res.status(500).json({errors: message})
    }
});

//@route    GET api/budgets/:id
//@desc     GET Budget object by ID
//@access   Private
router.get('/:id', auth, async (req, res) =>{
    try{
        const _id = req.params.id;
        const budget = await Budget.findById( _id );
        if(!budget){
            return res.status(404).json({msg: "Budget not found"})
        }
        res.json(budget);
    }catch ({message}) {
        console.error(message);
        res.status(500).json({errors: message})
    }
});

//@route    DELETE api/budgets/:id
//@desc     DELETE Budget object by ID
//@access   Private
router.delete('/:id', auth, async (req, res) =>{
    try{
        const _id = req.params.id;
        const budget = await Budget.findByIdAndDelete( { _id });
        if(!budget){
            return res.status(404).json({msg: "Budget not found"})
        }
        res.json({msg: 'Budget removed'});
    }catch ({message}) {
        console.error(message);
        res.status(500).json({errors: message})
    }
});

//@route    PATCH api/budgets/:id
//@desc     PATCH Budget object by ID
//@access   Private
router.patch('/:id', auth, async (req, res) =>{
    try{
        const _id = req.params.id;
        const updates = Object.keys(req.body);
        const allowedUpdates = budgetAllowedUpdates;
        const isValidOperation = updates.every(update => allowedUpdates.includes(update));

        if(!isValidOperation){
            return res.status(400).json({ msg: 'Invalid updates!'});
        }
        const budget = await Budget.findOne({ _id });
        if(!budget){
            return res.status(404).json({msg: "Budget not found"});
        }
        updates.forEach(update => budget[update] = req.body[update]);
        await budget.save();
        res.json(budget);
    }catch ({message}) {
        console.error(message);
        res.status(500).json({errors: message})
    }
});


module.exports = router;