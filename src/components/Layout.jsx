// import viteLogo from "/vite.svg";
import bigDelLogo from "/Logo_Big_Delivery.png";
export default function Layout({ children }) {
  return (
    <>
      <header className="bg-slate-800 min-h-[100px] min-w-[100vw] px-12 flex items-center justify-between shadow-md fixed z-50">
        <div>
          <img src={bigDelLogo} alt="logo" className="w-[118px]" />
        </div>
        <ul className="list-none grid grid-cols-5 min-w-[50rem] text-lg place-items-center mr-[5rem] uppercase">
          <li className="text-white hover:text-yellow-500 transition duration-300 cursor-pointer">
            Home
          </li>
          <li className="text-white hover:text-yellow-500 transition duration-300 cursor-pointer">
            Pengiriman
          </li>
          <li className="text-white hover:text-yellow-500 transition duration-300 cursor-pointer">
            Bigpoint
          </li>
          <li className="text-white hover:text-yellow-500 transition duration-300 cursor-pointer">
            Komunitas
          </li>
          <li className="text-white hover:text-yellow-500 transition duration-300 cursor-pointer">
            Tentang
          </li>
        </ul>
      </header>
      {children}
      <footer className="bg-slate-800 relative mt-20 py-6 text-white flex items-center justify-center text-sm">
        © Copyright 2012 - 2023 | Bigdelivery | All Rights Reserved | Powered by
        Komunitas Seller
      </footer>
    </>
  );
}
