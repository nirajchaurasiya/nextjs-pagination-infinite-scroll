import UserSchema from "../../Models/userSchema"
import connectDB from "../../middleware/mongoose";
const handler = async (req, res) => {
    const allUsers = await UserSchema.findByIdAndDelete(req.params.id);
    res.status(200).json({ allUsers })
}
export default connectDB(handler)
