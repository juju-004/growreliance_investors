"use client";

import {
  ArrowsUpDownIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function Dock({ className }) {
  const pathName = usePathname();
  const [path, setPath] = useState(null);

  const items = [
    {
      icon: <CurrencyDollarIcon className="size-6 fill-c1" />,
      text: "Invest",
      path: "/",
    },
    {
      icon: <ArrowsUpDownIcon className="size-6 fill-c1" />,
      text: "Trade",
      path: "/trade",
    },
  ];

  useEffect(() => {
    setPath(pathName === "/dashboard" ? "/dashboard/" : pathName);
  }, [pathName]);

  return (
    <div className={`${className}  `}>
      {items.map((i, key) => {
        return (
          <button
            key={key}
            className={`!lg:flex ${
              path === `/dashboard${i.path}`
                ? "dock-active md:bg-c2/15 md:py-2  md:px-6"
                : ""
            }`}
          >
            <Link
              onClick={() => setPath(`/dashboard${i.path}`)}
              className="flex md:flex-row md:gap-3 flex-col items-center active:scale-75 duration-200"
              href={`/dashboard${i.path}`}
            >
              {i.icon}
              <span className="dock-label">{i.text}</span>
            </Link>
          </button>
        );
      })}
    </div>
  );
}

export default Dock;
