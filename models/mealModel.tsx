import mongoose from "mongoose";

const mealSchema = new mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    planner: {
        mealtype: String,
        datefrom: Date,
        dateto: Date,
        householdNo: Number,
        children:Number,
        visitor:Number,
},
households: [

         {
            householdId:Number,
            typeOfDay: {
                type: String,
                enum: ['morning', 'afternoon', 'evening']
            },
            date: Date,
            meal: String,
            beverage: String,
            snack: String,
            fruit: String
        }
       
    
]
});

const Meal = mongoose.models.Meal || mongoose.model("Meal", mealSchema);

 export default Meal;