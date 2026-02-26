import React from 'react'

const images = [
	'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop',
	'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&auto=format&fit=crop',
	'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80&auto=format&fit=crop',
	'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop',
	'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80&auto=format&fit=crop',
	'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80&auto=format&fit=crop',
]

const Gallery: React.FC = () => {
	return (
		<section className="max-w-6xl mx-auto px-6 py-12">
			<h1 className="text-3xl font-semibold mb-4">Gallery</h1>
			<p className="text-gray-600 mb-6">A few highlights from our community and projects.</p>

			<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
				{images.map((src, i) => (
					<div key={i} className="overflow-hidden rounded-lg bg-gray-100">
						<img
							src={src}
							alt={`Gallery ${i + 1}`}
							className="w-full h-56 object-cover transform hover:scale-105 transition duration-300"
						/>
					</div>
				))}
			</div>
		</section>
	)
}

export default Gallery

