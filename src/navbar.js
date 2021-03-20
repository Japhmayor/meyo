import Info from "./Info";

function Navbar() {
  return (
    <div className="section remove-margin">
      <div className="">
        <h2>
          Meyo<span className="dots">..</span>
        </h2>
      </div>
      <div className="tor">
        <p>
          <a className="github-link name" href={Info.github}>
            Github
          </a>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
