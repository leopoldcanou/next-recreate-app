"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="list-style-none me-auto flex flex-col ps-0 lg:flex-row text-white space-x-10">
          <div className="list-style-none me-auto flex flex-col ps-0 lg:flex-row text-white">
            <Link
              className={clsx("mb-4 lg:mb-0 lg:pe-2 text-[#BBA]", {
                "bg-blue-500 text-white": pathname === "/crash",
              })}
              href="/crash"
            >
              Our Teams{" "}
            </Link>
            <Link
              className={clsx(
                "mb-4 lg:mb-0 lg:pe-2 hover:text-[#BBA] focus:text-[#BB0]",
                {
                  "bg-blue-500 text-white": pathname === "/team/sales",
                }
              )}
              href="/team/sales"
            >
              Sales
            </Link>
            <Link
              className={clsx(
                "mb-4 lg:mb-0 lg:pe-2 hover:text-[#BBA] focus:text-[#BB0]",
                {
                  "bg-blue-500 text-white": pathname === "/team/webdesign",
                }
              )}
              href="/team/webdesign"
            >
              Webdesign
            </Link>
            <Link
              className={clsx(
                "mb-4 lg:mb-0 lg:pe-2 hover:text-[#BBA] focus:text-[#BB0]",
                {
                  "bg-blue-500 text-white": pathname === "/team/development",
                }
              )}
              href="/team/development"
            >
              Development
            </Link>
          </div>
          <div className="list-style-none me-auto flex flex-col ps-0 lg:flex-row text-white space-x-10">
            <Link
              className={clsx(
                "ml-15 mb-4 lg:mb-0 lg:pe-2 hover:text-[#BBA] focus:text-[#BB0]",
                {
                  "bg-blue-500 text-white": pathname === "/buy",
                }
              )}
              href="/buy"
            >
              Buy
            </Link>
            <Link
              className={clsx(
                "mb-4 lg:mb-0 lg:pe-2 hover:text-[#BBA] focus:text-[#BB0]",
                {
                  "bg-blue-500 text-white": pathname === "/about",
                }
              )}
              href="/about"
            >
              ?
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
