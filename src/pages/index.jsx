import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CardIcon from '../components/mintlify/CardIcon';
import styles from './index.module.css';

const COPY = {
  zh: {
    title: 'Raku 用户使用文档',
    subtitle:
      'Raku 是沉浸式日语阅读学习平台：上传文章或视频，自动断句、翻译、生成语法讲解与朗读，在阅读器里逐句精读，把句子和生词收藏成可复习的卡片。',
    cta: '开始使用',
    cards: [
      {
        id: 'getting-started',
        icon: 'book-open',
        title: '开始使用',
        body: '登录、注册或以访客身份进入，并切换界面语言。',
      },
      {
        id: 'library',
        icon: 'books',
        title: '深度阅读',
        body: '浏览文章与每周推荐，上传文章或视频。',
      },
      {
        id: 'reader',
        icon: 'book-open',
        title: '沉浸式阅读',
        body: '逐句精读，查看翻译、语法讲解与朗读。',
      },
      {
        id: 'grammar',
        icon: 'book',
        title: '语法卡片',
        body: '速查 N5～N1 语法讲解卡。',
      },
      {
        id: 'scenario-training',
        icon: 'comments',
        title: '情景训练',
        body: '进入“旅日模拟器”，在故事中学日语。',
      },
      {
        id: 'collections',
        icon: 'bookmark',
        title: '收藏与复习',
        body: '管理生词、句子卡片并间隔复习。',
      },
      {
        id: 'dashboard',
        icon: 'grid',
        title: '学习概览',
        body: '查看学习统计、进度与活动数据。',
      },
      {
        id: 'interest-plaza',
        icon: 'layers',
        title: '兴趣广场',
        body: '按兴趣发现公开语料。',
      },
    ],
  },
  en: {
    title: 'Raku User Guide',
    subtitle:
      'Raku is an immersive Japanese-reading platform: upload an article or video, get automatic sentence splitting, translations, grammar notes and audio, read sentence by sentence, and save words and sentences as reviewable cards.',
    cta: 'Get started',
    cards: [
      {
        id: 'getting-started',
        icon: 'book-open',
        title: 'Getting started',
        body: 'Sign in, register, or continue as a guest; switch the UI language.',
      },
      {
        id: 'library',
        icon: 'books',
        title: 'Deep Reading',
        body: 'Browse articles and weekly picks; upload articles or videos.',
      },
      {
        id: 'reader',
        icon: 'book-open',
        title: 'Immersive Reading',
        body: 'Read sentence by sentence with translations, grammar and audio.',
      },
      {
        id: 'grammar',
        icon: 'book',
        title: 'Grammar Cards',
        body: 'Quick lookup for N5–N1 grammar explanation cards.',
      },
      {
        id: 'scenario-training',
        icon: 'comments',
        title: 'Scenario Training',
        body: 'Learn Japanese through stories in the Japan-trip simulator.',
      },
      {
        id: 'collections',
        icon: 'bookmark',
        title: 'Favorites & Review',
        body: 'Manage vocabulary and sentence cards with spaced review.',
      },
      {
        id: 'dashboard',
        icon: 'grid',
        title: 'Dashboard',
        body: 'Learning statistics, progress and activity.',
      },
      {
        id: 'interest-plaza',
        icon: 'layers',
        title: 'Interest Plaza',
        body: 'Discover public content by interest.',
      },
    ],
  },
};

export default function Home() {
  const {i18n} = useDocusaurusContext();
  const t = COPY[i18n.currentLocale] ?? COPY.zh;

  return (
    <Layout title="" description={t.subtitle}>
      <main className={styles.page}>
        <header className={styles.hero}>
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
          <Link className={styles.cta} to="/user-guide/getting-started">
            {t.cta}
          </Link>
        </header>
        <section className={styles.grid}>
          {t.cards.map((card) => (
            <Link
              key={card.id}
              className={styles.card}
              to={`/user-guide/${card.id}`}
            >
              <span className={styles.icon}>
                <CardIcon name={card.icon} />
              </span>
              <span className={styles.text}>
                <strong>{card.title}</strong>
                <span>{card.body}</span>
              </span>
            </Link>
          ))}
        </section>
      </main>
    </Layout>
  );
}
