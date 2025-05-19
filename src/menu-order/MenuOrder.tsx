import Image from "next/image";
import {listKategoriMenu, listMenuRekomendasi, listSemuaMenu} from "./menuOrderData";

const MenuOrder = () => {
  return (
    <div className="relative">
      {/* // Header */}
      <div className="h-5 bg-yellow-300/20">
      </div>

      {/* // Content */}
      <div className="h-8 flex items-center px-1 bg-red-500/20">
        (Nama Resto)
      </div>
      <div className="h-10 flex items-center sticky bg-yellow-300/20">
        <ul className="flex flex-row gap-4 overflow-x-auto hide-scrollbar px-1" >
          {
            listKategoriMenu.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))
          }
        </ul>
      </div>
      <div className="h-62 px-1 ">
      <h5 className="h-8 flex items-center font-black">Menu Rekomendasi</h5>
      <div className="mt-4">
          <div className="grid grid-cols-1 gap-4 ">
            <div className="overflow-x-auto hide-scrollbar">
              <div className="flex gap-4 ">
                {
                  listMenuRekomendasi.map((item, index) => (
                      <div key={index} className="bg-white flex justify-center shrink-0 w-[160px] rounded-xl shadow-[2px_2px_10px_rgba(0,0,0,0.15)]">
                        <div>
                          {/* Image */}
                          <div className="">
                            <img src={item.image.src} className="mt-4 w-32 object-contain" alt="" />
                          </div>
                          {/* Name */}
                          <div className="text-sm">
                            {item.name}
                          </div>
                          {/* Price */}
                          <div className="text-sm my-5 ">
                            {item.price}
                          </div>
                        </div>
                      </div>
                  ))
                }
              </div>
            </div>
          </div>
      </div>
      </div>
      <div className="h-1 bg-black/10"></div>
      {/* Menu */}
      <div className="p-2">
        <div className="overflow-y-auto hide-scrollbar">
          <div className=" ">
            <ul className="">
              {
                listSemuaMenu.map((item, index) => (
                  <li className="py-2"key={index}>
                    <h1 className="font-black text-2xl">{item.kategori}</h1>
                    <ul className="py-2">
                    {
                      item.menu.map((menu, index) => (
                        <li key={index}>
                          <div className="flex h-28">
                            <img className=" w-28 object-contain" src={menu.gambar.src} alt="" />
                            <div className="flex flex-col w-full">
                              <div className="mt-2 font-bold text-lg ">
                                {menu.nama}
                              </div>
                              <div className="text-sm">
                                {menu.deskripsi}
                              </div>
                              <div className="mt-5 flex items-start">
                                <div className="w-full flex justify-start">
                                  {menu.harga}
                                </div>
                                <div className="w-full flex justify-end">
                                  <button className="bg-white border border-red-600 text-red-600 px-3 rounded text-lg hover:bg-blue-700 transition">Add</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-full h-[3px] bg-black/10"></div>
                        </li>
                      ))
                    }
                    </ul>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOrder;
