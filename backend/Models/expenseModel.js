import mongoose from "mongoose";


const ExpenseSchema = new mongoose.Schema({
    description: { type: String },
    amount: { type: Number},
    category:{ type: String},
    user_id:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    createdAt: {
        type: Date,
        default: Date.now // Automatically set the current date/time
    }
})

const Expense = mongoose.model('Expense', ExpenseSchema);

export default Expense;