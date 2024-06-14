'use client'

import { Title } from '@/components/title'
import { Button } from '@/components/ui/button'
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
import { Download, Maximize, RefreshCw } from 'lucide-react'
import useNoisyShapes from '@/hooks/use-noisy-shapes'
import { useEffect, useState } from 'react'
import UAParser from 'ua-parser-js'

const formSchema = z.object({
  count: z.coerce.number().min(1).max(100),
  minWidth: z.coerce.number().min(1).max(500),
  maxWidth: z.coerce.number().min(1).max(500),
  minHeight: z.coerce.number().min(1).max(500),
  maxHeight: z.coerce.number().min(1).max(500),
  cornerRadius: z.coerce.number().min(0).max(500),
  stops: z.coerce.number().min(1).max(5),
  level: z.coerce.number().min(0).max(150),
  colors: z.array(z.string().optional()),
  blur: z.coerce.number().min(0).max(200)
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
  level: 30,
  blur: 0
}

export default function Page() {
  const [isSafari, setIsSafari] = useState(false)
  const { id, refresh, download } = useNoisyShapes({
    defaultValues
  })

  useEffect(() => {
    const parser = new UAParser()
    const results = parser.getResult()

    setIsSafari(results.browser.name === 'Safari')
  }, [])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues
  })

  const watchStops = form.watch('stops')
  const watchMinWidth = form.watch('minWidth')
  const watchMinHeight = form.watch('minHeight')

  function onSubmit(values: z.infer<typeof formSchema>) {
    refresh({ ...values })
  }

  return (
    <section className='space-y-4'>
      <Title>Noisy Shapes</Title>
      <div className='relative'>
        <canvas className='aspect-video w-full rounded-md border' id={id} />
        <div className='absolute left-3 top-3 text-sm text-primary'>
          <Button
            variant='ghost'
            size='icon'
            type='button'
            onClick={() => {
              const canvas = document.getElementById(id) as HTMLCanvasElement
              canvas.toBlob(blob =>
                window.open(URL.createObjectURL(blob as Blob), '_blank')
              )
            }}
          >
            <Maximize />
          </Button>
        </div>
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
            onClick={form.handleSubmit(onSubmit)}
          >
            <RefreshCw />
          </Button>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
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
                    max={100}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='grid grid-cols-2 gap-4'>
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
          <div className='grid grid-cols-2 gap-4'>
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
          {!isSafari && (
            <FormField
              control={form.control}
              name='blur'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blur</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={String(defaultValues.blur)}
                      {...field}
                      type='number'
                      min={0}
                      max={200}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
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
