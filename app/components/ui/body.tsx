// import pfp
import pfp from "../../../public/images/catboy.jpg";

export default function Body() {
  return (
    <main className="p-20">
      <div className="flex gap-10">
        {/* Profile */}
        <div>
          <img
            className="h-46 w-46 border-3 rounded-sm"
            src={pfp.src}
            alt="Profile picture"
          />
        </div>

        {/* Name */}
        <div
          className="
            /* Layout: vertically centered */
            my-auto
            "
        >
          <p
            className="uppercase text-xs md:text-sm text-[#141414]/50 md:pb-1 pb-0
            "
          >
            Given Name
          </p>
          <h1
            className="
                text-3xl md:text-5xl font-bold
            "
          >
            Ekoubuyoi
          </h1>
          <p
            className="
                italic text-xs md:text-sm text-[#141414]/50 md:pt-2 pt-1
            "
          >
            /ei-kuu-bu-yuu/
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full py-8">
        <div className="h-0.5 w-full bg-[#282828]" />
      </div>
    </main>
  );
}
