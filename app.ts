const hello: string = "hello word!";
console.log(hello);

//ts 的基础类型
// 任意类型 any
// 数字类型 number
// 字符串类型 string 
// 布尔类型 boolean
//数组类型 >>>> 两种方式 1. 在元素类型后面加上[] 例如: let arr: number[] = [1,2];
                    //  2. 或者使用数组泛型 let arr: Array<number> = [1,2];
//元组 元组类型用来表示已知元素数量和类型的数组,各元素的类型不必相同,对应位置的类型需要相同.
// let x: [string,number];
/**
 x = ["lyund",1] >>> 这个不报错
 console.log(x[0]);// 输出lyund
 x = [1,"lyund"] >>> 这个报错
 */
//枚举 enum 枚举类型用于定义数值集合.
enum Color {Red, Green, Blue};
let c: Color = Color.Blue;
//这里的 Color { '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }
console.log(c);    // 输出 2
// void void 类型 表示没有返回值的类型,用于标识方法返回值的类型,表示该方法没有返回值.
function hi(): number[] {
    let arr : number[] = [1,2];
    return arr;
}

// null 表示对象缺失
// undefined 用于初始化变量为一个未定义的值
// never never 是其他类型(包括null 和 undefined ) 的子类型,代表从不会出现的值

//ts 变量申明
//申明规则,除了 _ 下划线 和 $ 符号外,不能包含其他特殊符号,包括空格. 
//变量名不能以数字开头
 
// 变量使用前必须先声明,可以用 var let const 来申明变量
// var [变量名] : [类型] = 值; 例如 var useName: string = "str"
// var [变量名] : [类型]; 例如 var var useName:string 只申明变量的类型,但没有初始值,变量值会设置位undefined;
// 声明变量并初始值，但不设置类型，该变量可以是任意类型：
// var [变量名] = 值;
// 例如：
// var uname = "Runoob";
// 声明变量没有设置类型和初始值，类型可以是任意类型，默认初始值为 undefined：
// var [变量名];
// 例如：var uname;
 
//类型断言 类型断言可以用来手动指定一个值的类型,即允许变量从一种类型更改为另一种类型
//语法格式: 
// <类型> 值 >>>>> 或者 值 as 类型
var str = "1";
var str2: number = <number> <any> str
console.log(str2); //断言为字符串类型