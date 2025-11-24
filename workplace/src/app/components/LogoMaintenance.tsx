import Image from "next/image";

export default function LogoMaintenance() {
  return (
    <div style={{position: 'absolute', top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 10}}>
      <Image
        src="/logorussostudios.png"
        alt="Logo Russo Studios"
        width={300}
        height={120}
        className="w-[120px] sm:w-[300px] max-w-full h-auto drop-shadow-xl mt-40"
        priority={true}
      />
    </div>
  );
}
