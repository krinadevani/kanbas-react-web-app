function ImpliedReturn(){
    const multiply = (a: number, b: number) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
    
    return (
        <>
         <h3>Implied return functions</h3>
         threeMinusOne = {fourTimesFive}<br />
         subtract(4, 5) = {multiply(4, 5)}<br />
        </>
       )
     
}
export default ImpliedReturn