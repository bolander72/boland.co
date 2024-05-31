'use client'

import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function Nav() {
  const pathname = usePathname()

  // // Utility function to generate a random integer between min and max (inclusive)
  // function getRandomInt(min: number, max: number): number {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

  // // Utility function to generate a random color in rgba format
  // function getRandomColor(): string {
  //   const r = getRandomInt(0, 150);
  //   const g = getRandomInt(0, 150);
  //   const b = getRandomInt(0, 150);
  //   const a = Math.random().toFixed(2); // alpha between 0 and 1
  //   return `rgba(${r},${g},${b},${a})`;
  // }

  // // // Function to create a noisy gradient background
  // // function createNoisyGradientBackground(): void {
  // //   const body = document.body;
  // //   const canvas = document.createElement('canvas');
  // //   const ctx = canvas.getContext('2d');

  // //   if (!ctx) return;

  // //   canvas.width = window.innerWidth;
  // //   canvas.height = window.innerHeight;

  // //   // Create a gradient
  // //   const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  // //   gradient.addColorStop(0, getRandomColor());
  // //   gradient.addColorStop(0.33, getRandomColor());
  // //   gradient.addColorStop(1, getRandomColor());

  // //   // Apply the gradient
  // //   ctx.fillStyle = gradient;
  // //   ctx.fillRect(0, 0, canvas.width, canvas.height);

  // //   // Add noise
  // //   const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  // //   const data = imageData.data;
  // //   for (let i = 0; i < data.length; i += 4) {
  // //     const noise = getRandomInt(-50, 50);
  // //     data[i] += noise;     // Red
  // //     data[i + 1] += noise; // Green
  // //     data[i + 2] += noise; // Blue
  // //     // Alpha (data[i + 3]) remains unchanged
  // //   }
  // //   ctx.putImageData(imageData, 0, 0);

  // //   // Set the canvas as the body's background
  // //   body.style.backgroundImage = `url(${canvas.toDataURL()})`;
  // // }

  // // Function to create an abstract noisy gradient background
  // function createAbstractNoisyGradientBackground(): void {
  //   const body = document.body;
  //   const canvas = document.createElement('canvas');
  //   const ctx = canvas.getContext('2d');

  //   if (!ctx) return;

  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;

  //   // Fill the canvas with random gradients
  //   for (let i = 0; i < 10; i++) {
  //     const x = getRandomInt(0, canvas.width);
  //     const y = getRandomInt(0, canvas.height);
  //     const width = getRandomInt(canvas.width / 4, canvas.width / 2);
  //     const height = getRandomInt(canvas.height / 4, canvas.height / 2);
  //     const gradient = ctx.createLinearGradient(x, y, x + width, y + height);
  //     gradient.addColorStop(0, getRandomColor());
  //     gradient.addColorStop(1, getRandomColor());

  //     ctx.fillStyle = gradient;
  //     ctx.fillRect(x, y, width, height);
  //   }

  //   // Add noise
  //   const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  //   const data = imageData.data;
  //   for (let i = 0; i < data.length; i += 4) {
  //     const noise = getRandomInt(-30, 30);
  //     data[i] = Math.min(255, Math.max(0, data[i] + noise));     // Red
  //     data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise)); // Green
  //     data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise)); // Blue
  //     // Alpha (data[i + 3]) remains unchanged
  //   }
  //   ctx.putImageData(imageData, 0, 0);

  //   // Set the canvas as the body's background
  //   body.style.backgroundImage = `url(${canvas.toDataURL()})`;
  // }

  // // Adjust canvas size on window resize
  // window.addEventListener('resize', createAbstractNoisyGradientBackground);

  // // Create the initial background
  // createAbstractNoisyGradientBackground();

  return (
    <div className='mx-auto mb-12 max-w-lg px-4'>
      <nav className='flex flex-row space-x-6 space-y-0'>
        <div className='flex w-full items-center justify-between'>
          <div className='flex space-x-4'>
            <Link
              href='/'
              className={cn(
                'font-base text-lg text-blue-600 underline dark:text-blue-500',
                pathname === '/'
                  ? 'font-semibold'
                  : 'text-blue-600/90 dark:text-blue-500/90'
              )}
            >
              about
            </Link>
            <Link
              href='/blog'
              className={cn(
                'font-base text-lg text-blue-600 underline dark:text-blue-500',
                pathname === '/blog'
                  ? 'font-semibold'
                  : 'text-blue-600/90 dark:text-blue-500/90'
              )}
            >
              blog
            </Link>
          </div>
          <ModeToggle />
        </div>
      </nav>
    </div>
  )
}
