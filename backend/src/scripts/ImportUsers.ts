import User from "@/models/User";
import { HashPassword } from "@/utils/HashPassword";
import mongoose from "mongoose";

const users = [
  {
    username: "Alex",
    email: "alex@example.com",
    password: "password123",
    balance: 10000,
    avatar:
      "https://i.pinimg.com/236x/11/de/fc/11defc17b380ab9fe1861cd0aa817dc2.jpg",
  },
  {
    username: "Blake",
    email: "blake@example.com",
    password: "hunter2",
    balance: 8000,
    avatar:
      "https://i.pinimg.com/originals/e7/41/85/e74185538462b372d6e62791b399138f.jpg",
  },
  {
    username: "Sage",
    email: "sage@example.com",
    password: "openSesame",
    balance: 15000,
    avatar:
      "https://i.pinimg.com/736x/17/7f/c6/177fc6ca5d840284a8347ac68ab74d40.jpg",
  },
  {
    username: "Cypher",
    email: "cypher@example.com",
    password: "nora1234",
    balance: 50000,
    avatar:
      "https://i.pinimg.com/236x/1b/8c/e8/1b8ce804e9cc7f9dbeb7f52176c63b8a.jpg",
  },
];

async function importUsers() {
  try {
    await mongoose.connect("mongodb://localhost:27017/helix-exchange");

    for (const userData of users) {
      const user = new User({
        username: userData.username,
        email: userData.email,
        password: await HashPassword(userData.password),
        balance: userData.balance,
        avatar: userData.avatar,
      });

      await user.save();
      console.log(`User ${user.username} imported successfully.`);
    }

    console.log("All users imported successfully.");
  } catch (error) {
    console.error("Error importing users:", error);
  } finally {
    await mongoose.disconnect();
  }
}

importUsers()
  .then(() => console.log("User import script completed."))
  .catch((err) => console.error("Error in user import script:", err));
