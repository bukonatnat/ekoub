// import pfp
import pfp from "../../../public/images/catboy.jpg";

export default function Body() {
  return (
    <div className="px-20 py-12">
      <div className="flex gap-10">
        {/* Profile */}
        <div>
          <img
            className="h-46 w-46 border-3 rounded-sm shadow-[8px_8px_0px_0px_#282828]"
            src={pfp.src}
            alt="Profile picture"
          />
        </div>

        {/* Name */}
        <div
          className="
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

      <p
        className="
          border-l-10 pl-5 text-lg
        "
      >
        "Insanity is doing the same thing, over and over again, but with
        different results."
      </p>

      <p
        className="
          mt-4 text-lg
        "
      >
        Heyo, I'm <b> Ekoubuyoi</b>, a Computer Science freshman in{" "}
        <a
          className="
            underline font-bold decoration-2 underline-offset-4
          "
          href=""
        >
          USA
        </a>
        , currently deep-diving into web development. While I'm currently honing
        my frontend skills, I have big plans to pivot into Cybersecurity and AI
        in the future.{" "}
      </p>

      {/* Paragraph 3: Contact text */}
      <p
        className="
          mt-4 text-lg
        "
      >
        Aside from coding, I'm probably busy tinkering my Arch + MangoWM (newest setup) bc
        it can help me with my productivity. I also love to play 2D games,
        listen to any kind of music, and my dream is always to have an{" "}
        <a
          href="https://www.ibm.com/history/thinkpad"
          className="
              underline font-bold decoration-2 underline-offset-4
            "
        >
          IBM Thinkpad
        </a>
        .
      </p>

      {/* Paragraph 3: Contact text */}
      <p
        className="
          mt-4 text-lg
        "
      >
        If you're working on something cool or have an opportunity in mind, feel
        free to reach out. I'm always down to chat.
      </p>

      <p
        className="
          mt-4 text-lg
        "
      >
        You can also check out my projects in my{" "}
        <a className="underline font-bold decoration-2 underline-offset-4" href="https://github.com/bukonatnat/">
          github
        </a>
        , and u can mail me at{" "}
        <a
          href="mailto:imhannsop@gmail.com"
          className="
              underline font-bold decoration-2 underline-offset-4
            "
        >
          email
        </a>
        .
      </p>
    </div>
  );
}