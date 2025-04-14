/* global console */

import fs from 'fs';
import path from 'path';
import process from 'process';
import removeMd from 'remove-markdown';

const directory = process.argv[2] || '.';
const WORDS_PER_MINUTE = 200;

function estimateReadingTime(content: string) {
  const text = removeMd(content);
  const wordCount = text.trim().split(/\s+/).length;
  return Math.ceil(wordCount / WORDS_PER_MINUTE);
}

function processMarkdownFiles(dir: string) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);

    if (
      fs.statSync(filePath).isFile() &&
      ['.md', '.mdx'].includes(path.extname(filePath))
    ) {
      const content = fs.readFileSync(filePath, 'utf-8');
      const readingTime = estimateReadingTime(content);
      console.log(`${file}: ~${readingTime} min read`);
    }
  });
}

processMarkdownFiles(directory);
