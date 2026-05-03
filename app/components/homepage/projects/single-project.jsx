import Link from 'next/link';
import { FaCode, FaPlay } from 'react-icons/fa';

const SingleProject = ({ project }) => {
  const { name, description, tools, role, code, demo } = project;

  return (
    <div className='group w-full h-fit flex flex-col relative cursor-default overflow-hidden px-3 md:px-8 py-[1.4rem] bg-[linear-gradient(90deg,#281e57_0%,#201435_100%)] shadow-2xl rounded-lg border border-[#1a1443]'>

      {/* Background SVG grid */}
      <div className="absolute left-0 top-0 flex justify-center opacity-40 pointer-events-none">
        <svg width="1170" height="403" viewBox="0 0 1170 403" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M1170 57.3509H0V56.5132H1170V57.3509Z" fill="white" fillOpacity="0.3"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M410.388 402.472L410.388 0.933594L411.226 0.933594L411.226 402.472L410.388 402.472Z" fill="white" fillOpacity="0.3"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M841.791 402.472L841.791 0.933594L842.628 0.933594L842.628 402.472L841.791 402.472Z" fill="white" fillOpacity="0.3"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M1014.35 402.472L1014.35 0.933594L1015.19 0.933594L1015.19 402.472L1014.35 402.472Z" fill="white" fillOpacity="0.3"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M928.071 402.472L928.071 0.933594L928.909 0.933594L928.909 402.472L928.071 402.472Z" fill="white" fillOpacity="0.3"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M1100.63 402.472L1100.63 0.933594L1101.47 0.933594L1101.47 402.472L1100.63 402.472Z" fill="white" fillOpacity="0.3"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M1170 143.631H0V142.793H1170V143.631Z" fill="white" fillOpacity="0.3"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M324.108 402.472L324.108 0.933594L324.946 0.933594L324.946 402.472L324.108 402.472Z" fill="white" fillOpacity="0.3"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M755.51 402.472L755.51 0.933594L756.348 0.933594L756.348 402.472L755.51 402.472Z" fill="white" fillOpacity="0.3"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M1170 229.911H0V229.074H1170V229.911Z" fill="white" fillOpacity="0.3"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M237.827 402.472L237.827 0.933594L238.665 0.933594L238.665 402.472L237.827 402.472Z" fill="white" fillOpacity="0.3"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M669.23 402.472L669.23 0.933594L670.067 0.933594L670.067 402.472L669.23 402.472Z" fill="white" fillOpacity="0.3"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M1170 316.192H0V315.354H1170V316.192Z" fill="white" fillOpacity="0.3"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M151.547 402.472L151.547 0.933594L152.385 0.933594L152.385 402.472L151.547 402.472Z" fill="white" fillOpacity="0.3"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M582.949 402.472L582.949 0.933594L583.787 0.933594L583.787 402.472L582.949 402.472Z" fill="white" fillOpacity="0.3"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M1170 402.472H0V401.635H1170V402.472Z" fill="white" fillOpacity="0.3"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M65.2666 402.472L65.2666 0.933594L66.1042 0.933594L66.1042 402.472L65.2666 402.472Z" fill="white" fillOpacity="0.3"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M496.669 402.472L496.669 0.933594L497.507 0.933594L497.507 402.472L496.669 402.472Z" fill="white" fillOpacity="0.3"/>
          <rect x="152.382" y="57.3506" width="85.4536" height="85.4429" fill="white" fillOpacity="0.15"/>
          <rect x="238.665" y="143.631" width="85.575" height="84.9928" fill="white" fillOpacity="0.1"/>
          <rect x="842.615" y="57.3506" width="85.4597" height="85.4453" fill="white" fillOpacity="0.15"/>
        </svg>
      </div>

      {/* Card content */}
      <div className='relative flex flex-col w-full h-full gap-4'>

        {/* Title + role */}
        <div className="flex items-start justify-between gap-3">
          <h2 className='text-[#EFF3F4] font-semibold text-[1.3rem] leading-[110%] capitalize'>
            {name}
          </h2>
          <span className="shrink-0 text-[0.65rem] font-medium text-violet-300 bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 rounded-full mt-1">
            {role}
          </span>
        </div>

        {/* Description */}
        <p className="text-[#EFF3F4]/70 text-xs md:text-sm leading-relaxed">
          {description}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-1.5">
          {tools.map((tool, i) => (
            <span
              key={i}
              className="font-mono text-[0.65rem] text-sky-300 bg-sky-400/[0.08] border border-sky-400/15 px-2 py-0.5 rounded"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 mt-1">
          {demo && (
            <Link
              href={demo}
              target='_blank'
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 px-4 py-1.5 rounded-md text-xs font-medium bg-[#EFF3F4] text-[#0f0c41] border-2 border-[#EFF3F4] transition-all duration-300 hover:bg-violet-300 hover:border-violet-300 no-underline"
            >
              <FaPlay className="w-2.5 h-2.5" />
              Live Demo
            </Link>
          )}
          <Link
            href={code}
            target='_blank'
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 px-4 py-1.5 rounded-md text-xs font-medium text-[#EFF3F4] border-2 border-[#EFF3F4]/40 transition-all duration-300 hover:bg-[#231d4b] hover:border-[#EFF3F4] no-underline"
          >
            <FaCode className="w-2.5 h-2.5" />
            Source Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;