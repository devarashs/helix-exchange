import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

// Extend Request interface to include user
declare module "express" {
  interface Request {
    user?: {
      _id: string;
      username: string;
      email: string;
    };
  }
}

export const isAuth = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      res.status(401).json({ error: "No authorization header provided" });
      return;
    }

    const token = authHeader.startsWith("Bearer ")
      ? authHeader.slice(7)
      : authHeader;

    if (!token) {
      res.status(401).json({ error: "No token provided" });
      return;
    }

    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) {
      res.status(500).json({ error: "JWT secret not configured" });
      return;
    }

    const decoded = jwt.verify(token, secretKey) as JwtPayload;

    if (!decoded.user) {
      res.status(401).json({ error: "Invalid token payload" });
      return;
    }

    // Attach user info to request object
    req.user = decoded.user;
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      res.status(401).json({ error: "Invalid token" });
    } else if (error instanceof jwt.TokenExpiredError) {
      res.status(401).json({ error: "Token expired" });
    } else {
      console.error("Auth middleware error:", error);
      res.status(500).json({ error: "Authentication failed" });
    }
  }
};

export const optionalAuth = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader) {
      const token = authHeader.startsWith("Bearer ")
        ? authHeader.slice(7)
        : authHeader;

      if (token) {
        const secretKey = process.env.JWT_SECRET_KEY;
        if (secretKey) {
          try {
            const decoded = jwt.verify(token, secretKey) as JwtPayload;
            if (decoded.user) {
              req.user = decoded.user;
            }
          } catch (error) {
            // Token is invalid, but we continue without user info
            console.error("Optional auth error:", error);
            console.log(
              "Optional auth: Invalid token, continuing without user",
            );
          }
        }
      }
    }

    next();
  } catch (error) {
    // In optional auth, we don't fail the request
    console.error("Optional auth error:", error);
    next();
  }
};
