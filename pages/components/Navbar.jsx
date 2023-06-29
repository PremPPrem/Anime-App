import React, { useState } from "react";
import s from "@/styles/Navbar.module.scss";
import Link from "next/link";
import { FaBars, FaTimes, FaCaretDown, FaGrunt } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => setToggle(!toggle);
  const active = useRouter();

  return (
    <div className="relative py-2 px-8 bg-black text-amber-500">
      <div
        className={
          toggle
            ? `${s.navbar} w-full h-16   mx-0 my-auto  flex items-center justify-between`
            : `w-full h-16   mx-0 my-auto  flex items-center justify-between`
        }
      >
        <div className={`${s.logo} sm:text-3xl font-extrabold  text-5xl`}>
          Anime.
        </div>
        <ul className={`${s.link} flex gap-10 text-2xl font-bold  `}>
          <li className={active.pathname == "/" ? `${s.active}` : ""}>
            <Link
              href="/"
              onClick={toggleMenu}
              className={active.pathname == "/" ? `${s.active}` : "hover:underline"}
            >
              Home
            </Link>
          </li>
          <li className={active.pathname == "/0" ? `${s.active}` : ""}>
            <div className={`${s.dropdown} relative inline-block`}>
              <span className=" cursor-pointer">
                Top Anime
                <FaCaretDown className=" text-xl inline-block ml-1" />
              </span>

              <div
                className={` ${s.dropdown_content} min-w-[160px]  absolute z-10 rounded-xl bg-black hidden  `}
              >
                <div className="grid grid-cols-1">
                  <a
                    href="/"
                    target="_blank"
                    onClick={toggleMenu}
                    className="py-3 px-4 text-xl  hover:text-white "
                  >
                    <FaGrunt className="inline-block mr-2" />
                    <span>One Piece</span>
                  </a>

                  <a
                    href="/"
                    target="_blank"
                    onClick={toggleMenu}
                    className="py-3 px-4 text-xl border-t-2 border-amber-500 hover:text-white"
                  >
                    <FaGrunt className="inline-block mr-2" />
                    <span>Naruto</span>
                  </a>

                  <Link
                    href="/"
                    target="_blank"
                    onClick={toggleMenu}
                    className="py-3 px-4 text-xl border-t-2 border-amber-500  hover:text-white "
                  >
                    <FaGrunt className="inline-block mr-2" />
                    <span>Bleach</span>
                  </Link>

                  <a
                    href="/"
                    target="_blank"
                    onClick={toggleMenu}
                    className="py-3 px-4 text-xl border-t-2 border-amber-500  hover:text-white "
                  >
                    <FaGrunt className="inline-block mr-2" />
                    <span>Gintama</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className={active.pathname == "/0" ? `${s.active}` : ""}>
            <Link
              href="/"
              onClick={toggleMenu}
              className={active.pathname == "/0" ? `${s.active}` : " hover:underline"}
            >
              Sign In
            </Link>
          </li>
          <li className={active.pathname == "/0" ? `${s.active}` : ""}>
            <Link
              href="/"
              onClick={toggleMenu}
              className={active.pathname == "/0" ? `${s.active}` : "hover:underline"}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <div
          className={`${s.toggle} sm:block hidden text-2xl cursor-pointer  `}
          onClick={toggleMenu}
        >
          {toggle ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
}
