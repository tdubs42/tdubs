import ProjectCard from "@/components/ProjectCard";
import CallToAction from "@/components/CallToAction";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<CallToAction/>
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
				<ProjectCard/>
				<ProjectCard/>
				<ProjectCard/>
				<ProjectCard/>
			</div>
			<div className="flex justify-items-center w-full">
				<button className="btn btn-primary my-4">
					<Link href={"/projects"} className="text-primary-content capitalize">view all projects</Link>
				</button>
			</div>

		</>
	)
}
