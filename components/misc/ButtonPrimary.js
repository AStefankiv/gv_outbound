// import React from "react";

// const ButtonPrimary = ({ children, addClass }) => {
//   return (
//     <button
//       className={
//         "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none " +
//         addClass
//       }
//     >
//       {children}
//     </button>
//   );
// };

// export default ButtonPrimary;


import React from "react";
import Link from "next/link";

const ButtonPrimary = ({ children, addClass = "", href }) => {
  const className = `py-2 lg:py-3 px-4 lg:px-6 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none ${addClass}`;

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
