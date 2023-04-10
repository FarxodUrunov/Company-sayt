import { teamData } from "@/data/dataInfo";

const Team = () => {
  return (
    <>
      <div className="container mx-auto my-12">
        <h4 className="font-semibold text-xl">Team</h4>
        <p className="text-sm text-gray-500">
          We have a team of 30+ developers, designers, and QA engineers
        </p>
        <div className="my-5">
          <table className="table-fixed w-full">
            <thead>
              <tr className="text-left border-b-2">
                <th className="py-2">Fullname</th>
                <th className="py-2">Main skills</th>
                <th className="py-2">Year of experience</th>
                <th className="py-2">Resume</th>
              </tr>
            </thead>
            <tbody>
              {teamData.map((item) => (
                <tr key={item.id} className="text-left border-b-2">
                  <td className="py-3">{item.fullName}</td>
                  <td className="py-3">{item.skills}</td>
                  <td className="py-3">{item.experience}</td>
                  <td className="py-3">
                    <a
                      href={item.resumeUrl}
                      target="_blank"
                      className="py-1 px-2 rounded-sm text-white bg-blue-500 duration-200 hover:bg-blue-700"
                    >
                      Download CV
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Team;
