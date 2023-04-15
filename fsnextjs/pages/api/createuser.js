import UserSchema from "../../Models/userSchema"
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
    const { email } = req.body;
    const isEmailExists = await UserSchema.findOne({ email: email });
    if (isEmailExists) {
        res.send({ status: 0, msg: "User with email '" + isEmailExists.email + "' already exists" });
    }
    else {
        await UserSchema.create(req.body);
        const allUsers = await UserSchema.find()
        res.status(200).json({ data: allUsers })
    }
}
export default connectDB(handler)
