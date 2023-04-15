import UserSchema from "../../Models/userSchema"
import connectDB from "../../middleware/mongoose";
const handler = async (req, res) => {
  let allUsers = await UserSchema.find();
  res.status(200).json({ allUsers })
}
export default connectDB(handler)
