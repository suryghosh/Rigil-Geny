import { WavyBackground } from "@/components/ui/footer";
import { ContactUs } from "@/components/ui/contact-us";

export default function lab() {
  return (
    <div className="px-6 py-12">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Updates and Resources</h1>
        <p className="text-white text-lg">
          Stay informed with the latest updates, news, and technical resources from Rigil Geny.
        </p>
      </div>

      {/* Updates Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Latest Updates</h2>
        <ul className="space-y-6">
          {updates.map((update, index) => (
            <li
              key={index}
              className="bg-green-500 p-4 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-white mb-2">{update.title}</h3>
              <p className="text-white mb-4">{update.description}</p>
              <a
                href={update.link}
                className="text-yellow-300 hover:underline text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Resources Section */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Technical Resources</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <li
              key={index}
              className="bg-green-500 p-6 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
            >
              <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>
              <p className="text-white mb-4">{resource.description}</p>
              <a
                href={resource.link}
                className="text-yellow-300 hover:underline text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Access Resource
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Call to Action */}
      <div className="mt-16">
        <ContactUs />
      </div>

      {/* Footer */}
      <div className="relative bottom-0 w-[100vw] h-[50vh]">
        <WavyBackground />
      </div>
    </div>
  );
}

// Sample Data for Updates
const updates = [
  {
    title: "Rigil Geny Partners with XYZ Corporation",
    description: "A new collaboration to drive innovation in renewable energy technologies.",
    link: "/updates/rigil-geny-xyz-collaboration",
  },
  {
    title: "Launch of Smart Meter Testing Solutions",
    description: "Discover our advanced testing solutions for energy, water, and gas meters.",
    link: "/updates/smart-meter-testing",
  },
  {
    title: "Upcoming Webinar: Future of Sustainable Energy",
    description: "Join us for an insightful discussion with industry leaders.",
    link: "/webinar-registration",
  },
];

// Sample Data for Resources
const resources = [
  {
    title: "Energy Meter Testing Manual",
    description: "A comprehensive guide to understanding our energy meter testing solutions.",
    link: "/resources/energy-meter-manual.pdf",
  },
  {
    title: "Sustainability Report 2023",
    description: "Explore our achievements and goals in the journey towards sustainability.",
    link: "/resources/sustainability-report-2023.pdf",
  },
  {
    title: "Webinar Recording: Future of Energy",
    description: "Catch up on the latest trends and insights shared by experts.",
    link: "/resources/webinar-recording.mp4",
  },
  {
    title: "Technical Specifications for Gas Meters",
    description: "Detailed information about the technical aspects of our gas meter solutions.",
    link: "/resources/gas-meter-specs.pdf",
  },
  {
    title: "Water Conservation Whitepaper",
    description: "Learn about innovative solutions for efficient water management.",
    link: "/resources/water-conservation-whitepaper.pdf",
  },
];
