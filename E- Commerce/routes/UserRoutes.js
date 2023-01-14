const router = require("express").Router()
const Users = require("../Models/User")

router.get("/Login",(req,res)=>{
    const users = Users.find();
    
    users.then((data, err) => {
        res.send(data);
    }).catch(err => {
        res.status(500).send(err)
    });
})



router.post("/Register",async (req,res)=>{
    console.log(req.body);
    const user = new Users(req.body);

    user.save().then(newUser => {
        res.send({message: 'User added successfully'})
    }).catch(err => {
        res.status(500).send(err)
        console.log(err);
    });
})
router.post('/SignIn', async (req, res) => {
    const { Email, password } = req.body;
    const user = await Users.findOne({ Email })

    if (!user) {
        return res.send({ message: "No user found!" });
    }

    const isAuthenticated = await user.comparePassword(password);

    if (!isAuthenticated) {
        return res.send({ message: "Invalid Password!" });
    }

    const token = await user.generateToken();
    res.header("x-auth", token);
    res.send(user)
})
module.exports = router 