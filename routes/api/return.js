const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Return = require('../../models/Return');

//@route    POST api/returns
//@desc     Create a Return
//@access   Private
router.post('/', auth, async (req, res)=>{
    try{
        const returnObj = new Return({
            ...req.body
        });
        await returnObj.save();
        res.status(201).json(returnObj);
    }catch ({message}) {
        console.error(message);
        res.status(500).json({errors: message});
    }
});

//@route    GET api/returns
//@desc     GET Return objects
//@access   Private
router.get('/', auth, async (req, res)=>{
   try{
       const returns = await Return.find();
       if(!returns){
           return res.status(404).json({ errors: errors.array()})
       }
       res.json(returns);
   } catch({message}) {
       console.error(message);
       res.status(500).json({errors: message});
   }
});

//@route    GET api/returns/:id
//@desc     GET Return object by ID
//@access   Private
router.get('/:id', auth, async (req, res) =>{
    try{
        const _id =  req.params.id;
        const returnObj = await Return.findById( _id );
        if(!returnObj){
            return res.status(404).json({ msg: 'Return not found'})
        }
        res.json(returnObj);
    }catch({message}) {
        console.error(message);
        res.status(500).json({errors: message});
    }
});

//@route    DELETE api/returns/:id
//@desc     DELETE Return object by ID
//@access   Private
router.delete('/:id', auth, async (req, res) =>{
   try{
       const _id = req.params.id;
       const returnObj = await Return.findByIdAndDelete({ _id });
       if(!returnObj){
           return res.status(404).json({ msg: 'Return not found'});
       }

       res.json({ msg: 'Return removed'});
   } catch({message}) {
       console.error(message);
       res.status(500).json({errors: message});
   }
});

module.exports = router;