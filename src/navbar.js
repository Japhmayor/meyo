import Info from "./Info";

function Navbar() {
  return (
    <div className="section remove-margin">
      <div className="">
        <h2>
          Bontus<span className="dots">..</span>
        </h2>
      </div>
      <div className="tor">
        <p>
          <a className="github-link name" href={Info.github}>
            Github
          </a>
          <a
            className="github-link name vb"
            href="https://play.golang.org/p/_ycZfqk-3oV"
          >
            Print my name
          </a>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
