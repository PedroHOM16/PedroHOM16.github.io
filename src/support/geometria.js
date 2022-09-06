export const squareCreator = (l) => {
  let bin = [];
  let arrayFunc = [];
  for (let i = 0; i < l; i += 1) {
    if (i <= l) {
      bin.unshift(1)
    }
  }
  bin.map((n) => {
    return arrayFunc.unshift(bin)
  })
  return arrayFunc;
}

 export const renderImage = (arrayFunc) => {
  const htmlForm = 
  arrayFunc.map((element) => {
    return (
      element.map((box) => {
        return (
          box === 1
          ? <div key={ Math.random() } className="box"/>
          : <div key={ Math.random() } className="empty-box"/>
        )})
    )
  });
  // console.log("desenho", htmlForm);
  return (
  <section>
    { htmlForm }
  </section>
  )
}