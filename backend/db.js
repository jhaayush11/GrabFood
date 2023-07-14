const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://ayushjha:ayushjha_2002@cluster0.ux5f87g.mongodb.net/grabfoodmern?retryWrites=true&w=majority";
 //grabfoodmern
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    const fetched_data = mongoose.connection.db.collection("food_items");
    let data = await fetched_data.find({}).toArray();
    console.log("connected for food items");
    global.food_items = data;
    // console.log(global.food_items);
  } catch (error) {
    console.log(" not connected for food items");
  }

  try {
     await mongoose.connect(mongoURI);
    const fetched_data1 = mongoose.connection.db.collection("food_category");
    let catData = await fetched_data1.find({}).toArray();
    console.log("connected for food category");
    global.foodCategory = catData;
    // console.log(global.foodCategory);
  } catch (error) {
    console.log(" not connected for food category");
  }
};
module.exports = mongoDB;
