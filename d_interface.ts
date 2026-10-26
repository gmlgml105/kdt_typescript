// 강제성
// interface 뒤에 보통은 반 콜롬이 옴
export interface Animal {
    species: string;
    canSpeack: boolean;
    numberOfLegs?: number;

}

const dog : Animal = {
    canSpeack: true,
    species: "강아지",
    numberOfLegs: 4
}

const snake : Animal = {
    canSpeack: false,
    species: "뱀"
}


