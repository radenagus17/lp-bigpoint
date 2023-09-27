export default function WelcomePage() {
  return (
    <>
      <section className="relative h-screen w-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4">
          <h1 className="lg:text-4xl text-2xl text-yellow-500 font-bold text-center min-w-[380px] max-w-[530px]">
            Data anda sudah kami terima{" "}
            <span className="text-red-500">&#10084;</span>
          </h1>
          <p className="text-slate-400 text-center text-sm lg:text-base">
            Silahkan menghubungi admin kami untuk verifikasi data
          </p>
        </div>
      </section>
    </>
  );
}
