function Card({ project }) {
  return (
    <>
      <div className="col-span-4 border  rounded-md p-4 px-3 transition duration-500 hover:scale-90 ">
        <a href={project.link}>
          <img
            src={project.image.src}
            alt={project.name}
            className="  max-w-50 md:max-w-auto md:w-full rounded-md focus:ring-1"
          ></img>
          <p className="text-sm py-1">{project.technologies}</p>
          <h1 className="text-md font-semibold uppercase py-1">
            {project.title}
          </h1>
          <p className="text-sm text-justify">{project.description}</p>
        </a>
      </div>
    </>
  );
}

export default Card;
