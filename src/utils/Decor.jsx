import { laserBeam, rails, diagonalLines, stars } from "../data";

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

function DiagonalLinesDecor({ className = "h-full", bgColor = null }) {
  return (
    <>
      <div
        className={`absolute inset-0 -z-10 ${className} opacity-10 `}
        style={{ backgroundImage: `url(${diagonalLines})` }}
      ></div>
      {bgColor && <div className={`${bgColor} absolute inset-0 -z-20`}></div>}
    </>
  );
}
function StarsDecor({ className = "h-full", bgColor = null }) {
  return (
    <>
      <div
        className={`absolute inset-x-0 bottom-0 -z-10 ${className} opacity-25 [mask:linear-gradient(to_bottom,transparent,white)] `}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      {bgColor && (
        <div className={`${bgColor} absolute inset-x-0 bottom-0 -z-20`}></div>
      )}
    </>
  );
}

export { RailsDecor, DiagonalLinesDecor, StarsDecor };
