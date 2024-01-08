// import Image from "next/image";

import { Header } from "./_component";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Header homepage/>
      <div className="absolute top-0 w-full h-full bg-[#0000004d]"></div>
      <video loop autoPlay muted style={{ width: "100%", height: "100vh", objectFit:"cover" }}>
        <source src="/assets/video/mountain_view.mp4" />
      </video>
      <div className="absolute w-full h-full flex top-0 flex-col justify-center items-center font-bold text-white">
        <h1 className="text-7xl ">Welcome</h1>
        <h2 className="text-6xl">to my site</h2>
      </div>
    </main>
  );
}
