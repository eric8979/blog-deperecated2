import Link from "next/link";
import Image from "next/image";
import githubImg from "../public/GitHub-Mark-120px-plus.png";
import linkedinImg from "../public/LI-In-Bug.png";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-nowrap justify-between justify-center items-center w-full h-28 px-6">
        <Link href="/">
          <h1 className="text-7xl cursor-pointer">LOGO</h1>
        </Link>
        <nav>
          <Link href="/blog">
            <h2 className="inline text-3xl p-1.5 mx-2.5 cursor-pointer text-slate-600">
              blog
            </h2>
          </Link>
          <Link href="/about">
            <h2 className="inline text-3xl p-1.5 mx-2.5 cursor-pointer text-slate-600">
              about
            </h2>
          </Link>
        </nav>
        <ul className="flex justify-center">
          <li className="m-2">
            <a href="https://github.com/eric8979">
              <Image src={githubImg} alt={"GitHub"} height="54" width="54" />
            </a>
          </li>
          <li className="m-2">
            <a href="https://www.linkedin.com/in/eric-whale-4853301ab/">
              <Image
                src={linkedinImg}
                alt={"LinkedIn"}
                height="54"
                width="63"
              />
            </a>
          </li>
        </ul>
      </div>
      <hr className="border-neutral-200 border-2" />
    </>
  );
};

export default Navbar;
