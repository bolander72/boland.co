interface Props {
  src: string
  topCaption?: string
  bottomCaption?: string
}

export default function BlogImage({ src, topCaption, bottomCaption }: Props) {
  return (
    <div>
      <img src={src} className='mb-2 rounded-lg' />
      {topCaption && <div className='text-xs'>{topCaption}</div>}
      {bottomCaption && <div className='text-xs'>{bottomCaption}</div>}
    </div>
  )
}
