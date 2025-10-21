import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const bookData = {
    title: "你不是破碎，而是入口",
    subtitle: "在身體裡，慢一點，看見光。",
    coverImage: "/book-cover.jpg",
    description: "你好，我是 趙耕樂，徒手物理治療師。多年臨床的陪伴與看見，我寫成一本書——《你不是破碎，而是入口》。為了讓療癒不只停在文字，我也準備了導引與量表：讀，是光；做，是溫；看見，是方向。",
    publishDate: "2024年",
    isbn: "978-XXX-XXX-XXX-X"
  };

  const authorData = {
    name: "趙耕樂",
    photo: "/author-photo.jpg",
    biography: "徒手物理治療師，多年臨床經驗，致力於透過身體工作幫助人們重新連結自我，看見內在的光。",
    website: "https://example.com"
  };

  return (
    <div className="min-h-screen">
      {/* 導航欄 */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">書籍形象網站</h1>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-primary transition-colors">首頁</Link>
              <Link href="/quiz" className="hover:text-primary transition-colors">測驗</Link>
              <Link href="/admin" className="hover:text-primary transition-colors">管理後台</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要內容 */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero 區塊 */}
        <section className="mb-16 text-center animate-fade-in max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">{bookData.title}</h2>
          <p className="text-2xl text-foreground/70 mb-12">{bookData.subtitle}</p>

          <div className="bg-card rounded-2xl p-8 md:p-12 mb-8">
            <p className="text-lg leading-relaxed mb-8">{bookData.description}</p>

            {/* CTA 按鈕 */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              <Link
                href="/guide"
                className="bg-foreground text-background px-10 py-4 rounded-full hover:opacity-90 transition-opacity font-semibold text-lg"
              >
                開始 13 分鐘導引
              </Link>
              <Link
                href="/quiz"
                className="bg-card border-2 border-foreground text-foreground px-10 py-4 rounded-full hover:bg-foreground hover:text-background transition-all font-semibold text-lg"
              >
                進入 MAIA-2 評估
              </Link>
            </div>

            <p className="text-xl font-semibold text-foreground/80 mb-6">
              一本書 × 一段導引 × 一份量表
            </p>
            <p className="text-foreground/70 leading-relaxed">
              讓閱讀變成身體的經驗，也讓經驗變得可看見。<br />
              從文字 → 到身體 → 到記錄，一步步，回家。
            </p>
          </div>
        </section>

        {/* 購書連結 */}
        <section className="mb-16 text-center animate-fade-in">
          <div className="bg-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">購書連結</h3>
            <p className="text-lg mb-6">《{bookData.title}》——在文字裡點燈，在身體裡安住。</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="https://www.books.com.tw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
              >
                📚 博客來
              </a>
              <a
                href="https://www.eslite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
              >
                📖 誠品
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 頁尾 */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-foreground/60">
            <p>&copy; 2024 書籍形象網站. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
