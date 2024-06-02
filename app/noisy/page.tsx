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
import { Download } from 'lucide-react'

const formSchema = z.object({
  text: z.string().max(12),
  stops: z.coerce.number().min(1).max(2500),
  level: z.coerce.number().min(0).max(150),
  colors: z.array(z.string().optional())
})

export default function Page() {
  const [submittedText, setSubmittedText] = useState('Lorem Ipsum')
  const { base64Image, refresh, download, id } = useNoisyGradient()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: 'Lorem Ipsum',
      stops: 2,
      level: 8,
      colors: []
    }
  })

  const watchStops = form.watch('stops')

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
          style={{ backgroundImage: `url(${base64Image})` }}
          id={id}
        />
        <div className='absolute right-3 top-3 text-sm text-white'>
          <Button
            variant='ghost'
            size='icon'
            type='button'
            onClick={() => {
              download({ level: form.getValues('level') })
            }}
          >
            <Download />
          </Button>
        </div>
        <div className='text-semibold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-2xl text-white'>
          {submittedText ?? 'Lorem Ipsum'}
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
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
          {watchStops >= 1 && watchStops <= 5 && (
            <div>
              <FormLabel className='mb-3 flex w-full cursor-pointer items-center justify-between'>
                <span>
                  Manual Colors <sup className='text-xs'>(optional)</sup>
                </span>
              </FormLabel>
              <div className='space-y-2'>
                {Array.from({ length: watchStops }).map((_, index) => (
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
                                : index === Number(form.getValues('stops')) - 1
                                  ? '...'
                                  : '...'
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
                ))}
              </div>
            </div>
          )}
          <FormField
            control={form.control}
            name='level'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Noise Level</FormLabel>
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
            <Button type='submit' variant='outline'>Refresh</Button>
          </div>
        </form>
      </Form>
    </section>
  )
}
