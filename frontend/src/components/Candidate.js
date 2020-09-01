import React from 'react';
import Position from './Position';
import Picture from './Picture';

export default function Candidate({ candidate, position }) {
	const { id, name, votes, percentage } = candidate;

	const imageSource = `${id}.jpg`;
	return (
		<div>
			<Position>{position}</Position>
			<Picture imageSource={imageSource} description={name} />
			{name} - {votes}
		</div>
	);
}
