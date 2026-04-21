import mongoose , { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    videoFile:{
        type: String, // CLOUDINARY URL 
        required:true
    },
    thumbnail:{
        type: String, // CLOUDINARY URL 
        required: true,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    title:{
        type: String,
        required: true,

    },
    description:{
        type: String,

    },
    duration:{
        type:Number, // cloudinary
        required:true,
    },
    views:{
        type:Number,
        default: 0
    },
    isPublished:{
        type:Boolean,
        default: true,
    }
},
{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema);
