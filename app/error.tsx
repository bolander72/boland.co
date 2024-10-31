'use client'

export default function Error() {
  return (
    <section aria-labelledby='error-title'>
      <h1 id='error-title' className='text-xl font-medium'>
        Site Error
      </h1>
      <p className='text-base' role='alert'>
        Something went wrong.
      </p>
    </section>
  )
}
