import { laserBeam, rails } from "../data";

function RailsDecor({ className = "h-full" }) {
  return (
    <>
      <picture className="pointer-events-none absolute top-0 left-0 -z-20 flex w-[108rem] items-center">
        <img
          src={laserBeam}
          alt=""
          className="w-[72rem] flex-none scale-125 object-cover object-center"
        />
      </picture>
      <div
        className={`absolute inset-x-0 -top-1 -z-10 ${className} scale-150 opacity-5 [mask:linear-gradient(to_top,transparent,white)]`}
        style={{ backgroundImage: `url(${rails})` }}
      ></div>
    </>
  );
}

export { RailsDecor };
