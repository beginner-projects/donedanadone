import Image from "next/image";

export function MrbLogo() {
  return (
    <div className="w-8 h-8 m-0.5">
      <Image src="/flame.png" alt="logo" width={32} height={32} />
    </div>
  );
}
