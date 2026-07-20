export default function Header() {
  return (
    <header>
      <h1>MyMovies</h1>
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/favorites">Favoritos</a>
                </li>
            </ul>
        </nav>
    </header>
  );
}