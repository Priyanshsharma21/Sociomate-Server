import mongoose from 'mongoose';
import validator from 'validator';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    lowercase:true
  },
  bio:{
    type: String,
    lowercase:true
  },
  slink : {
    type : String,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    validate: [
      {
        validator: (value) => validator.matches(validator.blacklist(value, '\\D'), /^[0-9]{10}$/),
        message: 'Please enter a valid mobile number'
      }
    ]
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [
      {
        validator: validator.isEmail,
        message: 'Please enter a valid email address'
      }
    ]
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
    validate: [
      {
        validator: (value) => validator.matches(value, /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/),
        message:
          'Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
      }
    ]
  },
  connections: {
    type: [Schema.Types.ObjectId], 
    default: [],
  }
}, { timestamps: true });

const User = model('User', userSchema);

export default User
