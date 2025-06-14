import { UserService } from "@/services/user.service";
import { Request, Response } from "express";

const userService = new UserService();

export const signUp = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required" });
      return;
    }

    const result = await userService.SignUpUser({ email, password });

    if (result.success) {
      res.status(201).json({
        message: "User created successfully",
        token: result.token,
        user: { email },
      });
    } else {
      res.status(400).json({ error: result.message });
    }
  } catch (error) {
    console.error("SignUp error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const signIn = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required" });
      return;
    }

    const result = await userService.SignInUser({ email, password });

    if (result?.success) {
      res.json({
        message: "Login successful",
        token: result.token,
      });
    } else {
      res.status(401).json({ error: result?.message || "Invalid credentials" });
    }
  } catch (error) {
    console.error("SignIn error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getProfile = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    // req.user is guaranteed to exist because of isAuth middleware
    const userId = req.user!._id;

    const user = await userService.GetUserById(userId);

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.json({
      user: {
        _id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    console.error("Get profile error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
