import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="min-h-dvh mx-auto mw-full mt-8 grid grid-cols-1 md:grid-cols-2 p-8 max-w-screen-2xl">
        <div className="flex flex-col items-center justify-center justify-items-center space-y-4">
          <h2 className="text-4xl">Selamat datang di Ema Baby Spa</h2>
          <h1 className="text-4xl">
            Sentuhan kecil, manfaat besar untuk si kecil.
          </h1>
        </div>
        <div className=" flex items-center justify-center justify-items-center">
          <Image
            src={"/images/logo.png"}
            alt="logo ema baby spa"
            width={450}
            height={450}
          />
        </div>
      </section>
    </>
  );
}
