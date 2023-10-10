import Link from "next/link";

interface MenuItem {
  path: string;
  title: string;
}

function Header() {
  const menuItems: MenuItem[] = [
    { path: "/dashboard", title: "Dashboard" },
    { path: "/portfolio", title: "Portfolio" },
    { path: "/members", title: "Members" },
    { path: "/about", title: "About" },
  ];

  return (
    <header>
      <div>
        <p>Logo here</p>
        <div>
          <div>hamburger</div>
          <nav>
            <ul>
              {menuItems.map((item) => (
                <li key={item.title}>
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
