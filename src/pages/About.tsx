import React from "react";

const About: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-gray-700 mb-6">
        Diferencia Global Academy is dedicated to delivering high-quality,
        accessible education to learners around the world. We combine modern
        teaching methods with practical experience to help students grow their
        skills and careers.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            Empower learners with practical knowledge, mentorship, and
            opportunities that bridge the gap between education and meaningful
            work.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Our Approach</h2>
          <p className="text-gray-600">
            Hands-on projects, industry-aligned curricula, and a supportive
            community help learners apply skills in real-world contexts.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-3">Team</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="font-medium">Founders</div>
            <div className="text-sm text-gray-600">
              Experienced educators and industry pros focused on learner
              outcomes.
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="font-medium">Instructors</div>
            <div className="text-sm text-gray-600">
              Practitioners who teach through examples and real projects.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
