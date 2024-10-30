import React from "react";
import Link from "next/link";

const ButtonPrimary = ({ children, addClass = "", href }) => {
  const className = `py-2 lg:py-3 px-4 lg:px-6 text-white-500 font-semibold rounded-lg bg-orange-500 transition-all outline-none hover:shadow-dark-grey-lg ${addClass}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return <button className={className}>{children}</button>;
};

export default ButtonPrimary;