const express = require('express');
const listModel = require('../model/model')

const router = express.Router();

// save all the todo goals
router.post('/list', async (req, res)=>{
    try {
        const {title, description} = req.body;

        //check if the title is entered
        if(!title){
            return res.json({
                error: "Title is required"
            })
        }

        //check if the description is entered
        if(!description){
            return res.json({
                error: "Description is required"
            })
        }

        // Save data in database
       const data =  await listModel.create({
            title,
            description
         })

         res.json({
            Message: "data has been saved"
         })


    } catch (error) {
        console.log(error)

    }
})

//get all the todo goals
router.get('/list', async(req, res)=>{
    const goals = await listModel.find({})
    res.json(goals);
})

//delete a goal
router.delete('/list/:id', async (req, res) =>{

    const { id } = req.params

    const goal = await listModel.findOneAndDelete({_id: id})
    res.json(goal)
})

module.exports = router;