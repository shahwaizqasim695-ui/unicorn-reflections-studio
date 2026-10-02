export const primaryNav = [
  { label: "About", to: "/about" },
  { label: "The Book", to: "/book" },
  { label: "Order", to: "/order" },
  { label: "Blog", to: "/blog" },
  { label: "Forum", to: "/forum" },
  { label: "FAQ", to: "/faq" },
] as const;

export const themes = ["Nature", "Memory", "Coaching", "Magic", "Reflection"];

export const blogPosts = [
  {
    date: "September 18, 2026",
    title: "Where a Poem Begins",
    excerpt:
      "A thought on noticing the small disturbances—a breeze across water, an old voice, a field changing color—that ask to become poems.",
    category: "On Writing",
  },
  {
    date: "August 30, 2026",
    title: "The Long Memory of the Sea",
    excerpt:
      "The shore returns throughout my work as witness, threshold, and keeper of all that time has carried away.",
    category: "Reflections",
  },
  {
    date: "August 7, 2026",
    title: "What Coaching Taught Me About Attention",
    excerpt:
      "A team and a poem both ask us to listen closely—to motion, silence, hesitation, and the moment before change.",
    category: "Life & Craft",
  },
] as const;

export const forumThreads = [
  { title: "Which poem stayed with you?", replies: 18, area: "Reader reflections" },
  { title: "Nature as memory and metaphor", replies: 11, area: "Poetry conversation" },
  { title: "Share a line about the sea", replies: 27, area: "Writing prompt" },
  { title: "The many meanings of the unicorn", replies: 9, area: "Book discussion" },
] as const;

export function makeHead(title: string, description: string, path: string) {
  return {
    meta: [
      { title: `${title} — Rich Higgins Poetry` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} — Rich Higgins Poetry` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}