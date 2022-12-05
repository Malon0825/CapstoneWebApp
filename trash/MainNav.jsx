{navLinks.map((nav, index) => (
  <li
    key={nav.id}
    className={`navbar-text
              ${index === navLinks.length - 1 ? 'mr-0' : 'mb-[48px]'}`}
  >
    <a href={`#${nav.id}`}>
      {nav.title}
    </a>
  </li>
))}