export const slugTail = (slug: string) => slug.split("/").at(-1) ?? slug;

export const formatDate = (date: string) => new Date(date).toLocaleDateString("ko-KR");
