import icon from "/src/assets/icon.png";
import imocyaIcon from "/src/assets/imocya_icon.png";
import mokasakanaIcon from "/src/assets/mokasakana_icon.png";
import { FaTwitch } from "react-icons/fa";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Avatar,
  Link,
} from "@mui/material";

const AboutPage: React.FC = () => (
  <div className="min-h-screen bg-[#f5f2ed] px-4">
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
              JP
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              書くことない
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-semibold mb-4">りゅま</h2>
            <p className="text-gray-600 mb-4">
              web作ったり、bot作ったりします。あと配信者の裏方したりしてます。
            </p>

            <h3 className="text-xl font-semibold mb-3">Skills(開発)</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>React(TypeScript)</li>
              <li>Spring(java)</li>
              <li>AWS</li>
              <li>後は色々ちょっとずつできます。ってか全部書くのだる....</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              お手伝いしている配信者
            </h3>
            <p className="text-gray-600 mb-4">
              個人的にマネジメントをしている配信者のかた達を紹介します。配信を見に行って上げてください
              <br />
            </p>
            {/* 配信者1 */}
            <Card
              sx={{
                background:
                  "linear-gradient(to bottom right, #eff6ff, #ecfeff)",
                borderRadius: 2,
                p: 2,
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                marginTop: 2,
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Avatar
                    src={`${mokasakanaIcon}?height=100&width=100`}
                    alt="配信者1のアイコン"
                    sx={{
                      width: 64,
                      height: 64,
                      border: "2px solid #bfdbfe",
                      mr: 2,
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#1e3a8a" }}
                  >
                    もかさかな
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  セルフ受肉VTuber
                  <br />
                  自称「清楚系」をうたっているがデスマッチでは常に暴言をはいている。深海に住むおさかなさん達のメイドらしいが全くおさかなには詳しくない
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Link
                    href="https://www.twitch.tv/sakanadesu24"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "0.875rem",
                      color: "#6a1b9a",
                      textDecoration: "none",
                      "&:hover": { color: "#4a148c" },
                    }}
                  >
                    <FaTwitch style={{ marginRight: 4 }} />
                    @sakanadesu24
                  </Link>
                  <Link
                    href="https://x.com/mokasakana"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "0.875rem",
                      color: "#1565c0",
                      textDecoration: "none",
                      "&:hover": { color: "#0d47a1" },
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ width: 16, height: 16, marginRight: 4 }}
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    @mokasakana
                  </Link>
                </Box>
              </CardContent>
            </Card>

            {/* 配信者2 */}
            <Card
              sx={{
                background:
                  "linear-gradient(to bottom right, #fff1f7, #f3e5f5)",
                borderRadius: 2,
                p: 2,
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                marginTop: 2,
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Avatar
                    src={`${imocyaIcon}?height=100&width=100`}
                    alt="配信者2のアイコン"
                    sx={{
                      width: 64,
                      height: 64,
                      border: "2px solid #f5c2d1",
                      mr: 2,
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#c2185b" }}
                  >
                    芋チャ
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  芋を生産するために産まれてきた熊らしい。かなりのギャルマインド。イライラするとすぐに台バンします。芋チャ大人気コンテンツであるY談配信にはかなりの強者が現れるとか、？
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Link
                    href="https://www.twitch.tv/chachan3182"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "0.875rem",
                      color: "#6a1b9a",
                      textDecoration: "none",
                      "&:hover": { color: "#4a148c" },
                    }}
                  >
                    <FaTwitch style={{ marginRight: 4 }} />
                    @chachan3182
                  </Link>
                  <Link
                    href="https://x.com/imocha322"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "0.875rem",
                      color: "#1565c0",
                      textDecoration: "none",
                      "&:hover": { color: "#0d47a1" },
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ width: 16, height: 16, marginRight: 4 }}
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span>@imocha322</span>
                  </Link>
                </Box>
              </CardContent>
            </Card>

            {/* 配信者3 */}
            <Card
              sx={{
                background:
                  "linear-gradient(to bottom right, #f79469, #f79469)",
                borderRadius: 2,
                p: 2,
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                marginTop: 2,
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    あと一人準備中です。伝説の歌姫になります。
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            <h3 className="text-xl font-semibold mt-6 mb-3">最近の趣味</h3>
            <p className="text-gray-600 mb-4">
              暇なときに人の配信を荒らすのが趣味です。
              <br />
              おすすめの荒らし先はあるてぃめっとちゃんって人です。みんなでコメントあらそう！
            </p>
            <p className="text-gray-600 mb-4">
              Twitch:{" "}
              <a
                href="https://www.twitch.tv/ultimate_chan_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                <FaTwitch className="inline text-blue-700" />
                @ultimate_chan_
              </a>
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">ゲーム</h3>
            <p className="text-gray-600 mb-4">
              valorantしてることが多いです。誘ってください。ランク勝てません。P2です。（2025/03/13現在）
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
