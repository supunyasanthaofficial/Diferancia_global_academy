import React from 'react'

const courses = [
	{
		title: 'Full Stack Web Development',
		desc: 'Learn modern web development: React, Node, databases, and deployment.',
		length: '12 weeks',
	},
	{
		title: 'Data Science',
		desc: 'Statistics, Python, machine learning, and practical projects.',
		length: '10 weeks',
	},
	{
		title: 'UX Design',
		desc: 'Design thinking, prototyping, and user research for real products.',
		length: '8 weeks',
	},
]

const Course: React.FC = () => {
	return (
		<section className="max-w-5xl mx-auto px-6 py-12">
			<header className="mb-8">
				<h1 className="text-4xl font-bold">Courses</h1>
				<p className="text-gray-600 mt-2">Explore our most popular programs and find the right fit for your goals.</p>
			</header>

			<div className="grid gap-6 md:grid-cols-3">
				{courses.map((c) => (
					<article key={c.title} className="bg-white p-6 rounded-lg shadow-sm flex flex-col">
						<h2 className="text-xl font-semibold mb-2">{c.title}</h2>
						<p className="text-gray-600 mb-4 flex-1">{c.desc}</p>
						<div className="flex items-center justify-between mt-4">
							<span className="text-sm text-gray-500">{c.length}</span>
							<a href="/apply" className="text-sm inline-flex items-center px-3 py-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Apply</a>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}

export default Course

