'use client'

import { Title } from '@/components/title'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
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
import { Download, RefreshCw } from 'lucide-react'
import useNoisyShapes from '@/hooks/use-noisy-shapes'
import { useTheme } from 'next-themes'

const formSchema = z.object({
  text: z.string().max(12),
  count: z.coerce.number().min(1).max(7500),
  minWidth: z.coerce.number().min(1).max(500),
  maxWidth: z.coerce.number().min(1).max(500),
  minHeight: z.coerce.number().min(1).max(500),
  maxHeight: z.coerce.number().min(1).max(500),
  cornerRadius: z.coerce.number().min(0).max(500),
  stops: z.coerce.number().min(1).max(2500),
  level: z.coerce.number().min(0).max(150),
  colors: z.array(z.string().optional())
})

const defaultValues = {
  stops: 2,
  count: 50,
  minWidth: 50,
  maxWidth: 400,
  minHeight: 50,
  maxHeight: 400,
  cornerRadius: 30,
  colors: [],
  level: 30
}

export default function Page() {
  const { theme } = useTheme()
  const [submittedText, setSubmittedText] = useState('Lorem Ipsum')
  const { id, refresh, download } = useNoisyShapes({
    defaultValues
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: 'Lorem Ipsum',
      count: defaultValues.count,
      stops: defaultValues.stops,
      minWidth: defaultValues.minWidth,
      maxWidth: defaultValues.maxWidth,
      minHeight: defaultValues.minHeight,
      maxHeight: defaultValues.maxHeight,
      cornerRadius: defaultValues.cornerRadius,
      level: defaultValues.level,
      colors: defaultValues.colors
    }
  })

  const watchStops = form.watch('stops')
  const watchMinWidth = form.watch('minWidth')
  const watchMinHeight = form.watch('minHeight')

  function onSubmit(values: z.infer<typeof formSchema>) {
    refresh({ ...values })
    setSubmittedText(values.text)
  }

  return (
    <section className='w-full space-y-6'>
      <Title>Noisy Shapes</Title>
      <div className='relative'>
        <canvas className='aspect-video w-full rounded-2xl border' id={id} />
        <div className='absolute right-3 top-3 text-sm text-primary'>
          <Button
            variant='ghost'
            size='icon'
            type='button'
            className='text-primary'
            onClick={() => download()}
          >
            <Download />
          </Button>
        </div>
        <div className='absolute bottom-3 left-3 text-sm text-primary'>
          <Button
            variant='ghost'
            size='icon'
            type='button'
            className='text-primary'
            onClick={() => onSubmit(form.getValues())}
          >
            <RefreshCw />
          </Button>
        </div>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-2xl font-semibold text-primary'>
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
            name='count'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Shape Count</FormLabel>
                <FormControl>
                  <Input
                    placeholder={String(defaultValues.count)}
                    {...field}
                    type='number'
                    min={1}
                    max={7500}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='grid grid-cols-2 gap-6'>
            <FormField
              control={form.control}
              name='minWidth'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Min. Width</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={String(defaultValues.minWidth)}
                      {...field}
                      type='number'
                      min={1}
                      max={500}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='maxWidth'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Max. Width</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={String(defaultValues.maxWidth)}
                      {...field}
                      type='number'
                      min={watchMinWidth}
                      max={500}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='grid grid-cols-2 gap-6'>
            <FormField
              control={form.control}
              name='minHeight'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Min. Height</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={String(defaultValues.minHeight)}
                      {...field}
                      type='number'
                      min={1}
                      max={500}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='maxHeight'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Max. Height</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={String(defaultValues.maxHeight)}
                      {...field}
                      type='number'
                      min={watchMinHeight}
                      max={500}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='cornerRadius'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Corner Radius</FormLabel>
                <FormControl>
                  <Input
                    placeholder={String(defaultValues.cornerRadius)}
                    {...field}
                    type='number'
                    min={0}
                    max={500}
                  />
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
                    defaultValue={[defaultValues.stops]}
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
                    defaultValue={[defaultValues.level]}
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
            <Button type='submit' variant='outline'>
              Refresh
            </Button>
          </div>
        </form>
      </Form>
    </section>
  )
}
