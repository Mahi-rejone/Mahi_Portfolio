import { motion } from "framer-motion";
import {
  Camera,
  Video,
  Clapperboard,
  Palette,
  Music,
  Aperture,
  Film,
  Wand2,
  Image as ImageIcon,
  Layers,
} from "lucide-react";

type Skill = {
  name: string;
  icon: React.ReactNode;
  level: string;
};

const shootingSkills: Skill[] = [
  {
    name: "Photography",
    icon: <Camera />,
    level: "Advanced",
  },
  {
    name: "Cinematography",
    icon: <Video />,
    level: "Advanced",
  },
  {
    name: "Lighting & Composition",
    icon: <Aperture />,
    level: "Advanced",
  },
  {
    name: "Directing",
    icon: <Clapperboard />,
    level: "Intermediate",
  },
];

const editingSkills: Skill[] = [
  {
    name: "Premiere Pro",
    icon: <Film />,
    level: "Advanced",
  },
  {
    name: "DaVinci Resolve",
    icon: <Wand2 />,
    level: "Advanced",
  },
  {
    name: "Color Grading",
    icon: <Palette />,
    level: "Advanced",
  },
];

const tools: Skill[] = [
  {
    name: "Lightroom",
    icon: <ImageIcon />,
    level: "Advanced",
  },
  {
    name: "After Effects",
    icon: <Layers />,
    level: "Intermediate",
  },
  {
    name: "Sound Design",
    icon: <Music />,
    level: "Intermediate",
  },
];

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4 }}
      className="
        group
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-dark/10
        bg-light
        p-4
        transition-all
        duration-300
        hover:border-dark/30
        hover:shadow-xl
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-dark
          text-light
          text-2xl
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        {skill.icon}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <h4 className="font-semibold text-dark">{skill.name}</h4>

        <p className="mt-1 text-xs text-dark/50">{skill.level}</p>
      </div>

      {/* Arrow */}
      <span
        className="
          text-lg
          text-dark/30
          transition-all
          duration-300
          group-hover:translate-x-1
          group-hover:text-dark
        "
      >
        ↗
      </span>
    </motion.div>
  );
}

function SkillCategory({
  title,
  description,
  skills,
  className = "",
}: {
  title: string;
  description: string;
  skills: Skill[];
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`
        rounded-3xl
        border
        border-dark/10
        bg-white/40
        p-5
        sm:p-7
        ${className}
      `}
    >
      {/* Category Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-dark" />

          <h3 className="text-xl font-bold text-dark">{title}</h3>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-dark/50">
          {description}
        </p>
      </div>

      {/* Skills */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        w-full
        bg-light
        px-4
        py-24
        sm:px-6
        md:px-10
        lg:px-16
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-dark/40">
              Craft & Tools
            </p>

            <h2
              className="
              font-birthstone
              text-6xl
              font-bold
              leading-none
              text-dark
              sm:text-7xl
              md:text-8xl
            "
            >
              My Skills
            </h2>
          </div>

          <p
            className="
            max-w-md
            text-sm
            leading-6
            text-dark/50
            md:text-right
          "
          >
            The gear, software, and techniques I use to shoot and edit
            cinematic, high-quality visual content.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-5 lg:grid-cols-3">
          {/* Shooting - Large */}
          <SkillCategory
            title="Photography & Shooting"
            description="Capturing compelling footage and stills on set."
            skills={shootingSkills}
            className="lg:col-span-2"
          />

          {/* Editing */}
          <SkillCategory
            title="Video Editing"
            description="Cutting, grading, and finishing footage into polished stories."
            skills={editingSkills}
          />

          {/* Tools */}
          <SkillCategory
            title="Post-Production Tools"
            description="Software and finishing touches that bring a project home."
            skills={tools}
            className="lg:col-span-3"
          />
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="
            mt-8
            flex
            flex-col
            gap-4
            rounded-3xl
            bg-dark
            p-6
            text-light
            sm:p-8
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-light/40">
              Photographer & Video Editor
            </p>

            <h3 className="mt-2 text-xl font-bold sm:text-2xl">
              Turning raw footage into cinematic stories.
            </h3>
          </div>

          <div className="text-sm text-light/50">
            Premiere Pro · DaVinci Resolve · Lightroom · After Effects
          </div>
        </motion.div>
      </div>
    </section>
  );
}
