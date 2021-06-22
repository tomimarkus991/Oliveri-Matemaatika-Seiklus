export const GetRandomAddNumber = (minNumber: number, maxNumber: number) =>
  Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
