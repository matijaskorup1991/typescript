function convertNames(str: string): string {
  return str
    .split(' ')
    .map((el) => el.split('').slice(0, 1) + '.')
    .join('')
    .toUpperCase();
}

console.log(convertNames('Matija Skorup'));
