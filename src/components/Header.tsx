// "use client";

// import Link from "next/link";
// import { useState } from "react";

// export default function Header() {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 bg-dark">
//       {/* <Link href="/" className="navbar-brand fw-bold">
//         Immverse
//       </Link> */}
//       <img
//         src="./assest/ImmverseAI.png"
//         alt="ImmverseAI"
//         className="img-fluid"
//         style={{ maxHeight: "400px" }}
//       />
//       <button
//         className="navbar-toggler"
//         type="button"
//         onClick={() => setExpanded(!expanded)}
//         aria-controls="navbarNav"
//         aria-expanded={expanded}
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"/>
//       </button>

//       <div
//         className={`collapse navbar-collapse ${expanded ? "show" : ""}`}
//         id="navbarNav"
//       >
//         <ul className="navbar-nav ms-auto nav-link text-white">
//           <li className="nav-item">
//             <Link href="#features"className="nav-link text-white">
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link href="#testimonials" className="nav-link text-white">
//               Company
//             </Link>
//             {/* <img
//               src="./assest/Company.png"
//               alt="Company"
//               className="img-fluid"
//               style={{ maxHeight: "32px" }}
//             /> */}
//           </li>
//           <li className="nav-item">
//             <Link href="#get-started" className="nav-link text-white">
//               Features
//             </Link>
//              {/* <img
//               src="./assest/Features.png"
//               alt="Features"
//               className="img-fluid me-3"
//               style={{ maxHeight: "32px" }}
//             /> */}
//           </li>
//           <li className="nav-item">
//             {/* <Link href="#get-started" className="nav-link">
//               Get Started
//             </Link> */}
//             <button className="btn btn-primary btn-sm mt-1">Sign In</button>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useState } from "react";

// export default function Header() {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
//       {/* Brand Logo */}
//       <Link href="/" className="navbar-brand">
//         <img
//           src="./assest/ImmverseAI.png"
//           alt="ImmverseAI"
//           style={{ height: "40px" }}
//         />
//       </Link>

//       {/* Hamburger Toggler */}
//       <button
//         className="navbar-toggler"
//         type="button"
//         onClick={() => setExpanded(!expanded)}
//         aria-controls="navbarNav"
//         aria-expanded={expanded}
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon" />
//       </button>

//       {/* Navbar Links */}
//       <div
//         className={`collapse navbar-collapse ${expanded ? "show" : ""}`}
//         id="navbarNav"
//       >
//         <ul className="navbar-nav ms-auto align-items-lg-center text-center text-lg-start gap-2 mt-3 mt-lg-0">
//           <li className="nav-item">
//             <Link href="#features" className="nav-link text-white">
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link href="#testimonials" className="nav-link text-white">
//               Company
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link href="#get-started" className="nav-link text-white">
//               Features
//             </Link>
//           </li>
//           <li className="nav-item">
//             <button className="btn btn-primary btn-sm mt-2 mt-lg-0">Sign In</button>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 py-2">
      {/* Brand Logo */}
      <Link href="/" className="navbar-brand d-flex align-items-center">
        <img
          src="./assest/ImmverseAI.png"
          alt="Immverse Logo"
          style={{ height: "40px" }}
          className="img-fluid"
        />
      </Link>

      {/* Toggle Button */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setExpanded(!expanded)}
        aria-controls="navbarNav"
        aria-expanded={expanded}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      {/* Collapsible Menu */}
      <div
        className={`collapse navbar-collapse ${expanded ? "show" : ""}`}
        id="navbarNav"
      >
        <ul className="navbar-nav ms-auto text-center text-lg-start mt-3 mt-lg-0 gap-2">
          <li className="nav-item">
            <Link href="#features" className="nav-link text-white">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#testimonials" className="nav-link text-white">
              Company
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#get-started" className="nav-link text-white">
              Features
            </Link>
          </li>
          <li className="nav-item">
            <button className="btn btn-primary btn-sm mt-2 mt-lg-0">Sign In</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
