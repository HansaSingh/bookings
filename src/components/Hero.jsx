import beach2 from "../assets/beach2.webp";
const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img className="top-0 left-0 w-full h-screen oject-cover" src={beach2} />
      <div className="bg-black/20 absolute top-0 left-0 w-full h-screen"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] m-auto absolute p-4">
          <p className="font-bold">All Inclusive</p>
          <h1 className="font-bold text-5xl md:text-6xl drop-shadow-2xl">
            Private Beaches & Getaways
          </h1>
          <p className="max-w-[600px] text-xl drop-shadow-2xl py-2">
            Take the first step, the rest will follow. Book the ticket, apply
            for the job, send the email, jump into the water. The rest gets
            easier from there.
          </p>
          <button className="bg-white text-black font-bold">Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
