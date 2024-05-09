import backround from "../../../../src/assets/hero_img.jpg";

export default function Home() {
  const style = {
    backgroundImage: `url(${backround})`,
    backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    height: "90vh",
    // background: "rgba(0, 0, 0, 0.5)",
  };

//   const contentStyle = {
//     height: "100%",
//     width: "100%",
//     // backgroundColor: "rgba(0, 0, 0, 0.1)",
//   };

  return (
    <div className="flex justify-center items-center" style={style}>
      {/* <div className="opacity-50 absolute"></div> */}
      <div className="hero-content w-full md:w-2/3 p-3 space-y-4 mx-auto flex flex-col items-center">
        <h2 className="text-4xl text-white drop-shadow-lg font-bold text-center">Empower Your Operations with Next-Gen Machine Management</h2>
        <p className="text-white drop-shadow-lg text-sm text-center">
          Streamline your workflow and enhance efficiency with our comprehensive
          machine management solution. Explore advanced features for assigning,
          tracking, and accessing machine details effortlessly. Experience the
          future of industrial operations today
        </p>
        <button className="bg-green-700 py-2 px-4 rounded-sm text-white">Call to Action</button>
      </div>
    </div>
  );
}
