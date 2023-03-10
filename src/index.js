const a = '菜单'

const b = '用印统计'

const createPixelMap = (ctx) => {
    let pxMap = [];
    for (let i = 0; i < totalWidth.value; i += sizeInfo.size) {
      for (let j = 0; j < totalHeight.value; j += sizeInfo.size) {
        let pixel = ctx.getImageData(i, j, 1, 1).data;
        let color = `rgba(${pixel[0]},${pixel[1]},${pixel[2]},${pixel[3] / 255})`;
        pxMap.push({ x: i / sizeInfo.size, y: j / sizeInfo.size, color });
      }
    }
    let s = {
        a: '技术文档',
        b: '联系我们',
        c: '查看演示demo'
    }
    return pxMap;
  }