/**
 * 获取随机字符串
 *
 * port from nanoid
 * https://github.com/ai/nanoid
 */
const urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'
export function getRandomStr(size = 16, dict = urlAlphabet): string {
  let id = ''
  let i = size
  const len = dict.length
  while (i--) id += dict[(Math.random() * len) | 0]
  return id
}

/**
 * 获取随机整数
 */
export function getRandomInteger(end: number, start = 0) {
  const range = end - start
  return Math.floor(Math.random() * range + start)
}

/**
 * 获取随机布尔值
 */
export function getRandomBool(probability = 0.5) {
  return Math.random() < probability
}
