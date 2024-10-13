interface Props {
  children: string
  author: string
  work?: string
}

const Blockquote = ({ children, author, work }: Props) => (
  <>
    <blockquote className='border-x px-4'>{children}</blockquote>
    <div className='mt-4 flex flex-col items-end'>
      <div>{author}</div>
      {work && <cite>{work}</cite>}
    </div>
  </>
)

export default Blockquote
