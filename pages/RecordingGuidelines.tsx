import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const RecordingGuidelines: React.FC = () => {
  return (
    <main className="pt-28 bg-white min-h-screen">
      {/* Header */}
      <div className="bg-green-600 text-white text-center py-16 px-6">
        <h1 className="font-lobster text-6xl md:text-7xl font-bold mb-4">
          Recording Guidelines
        </h1>
        <p className="text-2xl md:text-3xl mb-8">
          Create a flawless, fluent, and faith-filled recitation of Psalm 119 that honors God's Word
        </p>
        <a href="#requirements" className="inline-block bg-white text-green-600 font-bold py-4 px-10 rounded-full text-xl border-2 border-green-600 hover:bg-gray-50 transition duration-300">
          View Requirements ↓
        </a>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-6xl">
        {/* Section 1: Your Recording Should Be */}
        <AnimatedSection>
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-green-700 text-center mb-3">
              Your Recording Should Be...
            </h2>
            <div className="w-32 h-1 bg-amber-500 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <i className="fas fa-star text-gray-400 text-5xl mb-4"></i>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Flawless</h3>
                <p className="text-gray-600 text-lg">Word-perfect recitations without errors or omissions.</p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <i className="fas fa-comment text-green-600 text-5xl mb-4"></i>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Fluent</h3>
                <p className="text-gray-600 text-lg">Clear, natural pace with proper pronunciation.</p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <i className="fas fa-cross text-green-600 text-5xl mb-4"></i>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Faith-Filled</h3>
                <p className="text-gray-600 text-lg">Heartfelt delivery that honors scripture.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Section 2: Recording Requirements */}
        <AnimatedSection>
          <div id="requirements" className="mb-20">
            <div className="flex items-center justify-center gap-3 mb-3">
              <i className="fas fa-clipboard text-green-700 text-3xl"></i>
              <h2 className="text-4xl md:text-5xl font-bold text-green-700 text-center">
                Recording Requirements
              </h2>
            </div>
            <div className="w-32 h-1 bg-amber-500 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-green-700 mb-6">Content & Delivery</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-green-600 text-xl mt-1"></i>
                    <span className="text-gray-700 text-lg">All 176 verses recited word-perfect</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-green-600 text-xl mt-1"></i>
                    <span className="text-gray-700 text-lg">Clear, natural pace - not too fast or slow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-green-600 text-xl mt-1"></i>
                    <span className="text-gray-700 text-lg">Expressive delivery that shows understanding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-green-600 text-xl mt-1"></i>
                    <span className="text-gray-700 text-lg">No background music or sound effects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-green-600 text-xl mt-1"></i>
                    <span className="text-gray-700 text-lg">15-minute maximum duration</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-green-700 mb-6">Technical Quality</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-green-600 text-xl mt-1"></i>
                    <span className="text-gray-700 text-lg">Quiet environment with no background noise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-green-600 text-xl mt-1"></i>
                    <span className="text-gray-700 text-lg">Good lighting (for video submission)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-green-600 text-xl mt-1"></i>
                    <span className="text-gray-700 text-lg">Camera at eye level (if recording video)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-green-600 text-xl mt-1"></i>
                    <span className="text-gray-700 text-lg">Stable camera or phone position</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-green-600 text-xl mt-1"></i>
                    <span className="text-gray-700 text-lg">MP4 or MP3 format preferred</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Section 3: Tips & Mistakes */}
        <AnimatedSection>
          <div className="mb-20 grid md:grid-cols-2 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <i className="fas fa-magic text-green-700 text-2xl"></i>
                <h3 className="text-3xl font-bold text-green-700">Tips for a Stellar Recording</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-green-600 text-xl mt-1"></i>
                  <span className="text-gray-700 text-lg">Practice daily - Record multiple takes and choose the best one</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-green-600 text-xl mt-1"></i>
                  <span className="text-gray-700 text-lg">Do test recordings - Check audio quality before final take</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-green-600 text-xl mt-1"></i>
                  <span className="text-gray-700 text-lg">Stand confidently - Good posture helps with breath control</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-green-600 text-xl mt-1"></i>
                  <span className="text-gray-700 text-lg">Use a script backup - Keep printed verses nearby (off camera)</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-green-600 text-xl mt-1"></i>
                  <span className="text-gray-700 text-lg">Record in daylight - Natural lighting looks most professional</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-green-600 text-xl mt-1"></i>
                  <span className="text-gray-700 text-lg">Hydrate - Drink water to keep your voice clear</span>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <i className="fas fa-times-circle text-red-600 text-3xl"></i>
                <h3 className="text-3xl font-bold text-red-600">Common Mistakes to Avoid</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <i className="fas fa-times text-red-600 text-xl mt-1"></i>
                  <span className="text-gray-700 text-lg">Background noise (fans, phones, people talking)</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-times text-red-600 text-xl mt-1"></i>
                  <span className="text-gray-700 text-lg">Mumbling or speaking too fast</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-times text-red-600 text-xl mt-1"></i>
                  <span className="text-gray-700 text-lg">Looking down or away too often (video)</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-times text-red-600 text-xl mt-1"></i>
                  <span className="text-gray-700 text-lg">Exceeding the 15-minute limit</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-times text-red-600 text-xl mt-1"></i>
                  <span className="text-gray-700 text-lg">Poor lighting or shaky camera</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-times text-red-600 text-xl mt-1"></i>
                  <span className="text-gray-700 text-lg">Incorrect file naming or format</span>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Section 4: How to Submit */}
        <AnimatedSection>
          <div className="bg-green-600 rounded-3xl p-12 mb-20 text-white">
            <div className="flex items-center justify-center gap-3 mb-12">
              <i className="fas fa-box text-4xl"></i>
              <h2 className="font-lobster text-4xl md:text-5xl font-bold text-center">How to Submit</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <i className="fas fa-cloud-upload-alt text-6xl mb-4"></i>
                <div className="text-5xl font-bold mb-3">1</div>
                <h3 className="text-2xl font-bold mb-2">Upload</h3>
                <p className="text-lg">To Google Drive, Dropbox, or YouTube (unlisted)</p>
              </div>
              
              <div className="text-center">
                <i className="fas fa-edit text-6xl mb-4"></i>
                <div className="text-5xl font-bold mb-3">2</div>
                <h3 className="text-2xl font-bold mb-2">Complete Form</h3>
                <p className="text-lg">Fill out the submission form with your details</p>
              </div>
              
              <div className="text-center">
                <i className="fas fa-check-circle text-6xl mb-4"></i>
                <div className="text-5xl font-bold mb-3">3</div>
                <h3 className="text-2xl font-bold mb-2">Confirm</h3>
                <p className="text-lg">Ensure judges can access your file</p>
              </div>
            </div>
            
            <p className="text-center text-xl mb-8">
              <strong>File Naming Example:</strong> FirstName_LastName_Psalm119.mp4
            </p>
            
            <div className="text-center">
              <a href="#" className="inline-block bg-white text-green-600 font-bold py-4 px-12 rounded-full text-xl border-2 border-white hover:bg-gray-50 transition duration-300">
                Submit Your Recording →
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Final Contact Footer */}
        <AnimatedSection>
          <div className="text-center">
            <h3 className="font-lobster text-3xl md:text-4xl font-bold text-green-700 mb-4">Need Help With Your Recording?</h3>
            <p className="text-xl text-gray-600 mb-8">Contact us for technical support or questions about the submission process</p>
            
            <div className="flex justify-center gap-6">
              <a href="mailto:Psalm119NationalValues@gmail.com" className="bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-green-700 transition duration-300 flex items-center gap-3">
                <i className="fas fa-envelope"></i>
                Email Us
              </a>
              <a href="tel:+2348122673417" className="bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-green-700 transition duration-300 flex items-center gap-3">
                <i className="fas fa-phone"></i>
                Call Us
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
};

export default RecordingGuidelines;
