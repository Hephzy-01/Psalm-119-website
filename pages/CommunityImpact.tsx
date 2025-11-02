import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const CommunityImpact: React.FC = () => {
  const projectIdeas = [
    {
      title: "Scripture-Based Cleanup Campaign",
      theme: "Community Service",
      scripture: '"I will walk about in freedom, for I have sought out your precepts." - Psalm 119:45',
      description: "Organize a community cleanup while sharing verses about caring for God's creation.",
      howTo: [
        "Partner with local environmental groups",
        "Create signs with scripture verses",
        "Document before/after photos",
        "Share testimonies of community members"
      ]
    },
    {
      title: "Bible Values Workshop for Kids",
      theme: "Education",
      scripture: '"Your word is a lamp to my feet and a light to my path." - Psalm 119:105',
      description: "Host interactive workshops teaching children biblical values through games and activities.",
      howTo: [
        "Create age-appropriate activities",
        "Create visual aids and handouts",
        "Include memory verse games",
        "Provide take-home materials for families"
      ]
    },
    {
      title: "Justice & Righteousness Awareness",
      theme: "Social Justice",
      scripture: '"Your righteousness is everlasting and your law is true." - Psalm 119:142',
      description: "Launch a campaign highlighting social justice issues through the lens of biblical righteousness.",
      howTo: [
        "Interview community leaders about justice issues",
        "Create posters or short videos",
        "Host a discussion forum",
        "Connect Psalm 119 verses to current challenges"
      ]
    },
    {
      title: "Senior Scripture Encouragement",
      theme: "Elderly Care",
      scripture: '"Your promises have been thoroughly tested, and your servant loves them." - Psalm 119:140',
      description: "Visit elderly community members, sharing encouraging scriptures and providing companionship.",
      howTo: [
        "Coordinate with care facility staff",
        "Visit nursing homes",
        "Record residents' favorite verses",
        "Document stories and testimonies"
      ]
    },
    {
      title: "Teen Bible Study Initiative",
      theme: "Youth Mentorship",
      scripture: '"How can a young person stay on the path of purity? By living according to your word." - Psalm 119:9',
      description: "Start peer-led Bible study groups focusing on applying Psalm 119 to teenage life.",
      howTo: [
        "Survey teens about their struggles",
        "Develop relevant discussion questions",
        "Create a welcoming space",
        "Track participation and spiritual growth"
      ]
    },
    {
      title: "Psalm 119 Street Art Project",
      theme: "Creative Arts",
      scripture: '"Your statutes are my heritage forever; they are the joy of my heart." - Psalm 119:111',
      description: "Create murals or art installations featuring verses from Psalm 119 in public spaces.",
      howTo: [
        "Seek permission from local authorities",
        "Engage community members in creation",
        "Document the process",
        "Host unveiling event with community"
      ]
    }
  ];

  return (
    <main className="pt-28 bg-white min-h-screen">
      {/* Header */}
      <div className="bg-green-600 text-white text-center py-16 px-6">
        <h1 className="font-lobster text-6xl md:text-7xl font-bold mb-4">
          Community Impact Projects
        </h1>
        <p className="text-2xl md:text-3xl mb-8">
          Turn the values of Psalm 119 into action that transforms your community
        </p>
        <a href="#ideas" className="inline-block bg-white text-green-600 font-bold py-4 px-10 rounded-full text-xl border-2 border-green-600 hover:bg-gray-50 transition duration-300">
          Explore Ideas →
        </a>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-6xl">
        {/* Putting God's Word Into Action */}
        <AnimatedSection>
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-green-700 text-center mb-3">
              Putting God's Word Into Action
            </h2>
            <div className="w-32 h-1 bg-amber-500 mx-auto mb-8"></div>
            
            <p className="text-xl text-gray-700 text-center mb-8 max-w-4xl mx-auto">
              Your Community Impact Project demonstrates how the values in Psalm 119 can create real change in your neighborhood, school, or city.
            </p>

            <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6 mb-12 max-w-3xl mx-auto text-center">
              <p className="text-2xl text-gray-700 italic">
                "Your word is a lamp to my feet and a light to my path."
              </p>
              <p className="text-lg text-green-700 font-semibold mt-2">- Psalm 119:105</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-green-200 rounded-2xl p-8 text-center shadow-lg">
                <i className="fas fa-hands-helping text-green-600 text-5xl mb-4"></i>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Serve Others</h3>
                <p className="text-gray-600 text-lg">Demonstrate Christ's love through practical service.</p>
              </div>
              
              <div className="bg-white border-2 border-green-200 rounded-2xl p-8 text-center shadow-lg">
                <i className="fas fa-lightbulb text-green-600 text-5xl mb-4"></i>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Be Creative</h3>
                <p className="text-gray-600 text-lg">Develop innovative solutions to local needs.</p>
              </div>
              
              <div className="bg-white border-2 border-green-200 rounded-2xl p-8 text-center shadow-lg">
                <i className="fas fa-users text-green-600 text-5xl mb-4"></i>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Work Together</h3>
                <p className="text-gray-600 text-lg">Collaborate with teammates for greater impact.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Project Ideas */}
        <AnimatedSection>
          <div id="ideas" className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-green-700 text-center mb-3">
              Project Ideas to Inspire You
            </h2>
            <div className="w-32 h-1 bg-amber-500 mx-auto mb-12"></div>

            <div className="grid md:grid-cols-2 gap-8">
              {projectIdeas.map((project, index) => (
                <div key={index} className="bg-white border-2 border-green-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-green-100 px-6 py-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.theme}
                    </span>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-700 text-lg mb-4">{project.description}</p>
                    
                    <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-4">
                      <p className="text-gray-700 italic">{project.scripture}</p>
                    </div>
                    
                    <h4 className="font-bold text-gray-800 mb-2">How To:</h4>
                    <ul className="space-y-2">
                      {project.howTo.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <i className="fas fa-check text-green-600 mt-1"></i>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Planning Your Project */}
        <AnimatedSection>
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-green-700 text-center mb-12">
              Planning Your Project
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-green-600 text-white rounded-2xl p-8 text-center">
                <div className="text-6xl font-bold mb-4">1</div>
                <h3 className="text-2xl font-bold mb-3">Identify Needs</h3>
                <p className="text-lg">What issues in your community align with Psalm 119 values?</p>
              </div>
              
              <div className="bg-green-600 text-white rounded-2xl p-8 text-center">
                <div className="text-6xl font-bold mb-4">2</div>
                <h3 className="text-2xl font-bold mb-3">Gather Team</h3>
                <p className="text-lg">Recruit 3-5 classmates with complementary skills.</p>
              </div>
              
              <div className="bg-green-600 text-white rounded-2xl p-8 text-center">
                <div className="text-6xl font-bold mb-4">3</div>
                <h3 className="text-2xl font-bold mb-3">Create Plan</h3>
                <p className="text-lg">Set goals, timelines, and required resources.</p>
              </div>
            </div>

            {/* Documentation Tips */}
            <div className="bg-white border-2 border-green-300 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-green-700 text-center mb-8">Project Documentation Tips</h3>
              
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Media to Capture</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <i className="fas fa-camera text-green-600 mt-1"></i>
                      <span className="text-gray-700">Before/after photos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-video text-green-600 mt-1"></i>
                      <span className="text-gray-700">Short video testimonies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-images text-green-600 mt-1"></i>
                      <span className="text-gray-700">Process documentation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-users text-green-600 mt-1"></i>
                      <span className="text-gray-700">Community reactions</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Written Report</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <i className="fas fa-file-alt text-green-600 mt-1"></i>
                      <span className="text-gray-700">Project goals and Psalm 119 connection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-exclamation-triangle text-green-600 mt-1"></i>
                      <span className="text-gray-700">Challenges faced and solutions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-chart-line text-green-600 mt-1"></i>
                      <span className="text-gray-700">Impact measurements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-heart text-green-600 mt-1"></i>
                      <span className="text-gray-700">Personal reflections</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Final CTA */}
        <AnimatedSection>
          <div className="bg-green-600 rounded-3xl p-12 text-white text-center">
            <h2 className="font-lobster text-5xl md:text-6xl font-bold mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-2xl mb-10">
              Submit your project proposal or ask questions about implementing these ideas
            </p>
            
            <div className="flex justify-center gap-6 flex-wrap">
              <a href="/contact" className="bg-white text-green-600 font-bold py-4 px-10 rounded-full text-xl border-2 border-white hover:bg-gray-50 transition duration-300 flex items-center gap-3">
                <i className="fas fa-envelope"></i>
                CONTACT US
              </a>
              <a href="#" className="bg-white text-green-600 font-bold py-4 px-10 rounded-full text-xl border-2 border-white hover:bg-gray-50 transition duration-300 flex items-center gap-3">
                <i className="fas fa-download"></i>
                Download Guide
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
};

export default CommunityImpact;
