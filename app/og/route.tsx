import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import { createCanvas } from 'canvas';

export async function GET(req: NextRequest) {
   const { searchParams } = req.nextUrl;
   const postTitle = searchParams.get('title');
   // const font = fetch(
   //    new URL('../../public/fonts/kaisei-tokumin-bold.ttf', import.meta.url)
   // ).then((res) => res.arrayBuffer());
   // const fontData = await font;

   // Utility function to generate a random integer between min and max (inclusive)
   function getRandomInt(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   // Utility function to generate a random color in rgba format
   function getRandomColor(): string {
      const r = getRandomInt(0, 255);
      const g = getRandomInt(0, 255);
      const b = getRandomInt(0, 255);
      const a = Math.random().toFixed(2); // alpha between 0 and 1
      return `rgba(${r},${g},${b},${a})`;
   }

   // Function to add noise to a specified region of the canvas
   function addNoiseToRegion(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number): void {
      const imageData = ctx.getImageData(x, y, width, height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
         const noise = getRandomInt(-30, 30);
         data[i] = Math.min(255, Math.max(0, data[i] + noise));     // Red
         data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise)); // Green
         data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise)); // Blue
         // Alpha (data[i + 3]) remains unchanged
      }
      ctx.putImageData(imageData, x, y);
   }

   // Function to create an abstract noisy gradient background
   function createAbstractNoisyGradientBackground(width: number, height: number, outputPath?: string) {
      const canvas = createCanvas(width, height);
      // Add canvas background
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#0A0A0A';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Fill the canvas with random gradients
      for (let i = 0; i < 10; i++) {
         const x = getRandomInt(0, canvas.width);
         const y = getRandomInt(0, canvas.height);
         const gradWidth = getRandomInt(canvas.width / 4, canvas.width / 2);
         const gradHeight = getRandomInt(canvas.height / 4, canvas.height / 2);
         const gradient = ctx.createLinearGradient(x, y, x + gradWidth, y + gradHeight);
         gradient.addColorStop(0, getRandomColor());
         gradient.addColorStop(1, getRandomColor());

         ctx.fillStyle = gradient;
         ctx.fillRect(x, y, gradWidth, gradHeight);

         // Add noise to the current gradient rectangle
         addNoiseToRegion(ctx as unknown as CanvasRenderingContext2D, x, y, gradWidth, gradHeight);
      }

      // // Add noise
      // const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      // const data = imageData.data;
      // for (let i = 0; i < data.length; i += 4) {
      //    const noise = getRandomInt(-30, 30);
      //    data[i] = Math.min(255, Math.max(0, data[i] + noise));     // Red
      //    data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise)); // Green
      //    data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise)); // Blue
      //    // Alpha (data[i + 3]) remains unchanged
      // }
      // ctx.putImageData(imageData, 0, 0);

      // Save the canvas as an image file
      const buffer = canvas.toBuffer('image/png');

      return buffer.toString('base64');
   }

   return new ImageResponse(
      (
         <div
            style={{
               height: '100%',
               width: '100%',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'flex-start',
               justifyContent: 'center',
               background: `url("data:image/png;base64,${createAbstractNoisyGradientBackground(1920, 1080)}")`,
            }}
         >
            <div
               style={{
                  marginLeft: 190,
                  marginRight: 190,
                  display: 'flex',
                  fontSize: 130,
                  fontFamily: 'Kaisei Tokumin',
                  letterSpacing: '-0.05em',
                  fontStyle: 'normal',
                  color: 'white',
                  lineHeight: '120px',
                  whiteSpace: 'pre-wrap',
               }}
            >
               {postTitle}
            </div>
         </div>
      ),
      {
         width: 1920,
         height: 1080,
         // fonts: [
         //    {
         //       name: 'Kaisei Tokumin',
         //       data: fontData,
         //       style: 'normal',
         //    },
         // ],
      }
   );
}