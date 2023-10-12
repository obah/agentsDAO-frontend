import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div>
        <div>links here</div>
        <Link href="/">
          <p>&copy; {/**THIS SHOULD HAVE THE LOOG STYLING */}The Agents</p>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
