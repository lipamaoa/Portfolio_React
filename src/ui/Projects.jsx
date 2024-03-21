import Card from "../components/Card";
import Ruby from "../assets/images/EndlessRun.png";
// import BizWheels from "../assets/images/BizWheels.png";
// import LinkdIron from "../assets/images/LinkdIron.png";
// import memorygame from "../assets/images/memorygame.png";

function Projects() {
  const projects = {
    link: "https://lipamaoa.github.io/Infinite-Runner-Adventure/",
    image: { src: Ruby },
    technologies: "HTML | CSS | JavaScript",
    title: "Ruby &apos; s Endless Run",
    description:
      "Welcome to Ruby &apos; Endless Run! This is a simple endless runner game where you control Ruby, the adventurous character, as she tries to avoid the obstacles and collect gems.",
  };
  //   {
  //     image: { src: memorygame },
  //     link: "https://lipamaoa.github.io/Memory-game/",
  //     technologies: "HTML | CSS | JavaScript",
  //     title: "Memory Matrix",
  //     description:
  //       "Memory Matrix is a simple memory game developed using HTML, JavaScript, and CSS, specifically for my 4-year-old. It's a special project created to seamlessly blend learning and playtime for my little one's enjoyment and cognitive growth.",
  //   },
  //   {
  //     image: { src: BizWheels },
  //     link: "https://bizwheels.adaptable.app/",
  //     technologies: "EJS | CSS | JavaScript | Node.js | Express | MongoDB",
  //     title: "BizWheels",
  //     description:
  //       "BizWheels is a web application that allows employees to request and reserve company vehicles for specific dates and times. It provides a convenient way for users to manage vehicle reservations, check car availability, and helps administrators oversee the company fleet efficiently.",
  //   },
  //   {
  //     image: { src: LinkdIron },
  //     link: "https://linkdiron.netlify.app/",
  //     technologies: "CSS | ReactJS | Node.js | Express | MongoDB",
  //     title: "LinkdIron",
  //     description:
  //       "LinkdIron is an app designed to connect Alumni and staff from Ironhack, providing a platform to share posts about events, job opportunities, and other valuable information.",
  //   },
  return (
    <section className="max-w-full" id="projects">
      <header className="text-2xl uppercase font-semibold text-center p-10">
        Projects
      </header>
      <section className="grid md:grid-cols-3 gap-4 max-w-full p-10">
        {/* // className=" grid md:grid-cols-12 border-2 border-gray-2000
        cursor-pointer gap-4 justify-center "
        {/* {projects.map((project) => {
          return <Card project={project} key={project.name} />;
        })} */}
        <Card project={projects} />
        <Card project={projects} />
        <Card project={projects} />
        <Card project={projects} />
      </section>
    </section>
  );
}

export default Projects;
