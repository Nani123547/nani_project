import PortfolioLayout from "./Layout";

function App() {
  return (
    <PortfolioLayout>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20"
      >
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-green-400">Full-Stack</span> <br />
            Developer
          </h2>

          <p className="mt-6 text-gray-400">
            Building digital experiences that merge creativity with technology.
          </p>

          <p className="mt-2 text-gray-500 text-sm">
            Specializing in modern web development and AI systems.
          </p>

          <button className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-black font-semibold transition">
            Let&apos;s Connect
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-green-500 shadow-[0_0_40px_rgba(34,197,94,0.6)]">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-20">
        <h2 className="text-2xl font-bold text-green-400">
          Technical Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-green-500 transition">
            <h3 className="font-semibold mb-2">Frontend Development</h3>
            <p className="text-sm text-gray-400">
              React, Tailwind CSS, JavaScript
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-green-500 transition">
            <h3 className="font-semibold mb-2">Backend Development</h3>
            <p className="text-sm text-gray-400">
              Python, Node.js, MySQL
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-green-500 transition">
            <h3 className="font-semibold mb-2">AI / ML</h3>
            <p className="text-sm text-gray-400">
              TensorFlow, OpenCV, NLP
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-20">
        <h2 className="text-2xl font-bold text-green-400">Projects</h2>

        <p className="mt-4 text-gray-400">
          Here are some of my projects...
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2 className="text-2xl font-bold text-green-400">Contact</h2>

        <div className="mt-4 text-gray-400 space-y-2">
          <p>Email: koteswararaokanaparthi11@gmail.com</p>
          <p>Phone: 551-220-7828</p>
        </div>
      </section>

    </PortfolioLayout>
  );
}

export default App;