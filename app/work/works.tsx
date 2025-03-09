'use client'

import { useSelectedLayoutSegment } from 'next/navigation'
import { ProjectsQueryResult } from '../../sanity/sanity-types'
import LinkFrame from '@/components/LinkFrame'

export default function Works({ projects }: { projects: ProjectsQueryResult }) {
  const service = useSelectedLayoutSegment()

  // Filter projects based on the selected service
  const filteredProjects = projects.filter(project => project.category === service)

  return (
    <>
      {filteredProjects.length > 0 ? (
        <div className="flex flex-wrap gap-4 justify-center">
          {filteredProjects.map(project => (
            <LinkFrame
              key={project._id}
              href={`/work/${project.category}/${project.slug}`}
              title={project.title}
              subtitle={project.subtitle}
              banner={project.banner}
              className="w-2/3 md:w-3/8 lg:w-1/4 aspect-square p-4"
              innerClassName="border border-accent w-full aspect-square p-4 rounded hover:bg-accent/30 transition-colors duration-300 relative bg-black/50 backdrop-blur-lg"
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[50vh]">
          <p className="text-lg text-center text-gray-400">Sort by category on the left. "Compositions" are scored works, where I was not the only performer. "Performances" are improvisations and compositions where I was the performer. </p>
        </div>
      )}
    </>
  )
}
