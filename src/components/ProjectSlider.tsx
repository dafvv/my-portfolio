import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ProjectItem {
  id: string;
  projectNumber: string;
  title: string;
  description: string;
  stack: string[];
  previewImage?: string;
  link?: string;
  github?: string;
  metrics?: string[];
}

interface ProjectSliderProps {
  projects: ProjectItem[];
}

export default function ProjectSlider({ projects }: ProjectSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const total = projects.length;
  const currentProject = projects[currentIndex] || projects[0];

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [total]);

  if (!projects || projects.length === 0) {
    return (
      <div className="p-8 font-mono text-[20px]">
        No projects found.
      </div>
    );
  }

  const formattedIndex = String(currentIndex + 1).padStart(2, '0');
  const formattedTotal = String(total).padStart(2, '0');

  // Swipe animation variants for the project preview image box
  const swipeVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  // Pure fade-in/fade-out animation variants for text
  const fadeVariants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
      {/* Left Column: Project Overview & Stack (Text with Fade In/Out) */}
      <div className="lg:col-span-5 flex flex-col space-y-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`info-${currentProject.id}`}
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="flex flex-col space-y-10"
          >
            {/* Project Title Block */}
            <div>
              <h2 className="font-mono text-[28px] sm:text-[32px] uppercase text-[#191919] dark:text-[#f2f0ef] tracking-tight">
                {formattedIndex}/{formattedTotal} {currentProject.title}
              </h2>
              <div className="h-px bg-[#191919] dark:bg-[#f2f0ef] w-full mt-3 mb-5" />
              <p className="font-sans text-[18px] sm:text-[20px] text-[#191919] dark:text-[#f2f0ef] leading-relaxed">
                {currentProject.description}
              </p>
            </div>

            {/* Stack Block - 2 Column Grid */}
            <div>
              <h3 className="font-mono text-[28px] sm:text-[32px] uppercase text-[#191919] dark:text-[#f2f0ef] tracking-tight">
                STACK
              </h3>
              <div className="h-px bg-[#191919] dark:bg-[#f2f0ef] w-full mt-3 mb-5" />
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 list-disc ms-8 font-sans text-[18px] sm:text-[20px] text-[#191919] dark:text-[#f2f0ef]">
                {currentProject.stack.map((tool, idx) => (
                  <li key={idx} className="leading-normal">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Column: Preview Showcase (Swipe Animation) & Controls */}
      <div className="lg:col-span-7 flex flex-col space-y-6">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`preview-${currentProject.id}`}
            custom={direction}
            variants={swipeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full aspect-[16/9] min-h-[310px] bg-[#d9d9d9] dark:bg-[#262626] border border-[#191919] dark:border-[#f2f0ef] flex flex-col items-center justify-center relative overflow-hidden shadow-sm"
          >
            {currentProject.previewImage ? (
              <img
                src={currentProject.previewImage}
                alt={`${currentProject.title} preview`}
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-center space-y-3 p-8">
                <span className="font-mono text-[36px] font-bold text-[#191919] dark:text-[#f2f0ef]">
                  {formattedIndex}
                </span>
                <span className="font-mono text-[20px] uppercase text-[#191919] dark:text-[#f2f0ef] max-w-md">
                  {currentProject.title}
                </span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls & Links Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          {/* Navigation Controls: Left and Right Arrows */}
          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={prevProject}
              aria-label="Previous project"
              className="px-4 py-3 border border-[#191919] dark:border-[#f2f0ef] bg-[#d9d9d9] dark:bg-[#262626] text-[#191919] dark:text-[#f2f0ef] font-mono text-[14px] uppercase flex items-center space-x-2 transition-transform hover:-translate-x-1 focus-visible:ring-2 select-none cursor-pointer"
            >
              <img src="/media/icons/arrow-left.svg" alt="Previous" className="w-4 h-4 dark:invert" />
              <span>Prev</span>
            </button>
            <button
              type="button"
              onClick={nextProject}
              aria-label="Next project"
              className="px-4 py-3 border border-[#191919] dark:border-[#f2f0ef] bg-[#d9d9d9] dark:bg-[#262626] text-[#191919] dark:text-[#f2f0ef] font-mono text-[14px] uppercase flex items-center space-x-2 transition-transform hover:translate-x-1 focus-visible:ring-2 select-none cursor-pointer"
            >
              <span>Next</span>
              <img src="/media/icons/arrow-right.svg" alt="Next" className="w-4 h-4 dark:invert" />
            </button>
          </div>

          {/* Right-aligned Live Demo & Source Code Hyperlinks with Fade Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`links-${currentProject.id}`}
              variants={fadeVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="flex items-center space-x-6 ml-auto"
            >
              {currentProject.link && (
                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 font-mono text-[16px] uppercase underline underline-offset-4 hover:opacity-75 focus-visible:ring-2"
                >
                  <span>Live Demo</span>
                  <img src="/media/icons/external-link.svg" alt="External" className="w-4 h-4 dark:invert" />
                </a>
              )}
              {currentProject.github && (
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 font-mono text-[16px] uppercase underline underline-offset-4 hover:opacity-75 focus-visible:ring-2"
                >
                  <span>Source Code</span>
                  <img src="/media/icons/git-branch.svg" alt="Git Branch" className="w-4 h-4 dark:invert" />
                </a>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
