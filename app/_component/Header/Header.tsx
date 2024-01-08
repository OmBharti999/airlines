import React from "react";
import Link from "next/link";
import Image from "next/image";

import "./index.css";

interface Props {
  homepage: boolean;
}

export function Header({ homepage }: Props) {
  return (
    <div className={` ${homepage ? " header-homepage" : "header"}`}>
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
