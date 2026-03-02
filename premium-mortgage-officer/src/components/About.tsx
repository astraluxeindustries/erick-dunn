import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-tl-3xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-100 rounded-br-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=988&q=80" 
                alt="Erick Dunn" 
                className="rounded-xl shadow-lg w-full object-cover h-[500px]"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              About Erick Dunn
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Originally from Fort Lauderdale, Florida, Erick has called Alaska home since 2014. Drawn to the independence and rugged beauty of the state, he brings that same resilience and straightforward approach to his work in residential lending.
              </p>
              <p>
                Erick joined First Rate Financial after an 18-year career in corporate retail management, where he developed a strong foundation in leadership, operational precision, and strategic problem solving. His background gives him a distinct edge in the mortgage industry, allowing him to approach each loan with discipline, critical thinking, and a solutions-first mindset.
              </p>
              <p>
                Known for his loyalty, responsiveness, and commitment to service, Erick takes pride in guiding clients through one of the most important financial decisions of their lives. Whether navigating a straightforward purchase or a more complex scenario, he focuses on clarity, communication, and delivering the right structure for long-term success.
              </p>
              <p>
                Outside of lending, Erick enjoys fishing, hiking, attending concerts, and spending time with his children, Taylor and Titan. He embraces the Alaskan lifestyle fully, balancing hard work with adventure and family. For clients seeking a dependable loan professional who combines experience, grit, and personal dedication, Erick is ready to help.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">15+</span>
                <span className="text-sm text-slate-500">Years Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">Top 1%</span>
                <span className="text-sm text-slate-500">Originator in AK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
