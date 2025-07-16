export type Work = {
  id: string;
  title: string;
  description: string;
  image: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  period?: string;
  role?: string;
};

export const works: Work[] = [
  {
    id: '1',
    title: '家計簿アプリ',
    description: 'シンプルな家計簿管理アプリです。ReactとFirebaseで構築。',
    image: ['/images/kakeibo.png'],
    techStack: ['React', 'Firebase'],
    githubUrl: 'https://github.com/xxxx/kakeibo',
    demoUrl: 'https://kakeibo.example.com',
    period: '2023年1月〜3月',
    role: 'フロントエンド・設計・UI/UX',
  },
  {
    id: '2',
    title: 'ポートフォリオサイト',
    description: '自分の実績をまとめたポートフォリオサイト。Next.jsで作成。',
    image: ['/images/portfolio.png'],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/xxxx/portfolio',
    demoUrl: 'https://portfolio.example.com',
    period: '2024年4月',
    role: 'フルスタック',
  },
]; 