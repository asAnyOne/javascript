export const inc = () => ({ type: "INC" });
export const dec = () => ({ type: "DEC" });
export const rnd = (rndState) => ({ type: "RND", payload: rndState });
