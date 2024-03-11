import Image from "next/image";
import Link from "next/link";

import gnarpyGun from "/public/images/gally/19.jpeg";

export default function Blog() {
  return (
    <>
      <Link href="/blog/why-gnarpy-so-popular">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image
              src={gnarpyGun}
              alt="gnarpy with a gun"
              width={400}
              height={300}
              style={{ width: "384px", height: "auto" }}
            />
          </figure>
          <div className="card-body h-[300px]">
            <h2 className="card-title">Why is gnarpy so popular?</h2>
            <p className="mt-6">
              There are so many NPCs in this game of regretevato, why is the
              gnarpy character the only one that causes such widespread
              discussion. Is it because of the character&#39;s image?
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
