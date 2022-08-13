import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row justify-between h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <span className="flex flex-row items-center">
        <Link href="/">LOGO</Link>
      </span>
      <nav>
        <ul className="flex flex-row">
          <li className="p-2">
            <Link href="/">Naslovna</Link>
          </li>

          <li className="p-2">
            <Link href="/o-nama">O nama</Link>
          </li>

          <li className="p-2">
            <Link href="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
