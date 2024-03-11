import Image from "next/image";
import Link from "next/link";

import gnarpy from "/public/images/gally/19.jpeg";

export default function BlogPage() {
  return (
    // <!-- Section Blog -->
    <section className="mt-4">
      {/* <!-- Container --> */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* <!-- Blog Title --> */}
        <h1 className="text-center text-3xl font-bold md:text-5xl">
          Find out the latest news about Gnarpy
        </h1>
        <p className="mb-16 mt-4 text-center text-[#647084]">
          Gnarpy news and in-depth analysis
        </p>
        {/* <!-- Blog Content --> */}
        <div className="mx-auto grid max-w-xl gap-4">
          {/* <!-- Blog Item --> */}
          <Link href="/blog/why-gnarpy-so-popular">
            <div className="flex flex-col items-center pb-8 text-center [border-bottom:1px_solid_rgb(100,_112,_132)] sm:flex-row sm:text-left">
              <Image
                src={gnarpy}
                alt="gnarpy_with_a_gun"
                className="inline-block h-40 w-40"
              />
              <div className="pt-4 sm:px-8 sm:pt-0">
                <h2 className="mb-4 font-bold">Why is gnarpy so polular?</h2>
                <p className="text-sm">
                  There are so many NPCs in this game of regretevato, why is the
                  gnarpy character the only one that causes such widespread
                  discussion. Is it because of the character&#39;s image?
                </p>
                <p className="text-sm mt-2">March 12, 2024</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
