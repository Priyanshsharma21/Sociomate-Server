import mongoose from 'mongoose';

const {
  Schema,
  model
} = mongoose;

const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true,
    minlength: 1,
    // maxlength: 280
  },
  
  likes : [
    {
        user : {
            type : Schema.ObjectId,
            ref : 'User',
        }
    }
],

  photo: {
    id: {
      type: String,
    },
  secure_url: {
      type: String,
    }
  },
  comments: [{
    content: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 50
    },
  user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
  }],
  tags: {
    type: [String],
    lowercase: true,
  }
}, {
  timestamps: true
});

const Post = model('Post', postSchema);

export default Post;