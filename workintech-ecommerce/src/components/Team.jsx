export default function Team() {
  return (
    <main className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-10">
          <h1 className="text-3xl font-bold">Our Team</h1>
          <p className="text-gray-600 mt-2">
            Meet the people behind the project.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="border border-[#ECECEC] bg-white rounded-lg p-6 text-center">
            <img
              src="/assets/team/gokhan.jpg"
              alt="Gökhan Özdemir"
              className="w-28 h-28 rounded-full object-cover mx-auto"
            />
            <h3 className="font-bold text-lg mt-4">Gökhan Özdemir</h3>
            <p className="text-sm text-gray-500">Project Manager</p>
          </div>

          <div className="border border-[#ECECEC] bg-white rounded-lg p-6 text-center">
            <img
              src="/assets/team/you.jpg"
              alt="Your Name"
              className="w-28 h-28 rounded-full object-cover mx-auto"
            />
            <h3 className="font-bold text-lg mt-4">Your Name</h3>
            <p className="text-sm text-gray-500">Full Stack Developer</p>
          </div>

          <div className="border border-[#ECECEC] bg-white rounded-lg p-6 text-center">
            <img
              src="/assets/team/member.jpg"
              alt="Team Member"
              className="w-28 h-28 rounded-full object-cover mx-auto"
            />
            <h3 className="font-bold text-lg mt-4">Team Member</h3>
            <p className="text-sm text-gray-500">Frontend Developer</p>
          </div>
        </div>
      </div>
    </main>
  );
}
