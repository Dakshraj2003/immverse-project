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
          style={{ height: "18px" }}
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
          <li className="nav-item mt-1">
            <button className="btn btn-primary btn-sm mt-2 mt-lg-0 ">
              Sign In
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
