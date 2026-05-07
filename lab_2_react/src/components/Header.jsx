function Header() {
  return (
    <header className="bg-slate-900 text-white p-8 rounded-t-2xl shadow-md">
      <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
        Vladyslav Storozhuk
      </h1>
      <p className="mt-3 text-lg text-slate-300">
        Student / Cybersecurity Specialist
      </p>

      <div className="mt-4 space-y-1 text-sm md:text-base text-slate-200">
        <p>
          Email:{" "}
          <a
            href="mailto:vladstor231205@gmail.com"
            className="text-blue-300 hover:text-blue-200"
          >
            vladstor231205@gmail.com
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/vladst43"
            target="_blank"
            rel="noreferrer"
            className="text-blue-300 hover:text-blue-200"
          >
            github.com/vladst43
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/vladyslav-storozhuk-757b12306"
            target="_blank"
            rel="noreferrer"
            className="text-blue-300 hover:text-blue-200"
          >
            Profile
          </a>
        </p>
      </div>
    </header>
  );
}

export default Header;
