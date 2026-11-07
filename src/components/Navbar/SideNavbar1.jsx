import React from "react";

export default function Navbar1({ page, setPage }) {
  //Backend dan keladigan logo
  const user = {
    id: 1,
    logo: "https://i.ibb.co/gLfMCLx0/logo.jpg",
    nickname: "Mustafo",
    age: 13,
    status: "admin"
  }
  return (
    <nav>
      <div className="w-72 shrink-0 min-h-screen border-r border-neutral-200 bg-white text-neutral-900">
        <div className="navbar__hero flex min-h-screen flex-col gap-8 px-4.5 pt-9 pb-4">
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
          <div className="flex-col navbar__footer mt-auto flex  gap-3 border-t border-neutral-300 pt-4">
            <button className=" shrink-0 cursor-pointer rounded-md px-3 py-2 text-sm text-neutral-600 transition-colors hover:bg-neutral-200 hover:text-neutral-900">Log Out</button>
            <div className="myAccount flex min-w-0 items-center gap-2.5">
              {
                //info backend dan kelishi kerak. Ozi shetgacha borish uchun boshida registratsiya qilish kerak. Agar logo bolmasa tayyor noLogo rasm qoyiladi
              }
              <img src={user.logo || "/user.png"} alt="" className="size-9 shrink-0 rounded-full object-cover"/>
              <h1 className="truncate text-sm font-semibold text-neutral-900">{user.nickname}</h1>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
