function AboutMe() {
  return (
    <div className="grid col-auto gap-4 p-10">
      <div>
        <h1 className="text-2xl text-center font-semibold uppercase ">
          About Me
        </h1>
        <p className="py-5 text-justify">
          I am a passionate professional who recently paused my career, which
          included a PhD in Chemistry and a senior role in the pharmaceutical
          industry, to explore a new path in web development. With a strong
          background in problem-solving and project management, I bring a unique
          blend of skills and a meticulous attention to detail to the world of
          software engineering. My journey is fueled by a desire to create
          user-centric digital experiences and a commitment to mastering the
          latest web technologies. I thrive in collaborative environments and I
          am eager to contribute my diverse expertise to organizations that
          value teamwork, engaging projects, and continuous growth. My ultimate
          goal is to leverage my scientific and project management background to
          make a meaningful impact in web development, delivering innovative
          solutions that enhance the user experience and drive technological
          progress.
        </p>
      </div>
      <div className="flex justify-center gap-2 text-5xl">
        <i className="fa-brands fa-html5"></i>
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-css3"></i>
        <i className="fa-brands fa-react"></i>
        <i className="fa-brands fa-git-alt"></i>
        <i className="fa-brands fa-bootstrap"></i>
        <i className="fa-brands fa-js"></i>
        <i className="fa-brands fa-node-js"></i>
        <i className="fa-brands fa-sass"></i>
      </div>
    </div>
  );
}

export default AboutMe;
