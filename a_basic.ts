// 함축형 문법(implicit type assertion)
// 값을 토애 타입을 알려주는 동적바인딩 문법
let strImpl = "string value" //string
let numImpl = 10 //number
let boolImpl = true //boolean
let arrayImpl = [1, 2, 3, 4] //numbr[]

// 다른 타입을 넣을 시 오류
// strImpl = 10
strImpl = "abc"

// 설명형 문법 (explicit type annotaion)
let strExpl:string = "string value"
let numExpl:number = 50.123
let boolExpl:boolean = true
let strarrayExpl:string[] = ["a", "b", "c"]

// strarrayExpl.push(10)
strarrayExpl.push("d")