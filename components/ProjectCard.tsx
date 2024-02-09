import React from 'react';
import Image from "next/image";

const ProjectCard = () => {
	return (
		<div className="card lg:card-side bg-base-300 shadow-xl p-2">
			<figure><Image src="/logos/logo.png" alt="Album" width={200} height={200} className="rounded-2xl"/></figure>
			<div className="card-body">
				<h2 className="card-title text-base-content">Project Name</h2>
				<p className="text-base-content">What does the project do?</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary text-primary-content">Visit</button>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;