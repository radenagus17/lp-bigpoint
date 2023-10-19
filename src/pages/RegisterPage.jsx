import { useState } from "react";
import logoBigdel from "../assets/newLogo.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function RegisterPage() {
  const [sendData, setSendData] = useState(false);
  const [togglePw, setTogglePw] = useState("password");

  const router = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setValue,
    getValues,
    setError,
    setFocus,
    resetField,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      password: "",
      phone: "",
      alamat: "",
      wilayah: "",
    },
  });

  // console.log(pwRef.current?.type);
  const onSubmit = async (data) => {
    try {
      // console.log(data);
      // kirim data ke server
      await axios.post(
        "https://sbd-gateway.tym7.lyr.id/seller/register/dropper",
        data
      );

      resetField("username");
      resetField("email");
      resetField("password");
      resetField("phone");
      resetField("alamat");
      resetField("wilayah");
      setSendData(true);
      router("/register/welcome");
    } catch (e) {
      // console.log(e);
      if (e.response.data.message.username) {
        Swal.fire({
          title: "Upps Error!",
          text: e.response.data.message.username,
          icon: "error",
          confirmButtonText: "Ok!",
        });
        resetField("username");
      } else {
        Swal.fire({
          title: "Something Wrong!",
          text: e.message,
          icon: "warning",
        });
      }
    }
  };

  const toggleVis = () => {
    if (togglePw === "password") {
      setTogglePw("text");
    } else {
      setTogglePw("password");
    }
  };

  return (
    <main>
      <div className="h-screen w-full relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="ring-1 p-5 shadow-md ring-yellow-400 rounded-lg">
            <div className="w-72 mx-auto">
              <img src={logoBigdel} alt="logo" />
            </div>
            <h1 className="text-center lg:text-3xl text-2xl font-bold text-slate-800 my-4">
              Form Mitra Bigpoint
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3"
            >
              <div className="flex lg:flex-row flex-col lg:gap-2 gap-3">
                <div className="w-full">
                  <input
                    {...register("username", { required: "Name is required" })}
                    type="text"
                    className="px-3 py-2 rounded-lg border border-slate-300 outline-none w-full"
                    placeholder="Nama Pemilik Warung"
                  />
                  <p className="text-red-400 text-xs">
                    {errors.username?.message}
                  </p>
                </div>
                <div className="w-full">
                  <input
                    {...register("phone", {
                      required: "No. Telepon is required",
                      minLength: {
                        value: 10,
                        message: "Nomor HP minimal 10",
                      },
                      pattern: {
                        value: /^[0-9]*$/,
                        message: "Hanya berupa angka",
                      },
                    })}
                    type="text"
                    className="px-3 py-2 rounded-lg border border-slate-300 outline-none w-full"
                    placeholder="No Telepon"
                  />
                  <p className="text-red-400 text-xs">
                    {errors.phone?.message}
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col lg:gap-2 gap-3">
                <div className="w-full">
                  <input
                    {...register("email", { required: "Email is required" })}
                    type="email"
                    className="px-3 py-2 rounded-lg border border-slate-300 outline-none w-full"
                    placeholder="Email"
                  />
                  <p className="text-red-400 text-xs">
                    {errors.email?.message}
                  </p>
                </div>
                <div className="w-full">
                  <div className="inline-flex gap-2 items-center w-full">
                    <input
                      {...register("password", {
                        required: "Password is required",
                        pattern: {
                          value: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                          // value:
                          //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
                          message:
                            "requires a minimum of 8 characters, at least one uppercase letter, and at least one number",
                          // message:
                          //   "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
                        },
                      })}
                      type={togglePw}
                      className="px-3 py-2 rounded-lg border border-slate-300 outline-none w-full"
                      placeholder="Password"
                    />
                    <input type="checkbox" onClick={toggleVis} />
                  </div>
                  <p className="text-red-400 text-xs max-w-[180px]">
                    {errors.password?.message}
                  </p>
                </div>
              </div>
              <div className="w-full">
                <input
                  {...register("alamat", { required: "Alamat is required" })}
                  type="text"
                  className="px-3 py-2 rounded-lg border border-slate-300 outline-none w-full"
                  placeholder="Alamat Warung / Toko"
                />
                <p className="text-red-400 text-xs">{errors.alamat?.message}</p>
              </div>
              <div className="w-full ">
                <input
                  {...register("wilayah", { required: "Wilayah is required" })}
                  type="text"
                  className="px-3 py-2 rounded-lg border border-slate-300 outline-none w-full"
                  placeholder="Wilayah Detail (ex: 100 meter dari Mesjid Nurul Iman)"
                />
                <p className="text-red-400 text-xs">
                  {errors.wilayah?.message}
                </p>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-yellow-400 p-2 text-white font-bold shadow border-none transition duration-300 hover:bg-yellow-500 disabled:bg-gray-200 disabled:text-slate-800"
                disabled={sendData}
              >
                Daftar Sebagai Mitra
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
