import React from "react";

export default function Navbar1({ page, setPage }) {
  return (
    <nav>
      <div className="w-72 shrink-0 min-h-screen border-r border-neutral-200 bg-white text-neutral-900">
        <div className="navbar__hero navbar__hero px-4.5 py-9">
          <div className="navbar__main flex flex-col gap-9">
            <div className="navbar__main-1 flex gap-1.5 items-center justify-center">
              <img
                src="/logo.png"
                alt=""
                className="size-8 shrink-0 rounded-full object-cover"
              />
              <p className="text-xl font-bold leading-none uppercase text-neutral-900">
                ES-shop
              </p>
            </div>
            <div className="navbar__main-2  flex flex-col gap-3">
              <div
                onClick={() => setPage("dashboard")}
                className={`navbar__main-2-block cursor-pointer flex py-3 w-full items-center gap-2.5 rounded px-3 ${page === "dashboard" ? "bg-blue-600 text-white" : "text-neutral-600 bg-transparent hover:bg-neutral-200 hover:text-neutral-900"} `}
              >
                <i className="bx bx-grid-alt text-[18px]"></i>
                <button className="text-xs">Dashboard</button>
              </div>
              <div
                onClick={() => setPage("yours")}
                className={`navbar__main-2-block cursor-pointer flex py-3 w-full items-center gap-2.5 rounded px-3 ${page === "yours" ? "bg-blue-600 text-white" : "text-neutral-600 bg-transparent hover:bg-neutral-200 hover:text-neutral-900"}`}
              >
                <i className="bx bx-home text-[18px]"></i>
                <button className="text-xs">My Listings</button>
              </div>
              <div
                onClick={() => setPage("market")}
                className={`navbar__main-2-block cursor-pointer flex py-3 w-full items-center gap-2.5 rounded px-3 ${page === "market" ? "bg-blue-600 text-white" : "text-neutral-600 bg-transparent hover:bg-neutral-200 hover:text-neutral-900"}`}
              >
                <i className="bx bx-store text-[18px]"></i>
                <button className="text-xs">Market</button>
              </div>
              <div
                onClick={() => setPage("favorites")}
                className={`navbar__main-2-block cursor-pointer flex py-3 w-full items-center gap-2.5 rounded px-3 ${page === "favorites" ? "bg-blue-600 text-white" : "text-neutral-600 bg-transparent hover:bg-neutral-200 hover:text-neutral-900"}`}
              >
                <i className="bx bx-heart text-[18px]"></i>
                <button className="text-xs">Favorites</button>
              </div>
            </div>
            <hr className="border-0 w-full h-px bg-[#383838]" />
            <button
              onClick={() => setPage("add")}
              className={`flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md border px-3 text-sm font-medium transition-colors ${page === "add" ? "border-blue-600 bg-blue-600 text-white" : "border-neutral-300 bg-white text-neutral-700 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700"}`}
            >
              <i className="bx bx-plus-circle text-[18px]" aria-hidden="true" />
              Add Listing
            </button>
          </div>
          <div className="navbar__footer">
            <button>Log Out</button>
            <div className="myAccount">
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
