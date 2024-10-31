interface Props {
  children: string
  author: string
  work?: string
}

const Blockquote = ({ children, author, work }: Props) => (
  <figure className='px-8'>
    <blockquote cite={work}>{children}</blockquote>
    <figcaption className='mt-4 flex flex-col items-end'>
      <span>{author}</span>
      {work && <cite>{work}</cite>}
    </figcaption>
  </figure>
)

export default Blockquote
