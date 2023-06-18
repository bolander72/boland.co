// @ts-nocheck

'use client'

import React, { useEffect, useState } from 'react'

export default function TextEffect() {
   useEffect(() => {
      const words = document.getElementsByClassName('word-te7');
      let wordArray = [];
      let currentWord = 0;
      const classLetter = "inline-block relative float-left transform-letter-te7"

      const splitLetters = (word) => {
         const content = word.innerHTML;
         word.innerHTML = '';
         let letters = [];
         for (var i = 0; i < content.length; i++) {
            var letter = document.createElement('span');
            letter.className = classLetter;
            letter.innerHTML = content.charAt(i) === " " ? "&nbsp;" : content.charAt(i);
            word.appendChild(letter);
            letters.push(letter);
         }

         wordArray.push(letters);
      }

      words[currentWord].style.opacity = 1;
      for (let i = 0; i < words.length; i++) {
         splitLetters(words[i]);
      }

      const changeWord = () => {
         let cw = wordArray[currentWord];
         let nw = currentWord === words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];

         for (var i = 0; i < cw.length; i++) {
            animateLetterOut(cw, i);
         }

         if (nw) {
            for (var j = 0; j < nw.length; j++) {
               nw[j].className = `${classLetter} transform-behind-te7`;
               nw[0].parentElement.style.opacity = 1;
               animateLetterIn(nw, j);
            }
         }
         else return

         currentWord = (currentWord === wordArray.length - 1) ? 0 : currentWord + 1;
      }

      const animateLetterOut = (cw, i) => {
         setTimeout(function () {
            cw[i].className = `${classLetter} transform-out-te7`;
         }, i * 80);
      }

      const animateLetterIn = (nw, i) => {
         setTimeout(function () {
            nw[i].className = `${classLetter} transform-in-te7`;
         }, 340 + (i * 80));
      }

      const setIntervalX = (callback, delay, repetitions) => {
         let x = 0
         const intervalID = window.setInterval(() => {
            callback();
            if (++x === (repetitions * words.length - 1)) {
               window.clearInterval(intervalID)
            }
         }, delay)
      }

      setIntervalX(changeWord, 3000, 3) //Here you can set animation duration (3000 = 3s) and repetition number (3 times)

   }, [])

   const nouns = [
      '(d)app',
      'campaign',
      'demo',
      'event',
      'feature',
      'product',
      'project',
      'website'
   ]

   return nouns.map((noun) => (
      <div
         key={noun}
         className='flex flex-nowrap absolute w-auto opacity-0 word-te7'
      >
         {noun}
      </div>
   ))
}