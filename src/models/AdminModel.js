import mongoose, { Schema } from "mongoose";

const AdminSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    usertype: {
      type: String,
      enum: ["1", "2"],
      default: "1",
      required: true
    },
    passwordchangeAt: { type: Date },
    defaultdata: { type: String, default: "user", required: true }
  },
  { timestamps: true }
);


const AdminModel =
  mongoose.models.Admin || mongoose.model("Admin", AdminSchema);

export default AdminModel;
