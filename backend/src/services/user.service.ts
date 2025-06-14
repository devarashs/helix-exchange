import User from "@/models/User";
import { HashPassword } from "@/utils/HashPassword";
import bcrypt from "bcryptjs";
import { GenerateJWT } from "@/utils/JWTTools";

export class UserService {
  async SignUpUser({
    email,
    password,
    username,
  }: {
    email: string;
    password: string;
    username?: string;
  }) {
    const user = await User.findOne({ email: email }).lean();
    if (!user) {
      const newUser = new User({
        email: email,
        username: username || email.split("@")[0], // Use email prefix if no username provided
        password: await HashPassword(password),
      });
      await newUser.save();
      const token = GenerateJWT({
        user: {
          _id: newUser._id.toString(),
          username: newUser.username,
          email: newUser.email,
        },
      });
      return { success: true, token: token };
    } else {
      return { success: false, message: "User already exists" };
    }
  }
  async SignInUser({ email, password }: { email: string; password: string }) {
    const user = await User.findOne({ email: email }).lean();
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        const token = GenerateJWT({
          user: {
            _id: user._id.toString(),
            username: user.username,
            email: user.email,
          },
        });
        return { success: true, token: token };
      } else {
        return { success: false, message: "Invalid password" };
      }
    }
  }
  async GetUserById(userId: string) {
    const user = await User.findById(userId).lean();
    if (user) {
      return {
        _id: user._id.toString(),
        username: user.username,
        email: user.email,
      };
    }
    return null;
  }
}
