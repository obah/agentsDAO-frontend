import Link from "next/link";

export default function HeroSection() {
  return (
    <section>
      <div>
        <h1>The Agents</h1>
        <h2>An automonus community of digital collectors</h2>
        <p>Open to everyone. Built to collect every digital asset</p>
        <Link href="/dashboard">Enter</Link>

        <div>
          <div>
            <p>Agents Worldwide</p>
            <p>2,000+</p>
          </div>
          <div>
            <p>Agents Asset Valuation</p>
            <p>$30M+</p>
          </div>
          <div>
            <p>NFTs Owned by Agents</p>
            <p>150+</p>
          </div>
          <div>
            <p>$Agents Holders</p>
            <p>500+</p>
          </div>
        </div>
      </div>

      <div>Image here{/*put the agents image and 2 popular nfts here*/}</div>

      <div>
        <p>
          The slickest collectors around the world are Agents and are actively
          increasing their portfolio accross different markets and assets
        </p>

        <div>
          {/*mini icons list here of nft markets, crypto assets and nfts that have logo eg manaland metaverse nfts*/}
        </div>
      </div>
    </section>
  );
}
