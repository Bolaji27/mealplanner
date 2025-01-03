import mongoose from "mongoose";
import { type } from "os";
const plannerSchema = new mongoose.Schema({
    mealtype: {
        type: String,
        required: [true, "please pick your type of meal"]
    },

    datefrom: {
        type: Date,
        required: true 
    },

    dateto: {
        type: Date,
        required: true 
    },

    household: {
        type: Number,
        required: [true, "please insert a number"]
    },
    children: {
        type: Number,
        required: [true, "please insert a number"]
    },
    visitor: {
        type: Number,
        required: [true, "please insert a number"]
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: [true, "User ID is required"],
      },

});

 const Planner = mongoose.models.Planner || mongoose.model('Planner', plannerSchema);
 
 export default Planner;