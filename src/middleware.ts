import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

// 👇 this tells Clerk which routes to protect
export const config = {
  matcher: [
    // Protect everything except /sign-in and /sign-up
    "/((?!sign-in|sign-up).*)",
  ],
};
