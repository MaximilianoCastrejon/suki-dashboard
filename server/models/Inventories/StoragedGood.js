import mongoose from "mongoose";

const StoragedGoodSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
    unique: true,
  },
  unit: {
    type: String,
    required: true,
  },
  amountUsed: {
    type: Number,
    required: true,
  },
  costPerUnit: {
    type: Number,
    required: true,
  },
  totalCost: {
    type: Number,
    required: true,
  },
  beginningInventory: {
    type: Number,
    required: true,
  },
  endingInventory: {
    type: Number,
    required: true,
  },
  thresholdInventoryLevels: {
    type: Number,
    required: true,
  },
  dailyConsumptionRate: {
    type: Number,
    required: true,
  },
  wasteQuantity: {
    type: Number,
    required: true,
  },
  wasteCost: {
    type: Number,
    required: true,
  },
});

const StoragedGood = mongoose.model("StoragedGood", StoragedGoodSchema);
export default StoragedGood;
