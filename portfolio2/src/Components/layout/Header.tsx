import React from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between bg-gray-400 bg-opacity-40 p-5 ">
      <div className="font-bold text-3xl font-serif"> Logo </div>

      <ul className="hidden md:flex gap-10  list-none mr-16  ">
        <Link href="/">
          <li className="rounded-2xl px-6 hover:bg-black  hover:text-white  hover:outline-white text-2xl font-serif">
            Home
          </li>
        </Link>
        <Link href="/about">
          <li className="rounded-2xl px-6 hover:bg-black  hover:text-white  hover:outline-white text-2xl font-serif">
            About
          </li>
        </Link>
        <Link href="/contact">
          <li className="rounded-2xl px-6 hover:bg-black  hover:text-white  hover:outline-white text-2xl font-serif">
            Contact
          </li>
        </Link>
      </ul>
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent className="w-26">
          <ul className="flex flex-col gap-1 list-none px-3">
            <li className="hover:underline-offset-auto">Home</li>
            <li>About</li>
            <li>Contact </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
