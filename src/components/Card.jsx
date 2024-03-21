function Card({ project }) {
  console.log(project.image);
  return (
    <div className="grid grid-rows-6 gap-1 p-4 border rounded-xl transition duration-500  hover:scale-90 ">
      {/* <a href={project.link}> */}
      <div className="rounded-lg row-span-6">
        <img
          src={project.image.src}
          alt={project.name}
          className="rounded-md  focus:ring-1"
        ></img>
      </div>
      <div>
        <p className="text-sm py-1">{project.technologies}</p>
      </div>
      <div>
        {" "}
        <h1 className="text-md font-semibold uppercase py-1">
          {project.title}
        </h1>
      </div>
      <div>
        <p className="text-sm text-justify">{project.description}</p>{" "}
      </div>
      {/* <img
              src={project.image.src}
              alt={project.name}
              className="  grid-rows-1 max-w-50 md:max-w-auto md:w-full rounded-md  focus:ring-1"
            ></img>
         

            <p className="text-sm py-1">{project.technologies}</p>
            
            <h1 className="text-md font-semibold uppercase py-1">
            {project.title}
            </h1>
          <p className="text-sm text-justify">{project.description}</p> */}
      {/* </a> */}
    </div>
  );
}

export default Card;
