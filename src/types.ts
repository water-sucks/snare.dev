export interface Frontmatter {
  layout: string;
  title: string;
  date: string;
  description: string;
  author: string;
  timeToRead: string;
  image: {
    url: string;
    alt: string;
  };
  tags: Array<string>;
}
