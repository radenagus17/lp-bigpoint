// import { useState } from 'react'
import React from "react";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Layout>
        {/* hero */}
        <section className="relative pt-24 min-w-[99vw]">
          {/* bg */}
          <div className="bg-hero-pattern min-h-[42rem] bg-no-repeat bg-cover bg-center relative">
            <div className="container mx-auto min-h-[40rem] flex items-center justify-center">
              <div className="bg-slate-800 rounded-lg py-5 px-10 shadow-md space-y-4">
                <h1 className="text-6xl text-yellow-500 font-semibold text-center">
                  Mau punya usaha ekspedisi??? <br />
                  Mari Bergabung Menjadi Mitra Big Point
                </h1>
                <p className="text-white text-center italic text-lg capitalize">
                  bebas biaya franchise - lokasi fleksibel - free system IT dan
                  apps - penghasilan rutin
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* catatan */}
        <section className="relative pt-14 ">
          <div className="container mx-auto border-2 flex border-yellow-500 rounded-md p-4 gap-12 flex-wrap">
            <div className="flex-1 space-y-3">
              <h4 className="text-2xl font-bold mb-2">Layanan kami :</h4>
              <p>
                REGULER : layanan pengiriman ke seluruh wilayah Indonesia,
                dengan perkiraan waktu penyampaian kiriman 1 – 7 hari kerja,
                tergantung pada zona daerah yang menjadi tujuan pengiriman.
              </p>
              <p>
                GIANT : layanan pengiriman dalam jumlah / volume yang besar
                melalui darat dan laut dengan harga yang kompetitif.
              </p>
            </div>
            <div className="flex-1 space-y-3">
              <h4 className="text-2xl font-bold">
                SYARAT JOIN MITRA BIG POINT
              </h4>
              <ul className="list-decimal ml-6 space-y-3">
                <li>Mengisi form registrasi yang telah disediakan</li>
                <li>Menyediakan tempat</li>
                <li>Fotocopy KTP Penanggung Jawab Agen</li>
                <li>Melakukan deposit</li>
                <li>Menandatangani Perjanjian Kerjasama Kemitraan</li>
              </ul>
            </div>
          </div>
        </section>
        {/* form */}
        <section className="relative pt-14">
          <form
            method="POST"
            action="https://getform.io/f/b35b3677-4d1f-459e-8282-0f4773e0647a"
            className="container mx-auto grid grid-cols-4 gap-6 p-4"
          >
            <div className="flex flex-col col-span-2 gap-1">
              <label>Nama Lengkap *</label>
              <input
                type="text"
                name="name"
                placeholder="Masukkan nama lengkap *"
                className="bg-gray-100 rounded-md p-2 outline-none"
              />
            </div>
            <div className="flex flex-col col-span-2 gap-1">
              <label>Kontak *</label>
              <input
                type="text"
                name="contact"
                placeholder="Masukkan nomor telepon *"
                className="bg-gray-100 rounded-md p-2 outline-none"
              />
            </div>
            <div className="flex flex-col col-span-2 gap-1">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan email *"
                className="bg-gray-100 rounded-md p-2 outline-none"
              />
            </div>
            <div className="flex flex-col gap-1 col-span-2 max-w-[25rem]">
              <label>Pilih kebutuhan anda *</label>
              <select
                name="need"
                className="bg-gray-100 h-10 placeholder:bg-none outline-none"
              >
                <option value="Kerjasama Pengiriman">
                  Kerjasama Pengiriman Perusahaan
                </option>
                <option value="Kerjasama Kemitraan">
                  Kerjasama Kemitraan Penjualan Tunai
                </option>
                <option value="Keluhan Pengiriman">Keluhan Pengiriman</option>
                <option value="Kritik dan Saran">Kritik dan Saran</option>
                <option value="Lainnya">Lainnya</option>
              </select>
              {/* <Select.Root className="outline-none">
                <Select.Trigger className="inline-flex items-center justify-between rounded-md p-2 gap-[5px] focus:outline-none outline-none bg-gray-100 hover:border-gray-100 text-gray-400 font-normal">
                  <Select.Value placeholder="Pilih..." name="need" />
                  <Select.Icon>
                    <ChevronDownIcon />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                    <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                      <ChevronUpIcon />
                    </Select.ScrollUpButton>
                    <Select.Viewport className="p-[5px]" name="need">
                      <SelectItem value="Kerjasama Pengiriman">
                        Kerjasama Pengiriman Perusahaan
                      </SelectItem>
                      <SelectItem value="Kerjasama Kemitraan">
                        Kerjasama Kemitraan Penjualan Tunai
                      </SelectItem>
                      <SelectItem value="Keluhan Pengiriman">
                        Keluhan Pengiriman
                      </SelectItem>
                      <SelectItem value="Kritik dan Saran">
                        Kritik dan Saran
                      </SelectItem>
                      <SelectItem value="Lainnya">Lainnya</SelectItem>
                    </Select.Viewport>
                    <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                      <ChevronDownIcon />
                    </Select.ScrollDownButton>
                  </Select.Content>
                </Select.Portal>
              </Select.Root> */}
            </div>
            <div className="flex flex-col col-span-4 gap-1">
              <label>Pesan *</label>
              <textarea
                name="pesan"
                className="bg-gray-100 rounded-md p-2 outline-none"
                id=""
                cols="30"
                rows="6"
                placeholder="Masukkan pesan"
              ></textarea>
            </div>
            <button
              className="py-2 px-4 rounded-md bg-red-600 text-white font-semibold"
              type="submit"
            >
              Kirim Pesan
            </button>
          </form>
        </section>
      </Layout>
    </div>
  );
}

// const SelectItem = React.forwardRef(
//   ({ children, className, ...props }, forwardedRef) => {
//     return (
//       <Select.Item
//         className={classnames(
//           "text-[13px] leading-none rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none",
//           className
//         )}
//         {...props}
//         ref={forwardedRef}
//       >
//         <Select.ItemText>{children}</Select.ItemText>
//         <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
//           <CheckIcon />
//         </Select.ItemIndicator>
//       </Select.Item>
//     );
//   }
// );

export default App;
