import React from 'react'

const Home: React.FC = () => {
  return (
    <main>
      {/* Hero section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl font-bold mb-4">Welcome to Diferencia Global Academy</h1>
          <p className="text-xl mb-8">
            Transform your career with hands-on training and real-world projects.
          </p>
          <a
            href="/apply"
            className="inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-md hover:bg-gray-100"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">Why Choose Us</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <h3 className="text-xl font-medium mb-2">Practical Curriculum</h3>
              <p className="text-gray-600">
                Courses built with industry experts focused on real projects and skills.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-2">Mentorship</h3>
              <p className="text-gray-600">
                One-on-one guidance from experienced professionals throughout your path.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-2">Community</h3>
              <p className="text-gray-600">
                Join a supportive network of peers and alumni to collaborate and grow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
