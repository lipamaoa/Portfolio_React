function Projects() {
  //   const projects = [
  //     {
  //       picture: "",
  //       description: "HTML | CSS | JavaScript",
  //       title: "Ruby &apos; s Endless Run",
  //       description: "cxbxcbxcbx",
  //     },
  //   ];
  return (
    <article>
      <header className="text-2xl uppercase font-semibold text-center">
        Projects
      </header>
      <section className="grid grid-cols-6">
        <div className="border-solid border-black">
          <div>picture</div>
          <div>description</div>
          <div>Title</div>
        </div>
      </section>
    </article>
  );
}

export default Projects;
