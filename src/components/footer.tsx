import { FaGithub, FaReact } from "react-icons/fa";
import {
  SiFastapi,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export function Footer() {
  const size = 32;
  return (
    <>
      <footer className="py-4">
        <ul className="flex flex-wrap justify-center gap-4">
          <li className="flex items-center gap-2">
            <SiTailwindcss size={size} />
            <p className="text-sm font-normal">Tailwind CSS</p>
          </li>
          <li className="flex items-center gap-2">
            <FaReact size={size} />
            <p className="text-sm font-normal">React</p>
          </li>
          <li className="flex items-center gap-2">
            <SiTypescript size={size} />
            <p className="text-sm font-normal">TypeScript</p>
          </li>
          <li className="flex items-center gap-2">
            <TbBrandNextjs size={size} />
            <p className="text-sm font-normal">Next JS</p>
          </li>
          <li className="flex items-center gap-2">
            <SiFastapi size={size} />
            <p className="text-sm font-normal">FastAPI</p>
          </li>
          <li className="flex items-center gap-2">
            <SiPostgresql size={size} />
            <p className="text-sm font-normal">PostgreSQL</p>
          </li>
          <li className="flex items-center gap-2">
            <FaGithub size={size} />
            <p className="text-sm font-normal">GitHub</p>
          </li>
        </ul>
      </footer>
    </>
  );
}
