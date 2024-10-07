interface Props {
  src: string
  topCaption?: string
  bottomCaption?: string
}

export default function NoteImage({ src, topCaption, bottomCaption }: Props) {
  return (
    <div>
      <img src={src} alt='' className='mb-2 rounded-md' />
      {topCaption && <div className='text-xs'>{topCaption}</div>}
      {bottomCaption && <div className='text-xs'>{bottomCaption}</div>}
    </div>
  )
}
