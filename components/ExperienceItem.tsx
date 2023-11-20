import Link from 'next/link'

type ExperienceItemsProps = {
  where: string
  as: string
  project: ProjectProps[]
  from: string
  to: string
}

type ProjectProps = {
  link: string
  project_name: string
  what: string[]
}

function Project({ link, project_name, what }: ProjectProps) {
  return (
    <div className='mb-2'>
      {link != '' ? (
        <Link
          href={link}
          target='_blank'
          aria-label='link to smart pln google play store'>
          <strong className='hover:underline text-sm'>{project_name}</strong>
        </Link>
      ) : (
        <strong className='hover:underline cursor-pointer text-sm'>
          {project_name}
        </strong>
      )}
      <ul className='list-disc px-4 mb-4'>
        {what.map((w, idx) => (
          <li className='text-md' key={idx}>
            {w}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ExperienceItem({
  where,
  as,
  project,
  from = '2019',
  to = '2019',
}: ExperienceItemsProps) {
  return (
    <div className='py-3'>
      <p className='py-2 flex items-center justify-between'>
        <strong className='text-base'>
          {as} at {where}
        </strong>

        <p>
    {`${from} ${to != "" ? " - " : ""} ${to}`}
        </p>
      </p>
      {project.map((item, idx) => (
        <Project key={idx} {...item} />
      ))}
    </div>
  )
}
