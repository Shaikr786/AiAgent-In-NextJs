"use client"
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export const Nav = () => {
  return (
    <nav className="fixed top-0 right-0 p-4 bg-white bg-opacity-30 backdrop-blur-md shadow-md z-20 rounded-lg border-2 border-gray-800">
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};