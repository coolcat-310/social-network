const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');
const Training = require('../../models/Training');

//@route    POST api/trainings
//@desc     Create a Training
//@access   Private
router.post('/', [
    auth,
    check('course_title', 'course_title is required').not().isEmpty(),
    check('training_type', 'training_type is required').not().isEmpty(),
    check('date', 'date is required').not().isEmpty()
], async (req, res) =>{
   //Check for errors
   const errors = validationResult(req);
   if(!errors.isEmpty()){
       return res.status(400).json({ errors: errors.array() })
   }
   try{
       const training = new Training({
           ...req.body
       });

       await training.save();
       res.status(201).json(training);
   }catch (error) {
       console.error(error.message);
       res.status(500).json({ errors: error.message});
   }
});

//@route    GET api/trainings
//@desc     GET training objects, sort asc by date
//@access   private
router.get('/', auth, async (req, res)=>{
    try{
        const training = await Training.find().sort('date');
        if(!training){
            return res.status(404).json({errors: errors.array()})
        }
        res.json(training);
    }catch (error) {
        console.error(error.message);
        res.status(500).json({ errors: error.message});
    }
});

//@route    GET api/trainings/:id
//@desc     GET Training by _id
//@access   private
router.get('/:id', auth, async (req, res)=>{
    const _id = req.params.id;
    
    try{
        const training = await Training.findById( _id );
        if(!training){
            return res.status(404).json({ msg: 'Training not found'})
        }
        res.json(training);
    }catch ({message}) {
        console.error(message);
        res.status(500).json({ errors: message})
    }
});

//@route    DELETE api/trainings/:id
//@desc     DELETE Training by _id
//@access   private
router.delete('/:id', auth, async (req, res) =>{
   const _id = req.params.id;
   try{
       const training = await Training.findByIdAndDelete({ _id });
       if(!training){
           return res.status(404).json({ msg: 'Training not found'});
       }
       
       res.json({msg: 'Training removed'});
   }catch ({message}) {
       console.error(message);
       res.status(500).json({ errors: message})
   }
});

//@route    PATCH api/trainings/:id
//@desc     PATCH Training by _id
//@access   private
router.patch('/:id', auth, async (req, res) =>{
    const _id = req.params.id;

    try {
        const updates = Object.keys( req.body );
        const allowedUpdates = ['course_title', 'training_type', 'date', 'instructor', 'number_of_session',
        'hours_per_class', 'employee_population'];

        const isValidOperation = updates.every(update => allowedUpdates.includes(update));

        if(!isValidOperation){
            return res.status(400).json({ msg: 'Invalid updates!'});
        }

        const training = await Training.findById(_id);
        if(!training){
            return res.status(404).json({ msg: 'Training not found'});
        }

        updates.forEach(update => training[update] = req.body[update]);
        await training.save();
        res.json(training);

    }catch ({message}) {
        console.error(message);
        res.status(500).json({ errors: message})
    }
});

module.exports = router;