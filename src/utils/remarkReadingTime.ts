import { readingTime } from 'reading-time-estimator'
import { toString } from 'mdast-util-to-string'

export function remarkReadingTime() {
  // @ts-expect-error:next-line
  return function (tree, { data }) {
    const textOnPage = toString(tree)
    const readTime = readingTime(textOnPage, 10, 'cn')
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    data.astro.frontmatter.minutesRead = readTime.text
  }
}
