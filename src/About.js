import { Link, Outlet } from "react-router-dom";
export default function About() {
  return (
    <>
      <h1>Halaman About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
        necessitatibus excepturi, assumenda cumque tenetur cum rerum eaque unde
        doloremque perspiciatis voluptate aperiam dolore molestias!
      </p>
      <ul>
        <li>
          <Link to="/about/team">Team</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
