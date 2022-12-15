import Connect from "./Connect";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flexer  border-b-2  border-amber-200 grid">
      <div className="xl:h-16 md:h-16 sm:h-32 xs:h-32 grid  xl:grid-cols-2 md:grid-cols-2">
        <div className="text-2xl font-bold xl:px-6   text-white  xl:ml-12 dekhk flex xl:justify-start md:justify-start sm:justify-center xs:justify-center py-4">
          <Link href="/" className="dekhk">
            Content Oasis
          </Link>
        </div>
        <div class="xl:mr-12  flex xl:justify-end sm:justify-center md:justify-end  xs:justify-center xl:py-3 md:py-3">
          <Connect />
        </div>
      </div>
    </nav>
  );
}
