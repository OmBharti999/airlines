import React from "react";
import "./index.css";
import Link from "next/link";
import Image from "next/image";

interface Props {
  homepage: boolean;
}

export function Header({ homepage }: Props) {
  return (
    <div className={`header ${homepage ? "absolute z-10 w-8/12 rounded-md" : ""}`}>
      <Image
        src={"/assets/image/airplane-logo.jpg"}
        width={24}
        height={24}
        alt="logo"
      />
      <div className="header-link">
        <Link href={"./home"}>Home</Link>
        <Link href={"./about"}>About</Link>
        <Link href={"./contact"}>Contact</Link>
      </div>
    </div>
  );
}
