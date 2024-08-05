'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        After earning my degree in <span className='font-medium'>Computer Science</span>{' '}
        from Sant Gadge Baba University, I discovered my true passion for
        programming. To pursue this passion, I enrolled in a full-stack
        development bootcamp at{' '}
        <span className='font-medium'>Newton School</span>, where I honed my
        skills in{' '}
        <span className='font-medium'>full-stack web development</span>.{' '}
        <span className='italic'>What excites me most about programming</span>{' '}
        is the thrill of problem-solving and the satisfaction of turning complex
        challenges into elegant solutions. My primary tech stack includes{' '}
        <span className='font-medium'>
          React, Next.js, TypeScript, and Tailwind CSS
        </span>
        . I&apos;m also skilled in Material-UI, Styled Components, and Redux, and I&apos;m
        always eager to learn and integrate new technologies into my projects.
        Currently, I am seeking a{' '}
        <span className='font-medium'>full-time position</span> as a frontend
        developer where I can apply my expertise and continue growing in the
        field.
      </p>

      <p>
        <span className='italic'>Outside of coding</span>, I&apos;m passionate about
        traveling and exploring new places. Discovering different cultures,
        landscapes, and cuisines keeps me inspired and fuels my creativity both
        personally and professionally. Whether it&apos;s a weekend getaway or an
        adventurous trip abroad, I love the experience of seeing the world from
        new perspectives.
      </p>
    </motion.section>
  );
}
