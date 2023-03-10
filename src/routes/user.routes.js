const express = require("express");
const app = express.Router()

const ScoreModel = require("../schema/user.schema");



app.post("/adduser", async (req, res) => {

    const new_score = await  ScoreModel.create({
        ...req.body
    })
    await new_score.save()

    res.send({ new_score })
})

app.patch("/adduser", async (req, res) => {
    const {id} = req.params
    let { score} = req.body
 

    try {

     
      
            await ScoreModel.findByIdAndUpdate({ _id: id }, { companyName, position, contract, location })

            res.send({
                message: ' update Successfully',
                status: "ok"
            })
      
    } catch (error) {
       
        res.send({
            message: 'Something went wrong please try again',
            status: false
        })

    }
})


app.get("/", async (req, res) => {
    const data = await ScoreModel.find().limit(10)
    res.send(data)


})


app.get("/getrendom", async (req, res) => {


    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    function generateString(length) {
        let result = ' ';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;

    }


    let num = Math.floor(Math.random() * (10 - 7) + 7)

    let a = generateString(num)

    res.send({ "string": a.toLocaleLowerCase(), "msg": "Here is your random word" })


})



module.exports = app