import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config();

export const GenerateJWT = ({
  user,
}: {
  user: {
    _id: string;
    username: string;
    email: string;
  };
}) => {
  const now = Math.floor(Date.now() / 1000);
  const secret = process.env.JWT_SECRET;
  const issuer = process.env.JWT_ISSUER;
  const audience = process.env.JWT_AUDIENCE;
  if (!secret || !issuer || !audience) {
    throw new Error("JWT_SECRET, JWT_ISSUER, or JWT_AUDIENCE is not defined");
  }

  return jwt.sign(
    {
      // User data
      _id: user._id.toString(),
      username: user.username,
      email: user.email,

      // Standard claims for security
      iss: issuer, // Issuer
      aud: audience, // Audience
      sub: user._id.toString(), // Subject (user ID)
      iat: now, // Issued at
      exp: now + 60 * 60, // Expires in 1 hour
      jti: crypto.randomUUID(), // JWT ID for uniqueness/revocation
    },
    secret,
    {
      algorithm: "HS256", // Explicit algorithm
    },
  );
};

export const ValidateToken = (token: string) => {
  const secret = process.env.JWT_SECRET;
  const issuer = process.env.JWT_ISSUER;
  const audience = process.env.JWT_AUDIENCE;
  if (!secret || !issuer || !audience) {
    throw new Error("JWT_SECRET, JWT_ISSUER, or JWT_AUDIENCE is not defined");
  }

  return jwt.verify(token, secret, {
    issuer: issuer,
    audience: audience,
    algorithms: ["HS256"], // Whitelist algorithms
  });
};
