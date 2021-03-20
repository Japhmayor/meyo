function Project({ projectInfo }) {
  return (
    <div className="section-center">
      {projectInfo.map((info) => {
        const { id, title, website, github, desc, img } = info;
        return (
          <article key={id} className="menu-item">
            <a href={website}>
              <img src={img} alt={title} className="photo"></img>
            </a>
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">
                  <a className="price" href={github}>
                    github
                  </a>
                </h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Project;
