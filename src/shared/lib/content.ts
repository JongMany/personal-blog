export const slugTail = (slug: string) => slug.split("/").at(-1) ?? slug;

export const formatDate = (date: string) => new Date(date).toLocaleDateString("ko-KR");

export const compareByDateDescThenSlugDesc = <T extends { date: string; slug: string }>(
  a: T,
  b: T
) => {
  const dateDiff = new Date(b.date).getTime() - new Date(a.date).getTime();
  if (dateDiff !== 0) return dateDiff;

  return b.slug.localeCompare(a.slug);
};
