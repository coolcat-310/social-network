const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Sd029 = require('../../models/Sd029');
const sd029AllowedUpdates = require('../scripts/contants');


//@route    POST api/sd029
//@desc     Create a sd029 object
//@access   Private
router.post('/', auth, async (req, res)=>{
   const sd029 = new Sd029({...req.body});
   try{
       await sd029.save();
       res.status(201).json(sd029)
   }catch ({message}) {
       console.error(message);
       res.status(500).json({ error: message})
   }
});

//@route    GET api/sd029
//@desc     Get All sd029
//@access   Private
router.get('/', auth, async (req, res) =>{
    const sort = {};
    let skip = 0;

    if(req.query.skip){
        skip = parseInt(req.query.skip);
    }
    if(req.query.sortBy){
        const part = req.query.sortBy.split(':');
        sort[part[0]] = par[1] === 'desc' ? 'desc' : 'asc';
    }

    const limit = 10;
   try{
       const sd029 = await Sd029.find().sort().skip(skip).limit(limit);
       if(!sd029){
           return res.status(404).send();
       }

       res.send(sd029);
   } catch (e) {
       res.status(500).send();
   }
});

//@route GET api/sd029/count
//@desc GET sd029 count
//@access Private
router.get('/count', auth, async (req, res)=>{

    try{
        const count = await Sd029.countDocuments();

        res.status(200).json({count});
    }catch (e) {
        res.status(500).send();
    }
});

//@route    GET api/sd029/:id
//@desc     GET SD029 by id
//@access   Private
router.get('/:id', auth, async (req, res)=>{
   try{
       //Get SD029 by id
       const sd029 = await Sd029.findById(req.params.id);
       if(!sd029){
           return res.status(404).json({ msg: "SD09 not found"})
       }
       res.json(sd029);
   } catch ({message}) {
       console.error(message);
       res.status(500).json({ msg: message});
   }
});

//@route    DELETE api/sd029/:id
//@desc     DELETE SD029 by id
//@access   Private
router.delete('/:id', auth, async (req, res) =>{
    const _id = req.params.id;
    try{
        const sd029 = await Sd029.findOneAndDelete({ _id });
        if(!sd029){
            return res.status(404).json({ msg: "SD09 not found"})
        }
        res.json({ msg: 'SD09 removed'});
    }catch(e){
        res.status(500).send();
    }
});

//@route    PATCH api/sd029/:id
//@desc     update SD029
//@access   Private
router.patch('/:id', auth, async (req, res) =>{
   try{
       const updates = Object.keys(req.body);
       const allowedUpdates = sd029AllowedUpdates;

       const isValidOperation = updates.every(update => allowedUpdates.includes(update));

       if(!isValidOperation){
           return res.status(400).send({ error: 'Invalid updates!'});
       }

       const _id = req.params.id;
       const sd029 = await Sd029.findOne({ _id });
       if(!sd029){
           return res.status(404).json({ msg: "SD029 not found"});
       }

       updates.forEach(update => sd029[update] = req.body[update]);
       await sd029.save();
       res.json(sd029);

   } catch ({message}) {
       console.log(message);
       res.status(500).json({msg: message});
   }
});

module.exports = router;

