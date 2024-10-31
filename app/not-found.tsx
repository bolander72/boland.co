export default function NotFound() {
  return (
    <section aria-labelledby='not-found-title'>
      <h1 id='not-found-title' className='text-xl font-medium'>
        Not Found
      </h1>
      <p className='text-base' role='alert'>
        This page doesn&apos;t exist.
      </p>
    </section>
  )
}
