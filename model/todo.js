import { Schema, model, models } from "mongoose";

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Todo = models.Todo || model("Todo", todoSchema);

export default Todo;
