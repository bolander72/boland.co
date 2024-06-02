'use client'

import { Title } from '@/components/title'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import useNoisyCover from '@/hooks/use-noisy-cover'
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

const formSchema = z.object({
  stops: z.coerce.number().min(1).max(2500),
  level: z.coerce.number().min(0).max(150),
  colors: z.array(z.string().optional())
})

const defaultValues = {
  stops: 2,
  colors: [],
  level: 30
}

export default function Page() {
  const { id, refresh, download } = useNoisyCover({
    defaultValues
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stops: defaultValues.stops,
      level: defaultValues.level,
      colors: defaultValues.colors
    }
  })

  const watchStops = form.watch('stops')

  function onSubmit(values: z.infer<typeof formSchema>) {
    refresh({ ...values })
  }

  return (
    <section className='w-full space-y-6'>
      <Title>Noisy Cover</Title>
      <div className='relative'>
        <canvas className='aspect-video w-full rounded-2xl border' id={id} />
        <div className='absolute right-3 top-3 text-sm text-primary'>
          <Button
            variant='ghost'
            size='icon'
            type='button'
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
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
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
