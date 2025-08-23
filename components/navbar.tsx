"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavItems from "./nav-items";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export function SignedInButton() {
  return (
    <div className="flex items-center">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export function SignedOutButton() {
  return (
    <SignInButton mode="modal">
      <button className="btn-signin">Sign In</button>
    </SignInButton>
  );
}

const Navbar = () => {
  const [mounted, setMounted] = useState(false);

  // This ensures the component is mounted before rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until mounted on the client
  if (!mounted) {
    return (
      <nav className="navbar">
        <Link href="/">
          <div className="flex items-center gap-2.5 cursor-pointer">
            <Image src="/images/logo.svg" alt="" width={46} height={44} />
          </div>
        </Link>
      </nav>
    );
  }

  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="" width={46} height={44} />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <NavItems />
        <div className="flex items-center">
          <SignedIn>
            <SignedInButton />
          </SignedIn>
          <SignedOut>
            <SignedOutButton />
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
