import React from 'react';

const Team = () => {
  const team = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: '/images/team/member1.jpg'
    },
    {
      name: 'Jane Smith',
      role: 'Creative Director',
      image: '/images/team/member2.jpg'
    },
    {
      name: 'Mike Johnson',
      role: 'Technical Lead',
      image: '/images/team/member3.jpg'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-zinc-900">Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">{member.name}</h3>
              <p className="text-zinc-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;