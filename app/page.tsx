import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* hero section */}
      <section>
        <div>
          <h1>The Agents</h1>
          <h2>The best way to connect a wallet</h2>
          <p>Designed for everyone. Built for developers.</p>
          {/* have some sort of stat/code/address or something here */}
          <Link href="/dashboard">Enter</Link>
        </div>

        <div>Image here</div>

        <div>
          <p>
            The siqqest Web3 teams are using RainbowKit to improve their
            products, delight their users and save time when building.
          </p>

          <div>mini icons list here</div>
        </div>
      </section>

      {/* showcase scction - has animated background, niceee*/}
      <section>
        <h2>Give RainbowKit a spin</h2>
        <p>
          Make your Ethereum login experience feel right at home on your
          website. RainbowKit allows you to fully customize color, border
          radius, wallet providers and a lot more — all through an easy-to-use
          API. Get a feel for it below!
        </p>
        <div>image 2 here</div>
        {/* add any interactivity?? with the background maybe - nft hover with gsap */}
      </section>

      {/* benefits section */}
      <section>
        <h2>Rainbow 🤝 Developers</h2>
        <p>
          RainbowKit provides a fast, easy and highly customizable way for
          developers to add a great wallet experience to their application. We
          handle the hard stuff so developers and teams can focus on building
          amazing products and communities for their users.
        </p>
        <div>benefits list here</div>
        <Link href="/dashboard">Enter</Link>
      </section>

      {/* credits section */}
      <section>
        <div>
          <h2>Made with ❤️ by your frens at {/*Put agents logo*/}</h2>
          <p>
            Building RainbowKit has been an incredibly fun effort across many
            people at Rainbow and our frens at other companies. We're always
            looking to make RainbowKit better, so please let us know how we can
            improve.
          </p>
          <div>
            <button>btn 1</button>
            <button>btn 2</button>
          </div>
        </div>

        <footer>
          <div>links here</div>
          <p>&copy; The Agents</p>
        </footer>
      </section>
    </main>
  );
}
