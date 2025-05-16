function About() {
  const teamMembers = [
    {
      name: 'Alice Johnson',
      role: 'Founder & Lead Writer',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      twitter: 'https://twitter.com/alicejohnson',
    },
    {
      name: 'Bob Smith',
      role: 'Tech Contributor',
      photo: 'https://randomuser.me/api/portraits/men/46.jpg',
      twitter: 'https://twitter.com/bobsmith',
    },
    {
      name: 'Carol Lee',
      role: 'Editor',
      photo: 'https://randomuser.me/api/portraits/women/68.jpg',
      twitter: 'https://twitter.com/carollee',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded shadow-lg">
      <h2 className="text-4xl font-extrabold mb-6 text-blue-700">About Us</h2>
      
      <div className="flex flex-col md:flex-row items-center mb-8">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80"
          alt="About banner"
          className="rounded-lg w-full md:w-1/2 mb-6 md:mb-0 md:mr-8"
        />
        <p className="text-lg leading-relaxed text-gray-700">
          Welcome to our blog! We share insightful tech knowledge, latest trends, tutorials, and real stories from developers around the world. Our mission is to educate, inspire, and connect the tech community.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h3>
        <p className="text-gray-600">
          To provide high-quality, accessible content that empowers tech enthusiasts to grow their skills and stay updated with industry innovations.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Meet the Team</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-gray-50 p-4 rounded-lg shadow-md w-48 text-center hover:shadow-xl transition-shadow"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-3 object-cover"
              />
              <h4 className="font-semibold text-lg">{member.name}</h4>
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Twitter Profile
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => alert('Thanks for your interest!')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default About;
