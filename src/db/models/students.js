const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        minLength:3
    },
    email:{
        type:String,
        required:true, 
        unique:[true," Email id is already ppresent please Retry!"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email!")
                }
            }
        },
    phone:{
        type:Number, 
        required:true,
        unique:[true," Number is already ppresent please Retry!"]
        },
    address:{
        type:String,
        required:true
    }  
})

const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;