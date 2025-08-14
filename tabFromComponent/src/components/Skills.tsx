import type { ChangeEvent } from "react";
import type { PageProps } from "./Navbar";

const Skills: React.FC<PageProps> = ({ data, setData }) => {
  const skillList = ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS"];

  const handleSkillChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    
    setData((prev) => ({
      ...prev,
      skills: checked 
        ? [...prev.skills, value] 
        : prev.skills.filter(skill => skill !== value)
    }));
  };

  return (
    <div className="h-screen flex justify-center items-center bg-pink-300">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          Select Your Skills
        </h2>

        <div className="space-y-4">
          {skillList.map((skill) => (
            <label
              key={skill}
              htmlFor={skill}
              className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer transition"
            >
              <input
                type="checkbox"
                id={skill}
                value={skill}
                checked={data.skills.includes(skill)}
                onChange={handleSkillChange}
                className="h-5 w-5 rounded-md border-gray-300 text-blue-500 focus:ring-2 focus:ring-blue-400"
              />
              <span className="text-lg text-gray-700">{skill}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
