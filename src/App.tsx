import PortfolioLayout from "./Layout";
import Hero from "./Hero";

function App() {
  return (
    <PortfolioLayout>
      <Hero/>

      

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