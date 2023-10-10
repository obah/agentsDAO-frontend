export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <p>Welcome</p>
      <nav></nav>

      {children}
    </section>
  );
}
