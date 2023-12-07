import mongoose, { mongo } from "mongoose";

mongoose.connect("mongodb+srv://rahul123:123@fullstackbatch1.g0vl8bj.mongodb.net/people" , {useNewURLParser : true});

const peopleSchema = new mongoose.Schema({
    name : String,
    age : Number,
    occupation : String
});

const Person = mongoose.model("Person" , peopleSchema);

const rahul = new Person ({
    name : "Rahul",
    age : 45,
    occupation : "IT Trainer"
});

const sneha = new Person ({
    name : "Sneha",
    age : 24,
    occupation : "Student"
});

const ankita = new Person ({
    name : "Ankita",
    age : 24,
    occupation : "Student"
});

const sanika = new Person ({
    name : "Sanika",
    age : 24,
    occupation : "Student"
});



// rahul.save();
// mongoose.disconnect();

// await Person.insertMany([rahul, ankita, sneha, sanika]);

// console.log("Data has been fed successfully.");
// mongoose.disconnect();

// FIND ALL THE DATA : 

let documents = await Person.find({occupation : "Student"});
console.log(documents);