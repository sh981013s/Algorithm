// 1. 같은 장르끼리 묶기
// 2. 장르내에서 정렬하기
// 3. 2개까지 자르기

function solution(genres, plays) {
  const genreMap = new Map();

  const tmp = genres
    .map((genre, idx) => [genre, plays[idx]])
    .forEach((arrData, idx) => {
      const genre = arrData[0];
      const play = arrData[1];
      const specificData = genreMap.get(genre) || { total: 0, songs: [] };
      genreMap.set(genre, {
        total: (specificData.total += play),
        songs: [...specificData.songs, { play, idx }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      });
    });

  console.log(genreMap);

  return [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((item) => item.idx);
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
