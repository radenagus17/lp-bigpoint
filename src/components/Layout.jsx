// import viteLogo from "/vite.svg";
import bigDelLogo from "/newLogo(color).png";
export default function Layout({ children }) {
  const redirectLink = (link) => {
    location.replace(link);
  };

  return (
    <>
      <header className="bg-slate-800 min-h-[100px] min-w-[100vw] lg:px-12 px-5 flex items-center justify-between shadow-md fixed z-50">
        <div className="w-32">
          <img src={bigDelLogo} alt="logo" />
        </div>
        <ul className="list-none grid lg:grid-cols-5 grid-cols-1 lg:min-w-[50rem] min-w-0 text-lg lg:place-items-center lg:mr-[5rem] mr-0 uppercase">
          <li
            className="text-white hover:text-yellow-500 transition duration-300 cursor-pointer"
            onClick={() => redirectLink("https://bigdelivery.id/")}
          >
            Home
          </li>
          <li
            className="text-white hover:text-yellow-500 transition duration-300 cursor-pointer lg:block hidden"
            onClick={() => redirectLink("https://bigdelivery.id/pengiriman/")}
          >
            Pengiriman
          </li>
          <li className="text-white hover:text-yellow-500 transition duration-300 cursor-pointer lg:block hidden">
            Bigpoint
          </li>
          <li
            className="text-white hover:text-yellow-500 transition duration-300 cursor-pointer lg:block hidden"
            onClick={() => redirectLink("https://bigdelivery.id/komunitas/")}
          >
            Komunitas
          </li>
          <li
            className="text-white hover:text-yellow-500 transition duration-300 cursor-pointer lg:block hidden"
            onClick={() => redirectLink("https://bigdelivery.id/contact-us/")}
          >
            Tentang
          </li>
        </ul>
      </header>
      {children}
      <footer className="bg-slate-800 relative mt-20 py-6 text-white flex items-center justify-center text-sm px-3 text-center">
        © Copyright 2012 - 2023 | Bigdelivery | All Rights Reserved | Powered by
        Komunitas Seller
      </footer>
    </>
  );
}
