interface Props {
  children: string
  author: string
  work?: string
}

const Blockquote = ({ children, author, work }: Props) => (
  <div className='px-8'>
    <blockquote className=''>{children}</blockquote>
    <div className='mt-4 flex flex-col items-end'>
      <div>{author}</div>
      {work && <cite>{work}</cite>}
    </div>
  </div>
)

export default Blockquote
