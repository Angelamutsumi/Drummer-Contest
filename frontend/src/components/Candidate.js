import React from 'react';

export default function Candidate({ candidate }) {
	const { name, votes, percentage } = candidate;
	return (
		<div>
			{name} - {votes}
		</div>
	);
}
