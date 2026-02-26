import React, { useState } from 'react'

const Contact: React.FC = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// For now just show a simple confirmation. Replace with API call later.
		alert(`Thanks ${name || 'there'} — your message was received.`)
		setName('')
		setEmail('')
		setMessage('')
	}

	return (
		<section className="max-w-3xl mx-auto px-6 py-12">
			<h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
			<p className="text-gray-600 mb-8">Have questions or want to work together? Send us a message below.</p>

			<form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400"
						placeholder="Your name"
						required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400"
						placeholder="you@example.com"
						required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
					<textarea
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						rows={6}
						className="w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400"
						placeholder="Write your message"
						required
					/>
				</div>

				<div className="flex items-center justify-between">
					<button
						type="submit"
						className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
					>
						Send message
					</button>
					<span className="text-sm text-gray-500">We'll reply within 2 business days.</span>
				</div>
			</form>
		</section>
	)
}

export default Contact

