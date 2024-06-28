'use client'

import Prose from '@/components/prose'
import { pages } from '@/.velite'
import { Title } from '@/components/title'
import { MDXContent } from '@/components/mdx-content'
import { LineChart } from '@tremor/react'
import { Subtitle } from '@/components/subtitle'
import { useTheme } from 'next-themes'

const chartdata = [
  { date: '2023', RevenueIndex: 0 },
  { date: 'February, 2023', RevenueIndex: 0 },
  { date: 'March, 2023', RevenueIndex: 0 },
  { date: 'April, 2023', RevenueIndex: 0 },
  { date: 'May, 2023', RevenueIndex: 0 },
  { date: 'June, 2023', RevenueIndex: 0 },
  { date: 'July, 2023', RevenueIndex: 100 },
  { date: 'August, 2023', RevenueIndex: 133.25 },
  { date: 'September, 2023', RevenueIndex: 133.25 },
  { date: 'October, 2023', RevenueIndex: 133.25 },
  { date: 'November, 2023', RevenueIndex: 133.25 },
  { date: 'December, 2023', RevenueIndex: 133.25 },
  { date: 'January, 2024', RevenueIndex: 133.25 },
  { date: 'February, 2024', RevenueIndex: 0 },
  { date: 'March, 2024', RevenueIndex: 200 },
  { date: 'April, 2024', RevenueIndex: 202.42 },
  { date: 'May, 2024', RevenueIndex: 200 },
  { date: 'Today', RevenueIndex: 125 }
]

function shorthandDollarFormatter(number: number) {
  let formattedNumber

  if (number >= 1e9) {
    formattedNumber = `${(number / 1e9).toFixed(1)}B`
  } else if (number >= 1e6) {
    formattedNumber = `${(number / 1e6).toFixed(1)}M`
  } else if (number >= 1e3) {
    formattedNumber = `${(number / 1e3).toFixed(1)}K`
  } else {
    formattedNumber = number.toFixed(0)
  }

  return `$${formattedNumber}`
}

export default function Page() {
  const page = pages.find(page => page.slug === 'stats')
  const { theme } = useTheme()

  return (
    <section className='w-full space-y-4'>
      <Title>{page.title}</Title>
      <Prose>
        <MDXContent code={page.body} />
      </Prose>
      <div className='space-y-4'>
        <Subtitle>Monthly Revenue</Subtitle>
        <LineChart
          data={chartdata}
          index='date'
          categories={['RevenueIndex']}
          colors={[theme === 'dark' ? 'green-500' : 'green-600']}
          valueFormatter={shorthandDollarFormatter}
          showAnimation={true}
          animationDuration={2000}
          showTooltip={false}
          showLegend={false}
          startEndOnly
          yAxisWidth={48}
          autoMinValue={true}
          minValue={0}
          maxValue={250}
          showYAxis={false}
          showGridLines={false}
          curveType='natural'
          enableLegendSlider={false}
          className='pointer-events-none'
        />
      </div>
    </section>
  )
}
