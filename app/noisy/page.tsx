'use client'

import { Title } from '@/components/title'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import useNoisyGradient from '@/hooks/use-noisy-gradient'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { cn } from '@/lib/utils'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible'
import { ChevronsUpDown } from 'lucide-react'

const formSchema = z.object({
  text: z.string().max(12),
  stops: z.coerce.number().min(1).max(2500),
  level: z.coerce.number().min(0).max(150),
  colors: z.array(z.string().optional())
})

export default function Page() {
  const [submittedText, setSubmittedText] = useState('Lorem Ipsum')
  const { base64ImageUrl, refresh } = useNoisyGradient()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: 'Lorem Ipsum',
      stops: 2,
      level: 8,
      colors: []
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    refresh({ ...values })
    setSubmittedText(values.text)
  }

  return (
    <section className='w-full space-y-6'>
      <Title>Noisy Gradient</Title>
      <div className='relative'>
        <canvas
          className='h-72 w-full rounded-2xl'
          style={{ backgroundImage: `url(${base64ImageUrl})` }}
          id='noisy'
        />
        {/* <div className='absolute bottom-3 left-3 text-sm text-white'>
          <Button
            variant='ghost'
            size='icon'
            type='button'
            onClick={() =>
              setBase64ImageUrl(
                createNoisyGradient({
                  stops: form.getValues('stops'),
                  level: form.getValues('level')
                })
              )
            }
          >
            <RefreshCw />
          </Button>
        </div> */}
        {/* <div className='absolute right-3 top-3 text-sm text-white'>
          <Button
            variant='ghost'
            size='icon'
            type='button'
            onClick={() => {
              const img = new Image()
              img.src = base64ImageUrl

              img.onload = () => {
                const canvas = document.createElement('canvas')
                canvas.width = 1920
                canvas.height = 1080

                const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

                canvas.toBlob(blob => {
                  const link = document.createElement('a')
                  link.href = URL.createObjectURL(blob as Blob)
                  link.download = 'noisy.webp'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }, 'noisy/webp')
              }
            }}
          >
            <Download />
          </Button>
        </div> */}
        <div className='text-semibold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-2xl text-white'>
          {submittedText ?? 'Lorem Ipsum'}
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <FormField
            control={form.control}
            name='text'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Display Text</FormLabel>
                <FormControl>
                  <Input placeholder='Lorem Ipsum' {...field} maxLength={12} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='stops'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color Stops</FormLabel>
                <FormControl>
                  {/* <Input
                     placeholder='2'
                     type='number'
                     {...field}
                     min={1}
                     max={2500}
                  /> */}
                  <Slider
                    defaultValue={[2]}
                    max={5}
                    min={1}
                    step={1}
                    onValueChange={value => field.onChange(value[0])}
                  />
                </FormControl>
                <FormDescription>{form.getValues('stops')}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {Number(form.getValues('stops')) <= 5 && (
            <Collapsible>
              <div className='space-y-2'>
                <CollapsibleTrigger className='w-full'>
                  <FormLabel className='flex w-full cursor-pointer items-center justify-between'>
                    <div>
                      Colors <sup className='text-xs'>(optional)</sup>
                    </div>
                    <div>
                      <ChevronsUpDown className='h-4 w-4' />
                    </div>
                  </FormLabel>
                </CollapsibleTrigger>
                <CollapsibleContent className='space-y-2'>
                  {Array.from({ length: Number(form.getValues('stops')) }).map(
                    (_, index) => (
                      <FormField
                        key={index}
                        control={form.control}
                        name={`colors.${index}`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl key={index}>
                              <Input
                                placeholder={
                                  index === 0
                                    ? '#00FFFF'
                                    : index ===
                                        Number(form.getValues('stops')) - 1
                                      ? '#C04CFD'
                                      : '#C04CFD'
                                }
                                type='text'
                                {...field}
                                className={cn(
                                  `border border-[${field.value}]text-[${field.value}]`
                                )}
                                style={{
                                  borderColor: field.value,
                                  boxShadow: field.value
                                    ? `0 0 0 1px ${field.value}`
                                    : ''
                                }}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )
                  )}
                </CollapsibleContent>
              </div>
            </Collapsible>
          )}
          <FormField
            control={form.control}
            name='level'
            render={({ field }) => (
              <FormItem className='flex flex-col pt-2'>
                <FormLabel className='mb-2'>Noise Level</FormLabel>
                <FormControl>
                  <Slider
                    defaultValue={[8]}
                    max={150}
                    min={0}
                    step={1}
                    onValueChange={value => field.onChange(value[0])}
                  />
                </FormControl>
                <FormDescription>{form.getValues('level')}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex justify-end'>
            <Button type='submit'>Submit</Button>
          </div>
        </form>
      </Form>
    </section>
  )
}
