import React from "react";
import Link from "next/link";

export default function Footer() {
  const links = [
    {
      name: "AI Music Generator",
      href: "https://aisonggenerator.io",
    },
    {
      name: "AI Music Generator",
      href: "https://aimusicgen.ai",
    },
    {
      name: "Veo2",
      href: "https://veo2.org",
    },
  ];
  return (
    <div className="">
      <div className="border-t border-neutral-900 px-8 pt-20 pb-32">
        <div className="max-w-7xl mx-auto text-sm text-neutral-500 dark:text-neutral-400 flex sm:flex-row flex-col justify-between items-start ">
          <div className="grid grid-cols-4 gap-10 items-start mt-10 md:mt-0">
            <div className="flex justify-center space-y-4 flex-col mt-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  className="transition-colors hover:text-gray-400 text-muted text-xs sm:text-sm"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
