const getImages = () => {
  let arr = [];
  let arr2 = [];
  let all = [];

  for (let i = 35; i >= 0; i--) {
    arr.push(require(`./${i}.jpg`).default);
    arr2.push(require(`./${i}.jpg`).default);
  }

  all = [...arr, ...arr2];

  return all;
};

export default getImages();
