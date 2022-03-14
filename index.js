const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
const connectDB =() =>{
    mongoose.connect("mongodb://localhost:27017/unit4-c2")
}

const User = new mongoose.Schema({
    firstName:{type:String,required:true},
    middleName:{type:String,required:false},
    lastName:{type:String,required:true},
    age:{type:Number,required:true},
    email:{type:String,required:true},
    gender:{type:String,required:false},
},
{timestamps:true}
    
);
const user = mongoose.model("user",User);
const BranchDetail = new mongoose.Schema({
    name:{type:String,required:true},
    address:{type:String,required:true},
    IFSC:{type:String,required:true},
    MICR:{type:Number,required:true}
},
{timestamps:true}

);
const branch = mongoose.model("BranchDetail",BranchDetail);

const MasterAccount = new mongoose.Schema({
    balance:{type:String,required:true},
},
{timestamps:true}
    
)

const master = mongoose.model("MasterAccount",MasterAccount)

const SavingsAccount = new mongoose.Schema({
    account_number:{type:String,required:true,unique:true},
    balance:{type:String,required:true},
    interestRate:{type:String,required:true}
},
{timestamps:true}

)
const saving = mongoose.model("SavingAccount",SavingsAccount);

const FixedAccount = new mongoose.Schema({
    account_number:{type:String,required:true,unique:true},
    balance:{type:String,required:true},
    interestRate:{type:String,required:true},
    startDate:{type:String,required:true},
    maturityDate:{type:String,required:true},
},
{timestamps:true}
);

const fixed = mongoose.model("FixedAccount",FixedAccount);

app.post("/user",async(req,res)=>{
    try{
        const user1 = await user.create(req.body);
        return res.send({"user":user1})
    }
    catch{
        return res.send("something went wrong");
    }
});

app.get("/user",async(req,res)=>{
    try{
        const user = await user.find().lean().exec()
        return res.send({"user":user})
    }
    catch{
        return res.send("something went wrong")
    }
});


app.post("/branch",async(req,res)=>{
    try{
        const user1 = await branch.create(req.body);
        return res.send({"user":user1})
    }
    catch{
        return res.send("something went wrong");
    }
});

app.get("/branch",async(req,res)=>{
    try{
        const user = await branch.find().lean().exec()
        return res.send({"user":user})
    }
    catch{
        return res.send("something went wrong")
    }
});


app.post("/master",async(req,res)=>{
    try{
        const user1 = await master.create(req.body);
        return res.send({"user":user1})
    }
    catch{
        return res.send("something went wrong");
    }
});

app.get("/master",async(req,res)=>{
    try{
        const user = await master.find().lean().exec()
        return res.send({"user":user1})
    }
    catch{
        return res.send("something went wrong")
    }
});

app.post("/saving",async(req,res)=>{
    try{
        const user1 = await saving.create(req.body);
        return res.send({"user":user1})
    }
    catch{
        return res.send("something went wrong");
    }
});

app.get("/saving",async(req,res)=>{
    try{
        const user = await saving.find().lean().exec()
        return res.send({"user":user})
    }
    catch{
        return res.send("something went wrong")
    }
});


app.post("/fixed",async(req,res)=>{
    try{
        const user1 = await fixed.create(req.body);
        return res.send({"user":user1})
    }
    catch{
        return res.send("something went wrong");
    }
});

app.get("/fixed",async(req,res)=>{
    try{
        const user = await fixed.find().lean().exec()
        return res.send({"user":user})
    }
    catch{
        return res.send("something went wrong")
    }
});


app.listen(5500,async()=>{
    try{
        await connectDB();
    }
    catch{
        console.log("something went wrong")
    }
    console.log("Listening on port 5500")
})

