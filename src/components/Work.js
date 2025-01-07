import React from 'react';

const Work = () => {
  const projects = [
    {
      title: 'Project One',
      category: 'Digital Product',
      image: '/images/work/project1.jpg',
      link: '#'
    },
    {
      title: 'Project Two',
      category: 'Web Development',
      image: '/images/work/project2.jpg',
      link: '#'
    },
    {
      title: 'Project Three',
      category: 'Mobile App',
      image: '/images/work/project3.jpg',
      link: '#'
    }
  ];

  return (
    <section id="work" className="py-20 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Selected Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.link}
              className="group relative block aspect-video overflow-hidden bg-zinc-800 rounded-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.category}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;