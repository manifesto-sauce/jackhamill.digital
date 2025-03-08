'use client'

import Section from '@/components/Section'
import { useSelectedLayoutSegment } from 'next/navigation'
import { ProjectsQueryResult } from '../../sanity/sanity-types'
import LinkFrame from '@/components/LinkFrame'

export default function Works({ projects }: { projects: ProjectsQueryResult }) {
  const service = useSelectedLayoutSegment()

  return (
    <>
      {/* LinkFrame is the container for works, customize the classes to change things */}
      {projects
        .filter(project => !service || project.category === service)
        .map(project => (
          <LinkFrame
            key={project._id}
            href={`/work/${project.category}/${project.slug}`}
            title={project.title}
            subtitle={project.subtitle}
            banner={project.banner}
        className='w-1/2 md:w-1/4 lg:w-1/6 aspect-3/2 p-4'
            innerClassName='border border-accent w-full aspect-square p-4 rounded hover:bg-accent/30 transition-colors duration-300 relative bg-black/50 backdrop-blur-lg'
          />
        ))}
    </>
  )
}
