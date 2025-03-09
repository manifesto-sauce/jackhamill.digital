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
        .filter(
          project => !service || 
            project.category === service
        )
        .map(project => (
          <LinkFrame
            key={project._id}
            href={/work/${project.category}/${project.slug}}
            title={project.title}
            subtitle={project.subtitle}
            banner={project.banner}
        className='w-2/3 md:w-3/8 lg:w-1/4 aspect-square p-4'
            innerClassName='border border-accent w-full aspect-square p-4 rounded hover:bg-accent/30 transition-colors duration-300 relative bg-black/50 backdrop-blur-lg'
          />
        ))}
    </>
  )
} 
