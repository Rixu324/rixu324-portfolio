import icon from "/src/assets/icon.png";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f5f2ed] px-4 py-12 md:py-24">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-center text-4xl font-bold tracking-tight mb-2">
          About Me
        </h1>
        <p className="text-center text-gray-600 mb-12">自己紹介</p>

        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <div className="space-y-4">
            <img
              src={icon}
              alt="Profile"
              width="300"
              height="300"
              className="rounded-lg w-full object-cover shadow-md"
            />
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Web Development
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                たまに配信
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                日本語
              </span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="prose prose-gray max-w-none">
              <h2 className="text-2xl font-semibold mb-4">りゅま</h2>
              <p className="text-gray-600 mb-4">
                web作ったり、bot作ったりします。
              </p>

              <h3 className="text-xl font-semibold mb-3">Skills</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>TypeScript</li>
                <li>AWS</li>
                <li>こういうところって全部書くのだるくね？</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">最近の趣味</h3>
              <p className="text-gray-600 mb-4">
                暇なときに人の配信を荒らすのが趣味です。
                おすすめの荒らし先はあるてぃめっとちゃんって人です。みんなでコメントあらそう！
              </p>
              <p className="text-gray-600 mb-4">
                Twitch:{" "}
                <a
                  href="https://www.twitch.tv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://www.twitch.tv/ultimate_chan_
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
