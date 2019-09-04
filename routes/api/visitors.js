const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');
const Visitor = require('../../models/Visitor');


//@route    GET api/visitors
//@desc     Get All visitors
//@access   Private
router.get('/', auth, async (req, res)=>{
    try {
        const visitor = await Visitor.find({});
        if (!visitor) {
            return res.status(404).send();
        }
        res.send(visitor)
    }catch(error){
        res.status(500).send();
    }
});

//@route    POST api/visitors
//@desc     Create a visitor
//@access   Private
router.post('/', [
    auth,
    check('name', 'name is required').not().isEmpty(),
    check('type', 'type is required').not().isEmpty(),
    check('customer_program', 'customer_program is required').not().isEmpty(),
    check('attendees', 'attendees is required').not().isEmpty(),
    check('meeting_location', 'meeting_location is required').not().isEmpty(),
    check('start_date', 'start_date is required').not().isEmpty(),
    check('end_date', 'end_date is required').not().isEmpty(),
    check('purpose', 'purpose is required').not().isEmpty()
    ],
    async (req, res)=>{
    //Check for errors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    try{
        const visitor = new Visitor({
            ...req.body,
        });

        await visitor.save();
        res.status(201).json(visitor);
    } catch(error){
        console.error(error.message);
        res.status(500).json({ errors: error.message});
    }
});

//@route    GET api/visitors/:id
//@desc     GET Visitor by id
//@access   Private
router.get('/:id', auth, async (req,res) =>{
   try{
       // Get Visitor by id
       const visitor = await Visitor.findById(req.params.id);
       if(!visitor){
           return res.status(404).json({ msg: 'Visitor not found'});
       }
       res.json(visitor);
   } catch (error) {
       console.error(error.message);
       res.status(500).json({ msg: error.message });
   }
});

//@route    DELETE api/visitor/:id
//@desc     DELETE Visitor by id
//@access   Private
router.delete('/:id', auth, async (req, res) =>{
    const _id = req.params.id;

    if(!_id){
        return res.status(400).json({ msg: 'Invalid delete. Must provide ID'});
    }
    try{
        // Get Vi
        const visitor = await Visitor.findOneAndDelete({ _id });
        if(!visitor){
            return res.status(404).json({msg: 'Visitor not found'})
        }
        res.json({ msg: 'Visitor removed' });
    }catch (e) {
        res.status(500).send();
    }
});


//@route    PATCH api/visitor/:id
//@desc     update Visitor
//@access   Private
router.patch('/:id', auth, async (req, res) =>{

    try{
        // Check the body to verify only authenticated key:value
        const updates = Object.keys(req.body);
        const allowedUpdates = ['name', 'type', 'customer_program', 'attendees', 'meeting_location', 'start_date',
                'end_date', 'purpose'];

        const isValidOperation = updates.every(update => allowedUpdates.includes(update));
        if(!isValidOperation){
            return res.status(400).send({error: 'Invalid updates!'});
        }

        // Check if ID is present
        const _id = req.params.id;
        if(!_id){
            return res.status(400).send({error: 'Invalid update. Must provide ID'})
        }

        // Check if Visitor is Present
        const visitor = await Visitor.findOne({ _id });
        if(!visitor){
            return res.status(404).json({msg: 'Visitor not found'})
        }
        updates.forEach(update => visitor[update] = req.body[update]);
        await visitor.save();
        res.json(visitor);
    }catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: error.message });
    }

});


module.exports = router;