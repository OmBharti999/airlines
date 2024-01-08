// import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <video loop autoPlay muted style={{ width: "100%", height: "auto" }}>
        <source src="/assets/video/mountain_view.mp4" />
      </video>
    </main>
  );
}
