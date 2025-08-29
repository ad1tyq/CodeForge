const CBody: React.FC = () => {
  return (
    <main className="px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-8">
      <div className="layout-content-container flex flex-col max-w-5xl flex-1">
        {/* Title */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <h2 className="text-white tracking-tighter text-4xl font-bold">
            Community
          </h2>
        </div>

        {/* Tabs */}
        <div className="border-b border-[#323239] mb-6">
          <div className="flex gap-8">
            {["Forums", "Discussions", "Live Chat"].map((tab, idx) => (
              <a
                key={idx}
                className={`flex flex-col items-center justify-center border-b-2 pb-3 pt-1 ${
                  tab === "Forums"
                    ? "border-b-white text-white"
                    : "border-b-transparent text-zinc-400 hover:text-white hover:border-b-zinc-400 transition-colors"
                }`}
                href="#"
              >
                <p className="text-sm font-semibold">{tab}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="mb-8">
          <label className="flex flex-col min-w-40 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-12">
              <div className="text-zinc-400 flex border-none bg-[#323239] items-center justify-center pl-4 rounded-l-lg">
                <svg
                  fill="currentColor"
                  height="20px"
                  viewBox="0 0 256 256"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-white focus:outline-none focus:ring-2 focus:ring-[#2b2b3b] border-none bg-[#323239] h-full placeholder:text-zinc-400 px-4 text-base font-normal"
                placeholder="Search forums"
              />
            </div>
          </label>
        </div>

        {/* Featured Tutorials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            {
              title: "Introduction to Python",
              desc: "A beginner-friendly guide to Python programming.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4ipzGW3FtPmslGVXFURFvLnvTAf8xW54TZstlpFzvgNDzeKRLZ1nrT5pxKrlo7ap9V2K1ssiK4sYqVvf1JZHIuEvjhBl5AAoxjDxb-osJiX44JjO2e6PfH2nw0pr9M2xS8hRqGRPRlKhtnGXSne3J8bx1xhvFDQHN9gPDpBAZUudmVuxKcEGeDr7LMACioHKc7ZckL5Pe0TDLsHmxQSaCz6pW8fT-Yj1zlhtV1KZkjXggvRWobVdBI8A6NS_vKKp-B4Z_ueIBXcs",
            },
            {
              title: "Advanced Algorithms",
              desc: "Deep dive into complex algorithms and data structures.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGCLD6kKrOpnN_D7jh-cnOPORi_XGrQOOsKja8yvM5bL-MmZopRiBSxbdzS8Y-bpMAknNmLdgkZdbmY36I3KiOOwt68K59t6TcTuiq0zjUX14tHc2Bydt17JtFQXsWyYUSr1UrhoHMXp7fIyOWB1p7OdjXJruUw0tLmJb2gHlKIOsxNiZVhUREjuGf5Kbtx_dYfDZp1ecgzuJzlmTngiajV3pHZoME8fZ-wmy9FNPdg6jjd9dNVxHuRzk8rvk2kHweS_wSNN4judM",
            },
          ].map((item, idx) => (
            <div key={idx} className="group">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg mb-4 overflow-hidden"
                style={{ backgroundImage: `url("${item.img}")` }}
              ></div>
              <h3 className="text-white text-lg font-bold group-hover:text-zinc-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Recent Posts */}
        <h2 className="text-white text-2xl font-bold tracking-tight mb-6">
          Recent Posts
        </h2>
        <div className="space-y-4">
          {[
            {
              title: "Seeking help with a Java project",
              author: "Alex",
              date: "July 15, 2024",
              replies: 5,
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDboZwJEkVn28yfddQQP09UDR9sR-0dCjamcRGSYD6YcVVVe-FoXQpFwPGbe_qXaLohqT_7kqXYXK_HrQkCjQ34a65jAg89hOthSOmWOFhEtr8sR81EU-V-4VWlJIH2YnLbGmTgsuTMRAhhWGFxIZBSYDtyfYge_D2B-xq-F1aMrDPGpEJw_75clG0EWdLH31N9sTqclSrZlp9n32HPpy4yug-A49FO2vq0Y4k74EnZb2ET8xdQyShg0SGb5Qx5tJR9Y8WYABTUGVM",
            },
            {
              title: "Share your favorite coding tips",
              author: "Sarah",
              date: "July 14, 2024",
              replies: 12,
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUSwxOQAElv5wLyeRn7EWnDS3hShIuE6rkJzHHPAzZh4UqZsWcZVNOpO5x1-G9PNM9-zCChk5Nmko3pS-dzzaLmLDH_zlUE8LW29krrbpB4JCf49nJSYOr6lCLrGdDnow4CcWz9_JgO-EGgrT8_yvaqZq0sDD5zMC2mOTFmVm5Wywfj4p2sfXbAEuizXONNwY_d_vc9VwuaFqgW3_fyxNJwv0ieeNq4BWcxGmBN89i9xekV0LGMemLASr9Fhg51EagkihM_EqRpf0",
            },
            {
              title: "Discussing the latest in AI and machine learning",
              author: "Mark",
              date: "July 13, 2024",
              replies: 8,
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjSX7-H-rQS_piw6dZF6Gs4Gxsxyj5tl4UD_JsWIVUtwRL_F2MYx7ec8UkZwpHKqopd592hwXU-WQUovCrZIXrvhDxpoM07OUwKvEQyRF48Cx_pUE57beKNhUkEJgt_VWIMn4AzYGAGXQazc2Kx4FTUBIP-HgnI6iHzRHEUn5AGGkeaXkdDnq4-ZeuSnj8gbpE-KhwGc2OrIDap9OPQrdCXhPlSBrhV5O-J7ES33rUKYulSwD0nWamezn8D2Xyvr-4C0Rhhfj28K4",
            },
          ].map((post, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-[#1e1e21] p-4 rounded-lg hover:bg-[#2a2a2e] transition-colors cursor-pointer"
            >
              <img
                alt="User avatar"
                className="rounded-full size-12 object-cover"
                src={post.img}
              />
              <div className="flex-1">
                <p className="text-white font-semibold">{post.title}</p>
                <p className="text-zinc-400 text-sm">
                  Posted by {post.author} on {post.date}
                </p>
              </div>
              <div className="text-zinc-400 text-sm flex items-center gap-2">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.837 8.837 0 01-4.42-1.252l-2.646.882a1 1 0 00-1.14.998v.065l.01.055.01.045.013.04.017.04.02.038.025.037.03.035.036.033.04.03.046.028.052.025.058.022.064.02a8.991 8.991 0 01-3.34-5.32 8.95 8.95 0 01-.001-1.002A8.995 8.995 0 0110 2c4.418 0 8 3.134 8 7zM5 10a1 1 0 11-2 0 1 1 0 012 0zm5 0a1 1 0 11-2 0 1 1 0 012 0zm4 1a1 1 0 100-2 1 1 0 000 2z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <span>{post.replies} replies</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex mt-8 justify-center">
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-[#323239] text-white text-sm font-bold leading-normal tracking-wide hover:bg-opacity-80 transition-colors">
            <span className="truncate">View All Discussions</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default CBody;