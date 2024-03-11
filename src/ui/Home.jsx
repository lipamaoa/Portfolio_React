import { Link } from "react-router-dom";
import Photo from "../assets/photo.jpg";

function Home() {
  return (
    <section className="grid place-items-center md:grid-cols-4">
      <div className="w-full pt-10 px-3 grid h-full items-center max-w-6xl justify-around gap-4 md:gap-2  md:col-span-2 text-center">
        <h5 className="font-medium text-stone-100 "> Hello Welcome</h5>
        <h1 className="text-xl"> Hi!{"I'm Filipa"}</h1>
        <h1 className="text-xl">Full stack developer</h1>
        <h2 className="text-sm">
          I am a passionate professional who recently paused my career, which
          included a PhD in Chemistry and a senior role in the pharmaceutical
          industry, to explore a new path in web development.
        </h2>
        <div className="flex justify-center gap-3 text-2xl py-10">
          <Link to="">
            <button className=" font-semibold text-sm  md:w-full p-2 bg-white rounded-2xl hover:bg-slate-200   ">
              {" "}
              <i className="fa-solid fa-download p-1"></i>Download CV
            </button>
          </Link>
          <Link to="" className="social-icon">
            <i className="fa-brands fa-github hover:opacity-50"></i>
          </Link>
          <Link to="" className="social-icon">
            <i className="fa-brands fa-linkedin hover:opacity-50"></i>
          </Link>
          <Link to="" className="social-icon">
            <i className="fa-solid fa-tag hover:opacity-50"></i>
          </Link>
        </div>
      </div>
      <div className=" md:col-span-2 py-4">
        <img
          src={Photo}
          className="w-3/4 mx-auto  max-w-80  mt-5 rounded-full"
          alt="hello"
        />
      </div>
    </section>
    // <section className=" flex items-center relative before:absolute before:top-0 before:start-1/2  before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
    //   <div className="w-full pt-20 grid md:grid-cols-6 h-full items-center max-w-6xl justify-around">
    //     <div className="lg:col-span-2 sm:pl-2 md:col-span-3 md:text-left text-center">
    //       <div>
    //         <h5 className="font-medium text-gray-600 dark:text-gray-200">
    //           Hello Welcome
    //         </h5>
    //         <h1 className="sm:text-5xl text-4xl dark:text-white !leading-normal relative font-medium">
    //           I am <span className="text-primary">Filipa</span> <br />
    //           Junior Front-end developer
    //         </h1>
    //         <button className="btn btn-filled mt-5">
    //           <i className="fa-regular fa-envelope"></i> Hire Me
    //         </button>
    //         <button className="font-semibold dark:text-gray-200 border-b-2 border-gray-700 ml-4">
    //           <i className="fa-solid fa-up-right-from-square"></i> See Portfolio
    //         </button>
    //       </div>
    //       <div className="md:w-96 md:ml-auto flex mt-9 gap-2 dark:text-gray-300">
    //         <i className="fa-solid fa-border-all mt-0.5 md:inline-block hidden"></i>
    //         <p className="text-xs text-balance leading-5 max-w-md px-2 mx-auto">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
    //           architecto debitis molestias doloremque labore autem dolorem in
    //           eius obcaecati! Amet beatae omnis.
    //         </p>
    //       </div>
    //       <div className="flex items-center md:justify-end justify-center dark:text-gray-200 text-gray-600 gap-6 mt-9">
    //         <p className="text-xs">Follow Us</p>
    //         <div className="flex justify-end gap-3">
    //           <a href="#" className="social-icon">
    //             <i className="fa-brands fa-github"></i>
    //           </a>
    //           <a href="#" className="social-icon">
    //             <i className="fa-brands fa-linkedin"></i>
    //           </a>
    //           <a href="#" className="social-icon">
    //             <i className="fa-brands fa-facebook"></i>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="lg:col-span-2 md:col-span-3">
    //       <img
    //         src="./assets/person.png"
    //         className="w-2/3 mx-auto md:w-full max-w-96 md:mt-0 mt-5"
    //         alt=""
    //       />
    //     </div>
    //   </div>
    // </section>
  );
}

export default Home;
