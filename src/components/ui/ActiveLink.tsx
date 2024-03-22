import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ href, exact = false, children }) => {
  const path = usePathname();
  const active = exact ? path == href : path.startsWith(href);

  return (
    <div>
      <Link
        href={href}
        // className={({ isActive }) =>
        //   isActive ? "border-b-2 border-[#EE9322]" : ""
        // }
        className={active ? "text-[#0095CF] font-semibold" : ""}
      >
        {children}
      </Link>
    </div>
  );
};

export default ActiveLink;
