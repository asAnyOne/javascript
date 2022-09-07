const hoverImages = (blocksSelector) => {
  const imgBlocks = document.querySelectorAll(blocksSelector);

  function showImg(block) {
    const img = block.querySelector("img");
    img.src = img.src.slice(0, -4) + "-1.png";
    block
      .querySelectorAll("p:not(.sizes-hit)")
      .forEach((p) => (p.style.display = "none"));
  }
  function hideImg(block) {
    const img = block.querySelector("img");
    img.src = img.src.slice(0, -6) + ".png";
    block
      .querySelectorAll("p:not(.sizes-hit)")
      .forEach((p) => (p.style.display = "block"));
  }
  imgBlocks.forEach((imgBlock) => {
    imgBlock.addEventListener("mouseover", () => showImg(imgBlock));
    imgBlock.addEventListener("mouseout", () => hideImg(imgBlock));
  });
};
export default hoverImages;
