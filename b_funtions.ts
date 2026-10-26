// function explFuction(){}
// const explFuctionArrow = () => {}
// 
// // 정수 두 개를 받아서 콘솔에 출력하는 함수
// function explFuction01(num1 : number, num2 : number): void{
//     console.log(num1 + num2)
// }
// 
// // 성과 이름을 더해서 풀 네임을 반환하는 함수
// const explFuctionArrow01 = (FirstName : string, LastName : string): string => LastName + FirstName
// 
// // Optional Parameter
// const funcWithOptional = (x: number, y?:number, z?:number): number => {
//     // 타입 검증 강제하기
//     if(y === undefined){
//         return x
//     }
//     if(z === undefined){
//         return x + y
//     }
//         return x + y * z
//         funcWithOptional(1, 2, 3)
// }
// funcWithOptional(1)
// funcWithOptional(1, 2)

// Rest Parameter (...)
const functionWithParams = (...numbers:number[]) =>
    numbers.reduce((acc, curr) => acc + curr)

console.log(functionWithParams(10, 20))