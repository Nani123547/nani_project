function Hero(){
    return  (

          <section
            id="home"
            className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20"
          >
            {/* Left Content */}
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-green-400">Hi, I’m Koteswararao Kanaparthi </span> <br />
                Full-Stack Developer | AI Engineer
              </h2>
    
              <p className="mt-6 text-gray-400">
                I build modern web applications, machine learning
                solutions, and scalable backend systems.
              </p>
    
              <p className="mt-2 text-gray-500 text-sm">
                Specializing in modern web development and AI systems.
              </p>
    
              <button className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-black font-semibold transition">
                Let&apos;s Connect
              </button>
            </div>
    
            {/* Right Image */}
          <div className="relative flex justify-center items-center mr-40">
            <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-green-500 shadow-[0_0_60px_rgba(34,197,94,0.6)]">
              <img
                src="./portfolio_image.jpeg"
                alt="Koteswararao Kanaparthi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
    )
}
export default Hero
