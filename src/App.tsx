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
    
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-green-500 transition hover:scale-105">
      <h3 className="font-semibold text-lg mb-2">
        Frontend Development
      </h3>
      <p className="text-sm text-gray-400 leading-7">
        React.js, Tailwind CSS, JavaScript, HTML, CSS
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-green-500 transition hover:scale-105">
      <h3 className="font-semibold text-lg mb-2">
        Backend Development
      </h3>
      <p className="text-sm text-gray-400 leading-7">
        Python, Flask, Node.js, Java, C, OOP, REST APIs
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-green-500 transition hover:scale-105">
      <h3 className="font-semibold text-lg mb-2">
        AI / Machine Learning
      </h3>
      <p className="text-sm text-gray-400 leading-7">
        TensorFlow, OpenCV, CNN, NLP, Machine Learning
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-green-500 transition hover:scale-105">
      <h3 className="font-semibold text-lg mb-2">
        Database & SQL
      </h3>
      <p className="text-sm text-gray-400 leading-7">
        MySQL, SQL, Query Optimization
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-green-500 transition hover:scale-105">
      <h3 className="font-semibold text-lg mb-2">
        Data Libraries
      </h3>
      <p className="text-sm text-gray-400 leading-7">
        Pandas, NumPy, Matplotlib
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-green-500 transition hover:scale-105">
      <h3 className="font-semibold text-lg mb-2">
        Tools & Platforms
      </h3>
      <p className="text-sm text-gray-400 leading-7">
        Git, Linux, Ubuntu, Windows, macOS
      </p>
    </div>
  </div>
</section>

      {/* Projects Section */}
      <section id="projects" className="mb-20">
        <h2 className="text-3xl font-bold text-green-400 mb-8">
           Projects
        </h2>

  <div className="grid md:grid-cols-3 gap-6">
    
    {/* Project 1 */}
    <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-green-500 hover:scale-105 transition duration-300 shadow-lg">
      <h3 className="text-xl font-semibold mb-3 text-white">
        Traffic Sign Recognition
      </h3>
      <p className="text-sm text-gray-400 leading-7 mb-4">
        Built a CNN-based traffic sign detection and driver alerting system
        using TensorFlow and OpenCV with <span className="text-green-400 font-semibold">93% accuracy</span>.
      </p>

      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 text-xs bg-gray-800 rounded-full">Python</span>
        <span className="px-3 py-1 text-xs bg-gray-800 rounded-full">TensorFlow</span>
        <span className="px-3 py-1 text-xs bg-gray-800 rounded-full">OpenCV</span>
        <span className="px-3 py-1 text-xs bg-gray-800 rounded-full">CNN</span>
      </div>
    </div>

    {/* Project 2 */}
    <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-green-500 hover:scale-105 transition duration-300 shadow-lg">
      <h3 className="text-xl font-semibold mb-3 text-white">
        Bridges Puzzle Solver
      </h3>
      <p className="text-sm text-gray-400 leading-7 mb-4">
        Developed a capstone project using backtracking, graph theory,
        and heuristic search to solve Hashiwokakero puzzles with GUI visualization.
      </p>

      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 text-xs bg-gray-800 rounded-full">Python</span>
        <span className="px-3 py-1 text-xs bg-gray-800 rounded-full">Tkinter</span>
        <span className="px-3 py-1 text-xs bg-gray-800 rounded-full">Graphs</span>
        <span className="px-3 py-1 text-xs bg-gray-800 rounded-full">Algorithms</span>
      </div>
    </div>

    {/* Project 3 */}
    <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-green-500 hover:scale-105 transition duration-300 shadow-lg">
      <h3 className="text-xl font-semibold mb-3 text-white">
        Air Pollution Monitoring
      </h3>
      <p className="text-sm text-gray-400 leading-7 mb-4">
        Designed an IoT-based air quality monitoring system using sensors
        and ThingSpeak Cloud with <span className="text-green-400 font-semibold">97% detection accuracy</span>.
      </p>

      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 text-xs bg-gray-800 rounded-full">IoT</span>
        <span className="px-3 py-1 text-xs bg-gray-800 rounded-full">Arduino</span>
        <span className="px-3 py-1 text-xs bg-gray-800 rounded-full">Sensors</span>
        <span className="px-3 py-1 text-xs bg-gray-800 rounded-full">ThingSpeak</span>
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
<section
  id="contact"
  className="mt-24 mb-12 rounded-3xl border border-gray-800 bg-gradient-to-r from-gray-900 to-black p-10 shadow-xl"
>
  <div className="text-center">
    <h2 className="text-4xl font-bold text-green-400">
      Let’s Work Together
    </h2>

    <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto leading-8">
      I’m currently open to Full-Stack Developer, Python Developer,
      and AI/ML opportunities. Let’s connect and build impactful solutions together.
    </p>
  </div>

  <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-6">
    <a
      href="mailto:koteswararaokanaparthi11@gmail.com"
      className="px-6 py-3 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-600 transition"
    >
      📧 Email Me
    </a>

    <a
      href="tel:+15512207828"
      className="px-6 py-3 rounded-xl border border-gray-700 text-white hover:border-green-500 transition"
    >
      📱 Call Me
    </a>
  </div>

  <div className="mt-8 text-center text-gray-400 space-y-2">
    <p>koteswararaokanaparthi11@gmail.com</p>
    <p>+1 (551) 220-7828</p>
  </div>
 </section>
    </PortfolioLayout>
  );
}

export default App;