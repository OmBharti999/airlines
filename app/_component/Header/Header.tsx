import React from "react";
import "./index.css";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <div className="header">
      <Image src={"/airplane-logo.jpg"} width={24} height={24} alt="logo" />
      <div className="header-link">
        <Link href={"./home"}>Home</Link>
        <Link href={"./about"}>About</Link>
        <Link href={"./contact"}>Contact</Link>
      </div>
    </div>
  );
}
