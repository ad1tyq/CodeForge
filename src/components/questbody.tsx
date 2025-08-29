const QuestsBody: React.FC = () => {
  return (
    <main className="flex-1 px-10 py-12 md:px-20 lg:px-40">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-bold tracking-tighter">Quests</h2>
          <p className="text-gray-400 text-xl mt-2">
            Embark on coding adventures and earn glorious rewards.
          </p>
        </div>

        <div className="space-y-16">
          {/* Available Quests */}
          <section>
            <h3 className="text-3xl font-bold tracking-tight mb-6">
              Available Quests
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                <div
                  className="w-full h-48 bg-center bg-cover"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDywq3yJ8-gfw0jX8YU92Qcsm3BNwTBjcoKUCuf7dxB5S9nmWvuz7cApsQGWuujGG83htui2GpdmigKg9WWylPtWNTuTsPzsx_gVWIkvoHgTk31sGNrP94JgRS4YRUeIehBzw_E1tgfp4b7KSEv3KVYP7ss1p0bLABikmJcYl7kpzQRb1TjeRMTJcW-aZqcwBmV6tawdLJst8WRPkZIs0Wp5eO-2Q2nzUtJkHv-R7ApMpjYC6rJN4mDo-k-8QFKPRAxcgUbbvA28GY")',
                  }}
                ></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-bold text-green-400">Easy</p>
                    <p className="text-sm font-bold text-yellow-400">100 XP</p>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Beginner's Journey</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Learn the basics of Python with interactive exercises.
                  </p>
                  <button className="w-full bg-[var(--primary-color)] text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-500 transition-colors">
                    Start Quest
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                <div
                  className="w-full h-48 bg-center bg-cover"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCGGqjYSOa5ijoCodm_c6fkd1hN_XeEpIDEGQ0VTxYS6Kt87mVCLMdelyEDb6aKI9TuwPKnoO8aSK-wyC6xaFLYC_ryujAvwDy5z8v6kjuo7uXc6kjsHV7FNDpQ7JuOOiXMekkLBRRwkwR8MU0rdOxbmypeK-ozGD7rhbrjjyFcLS40orb6-_DUfhDoPK3-71eOAvgEK-JbuK0IxgJyu3Gl3ZSsyh5edR9-eKAxNm63LBS5gubpN84OYNioVmRiqkNeOXTfgBcDHOM")',
                  }}
                ></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-bold text-yellow-400">Medium</p>
                    <p className="text-sm font-bold text-yellow-400">250 XP</p>
                  </div>
                  <h4 className="text-xl font-bold mb-2">
                    Web Dev Fundamentals
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Build your first website using HTML, CSS, and JavaScript.
                  </p>
                  <button className="w-full bg-[var(--primary-color)] text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-500 transition-colors">
                    Start Quest
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Ongoing Quests */}
          <section>
            <h3 className="text-3xl font-bold tracking-tight mb-6">
              Ongoing Quests
            </h3>
            <div className="bg-gray-800 rounded-lg overflow-hidden p-6">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div
                  className="w-full md:w-1/3 h-48 md:h-auto bg-center bg-cover rounded-lg"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDptSQXCF5ynUxFWU1yEBZcXwOy-3vwaIf0tH7ZQacAUixRZPTHLmO_CFDoSt0iV2AcID0daM-bkvdmv8akidGKUgXhw6crE2v6N5GBAYQcrME4qsZ4lYgtlEaBQFwtUzQrD5iveRwEeF_1KuO1zbD-s36sTdGzLi_DTIZt0NC4CgYDR1ZpSRthCbuV9JE4uS_Hsr347FUhj-1sx7aMO2E1B_HJmlWow5TOs8o2Z-orDAd3GQAy2yn7wRkte07vnfCBMxO0uqP49Ic")',
                  }}
                ></div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-bold text-orange-400">Hard</p>
                    <p className="text-sm font-bold text-yellow-400">500 XP</p>
                  </div>
                  <h4 className="text-2xl font-bold mb-2">
                    Data Structures & Algorithms
                  </h4>
                  <p className="text-gray-400 mb-6">
                    Master essential data structures and algorithms in Java.
                  </p>
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-base font-medium text-gray-300">
                        Progress
                      </span>
                      <span className="text-sm font-medium text-gray-300">
                        60%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-[var(--primary-color)] h-2.5 rounded-full"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                  <button className="w-full md:w-auto bg-[var(--primary-color)] text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-500 transition-colors">
                    Continue Quest
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Completed Quests */}
          <section>
            <h3 className="text-3xl font-bold tracking-tight mb-6">
              Completed Quests
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-lg overflow-hidden relative group">
                <div
                  className="w-full h-48 bg-center bg-cover"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA2-gpYiVRmCeSKPxGjZ-ROL1-zGmUnqZutltyt0iy5-iELPWG1h_JLoIhd1WUx_ww7lKm1LtoqfPoVMDSdsT138K5tN2iZyHgDiSw7Pbn-hDrG7UbVH8q8JPVe3LkajypxAaez0vqga0QXwVlvP4wRvOmjjJ3LEdUKe8XP3wX3Q9qI-zOXJXKdX3IPnGHnOTASmggyEaLbHvBvUgwyGfxsz4r0kRfQU_eFS3AWEnrTzfxgNrq9BBeG4wqVg22E0Zm3FBEzo-6-8TY")',
                  }}
                ></div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-black transition-colors">
                    View Results
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-bold text-red-500">Expert</p>
                    <p className="text-sm font-bold text-yellow-400">1000 XP</p>
                  </div>
                  <h4 className="text-xl font-bold mb-2">
                    Advanced Machine Learning
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Build and deploy ML models using TensorFlow.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default QuestsBody;