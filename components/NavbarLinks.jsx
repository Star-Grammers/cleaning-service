import Link from "next/link";

export function NavLinks(props) {
  const { linkName, routes, className } = props;
  return (
    <Link
      className={`${className} text-black  hover:text-amber-600 mr-10 uppercase`}
      href={routes}
    >
      {linkName}
    </Link>
  );
}

export function AuthLinks({ linkName, routes, className }) {
  return (
    <Link
      className={`${className} mr-20 py-2 px-4 rounded-full inline-block text-xs leading-none border text-amber-600 border-amber-600 hover:border-blue-500 hover:text-blue-500 lg:mt-0 uppercase`}
      href={routes}
    >
      {linkName}
    </Link>
  );
}
