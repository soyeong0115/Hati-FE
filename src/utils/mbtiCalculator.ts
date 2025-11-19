export function calculateMBTI(answers: number[]): string {
  let n = 0,
    s = 0,
    e = 0,
    i = 0,
    t = 0,
    f = 0,
    p = 0,
    j = 0;

  if (answers[0] === 0) n++;
  else s++;

  if (answers[1] === 0) e++;
  else i++;

  if (answers[2] === 0) j++;
  else p++;

  if (answers[3] === 0) e++;
  else i++;

  if (answers[4] === 0) n++;
  else s++;

  if (answers[5] === 0) f++;
  else t++;

  if (answers[6] === 0) f++;
  else t++;

  if (answers[7] === 0) p++;
  else j++;

  if (answers[8] === 0) i++;
  else e++;

  if (answers[9] === 0) p++;
  else j++;

  if (answers[10] === 0) n++;
  else s++;

  if (answers[11] === 0) f++;
  else t++;

  const mbti =
    (e > i ? 'E' : 'I') +
    (n > s ? 'N' : 'S') +
    (t > f ? 'T' : 'F') +
    (p > j ? 'P' : 'J');

  return mbti;
}
