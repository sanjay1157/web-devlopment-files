//map and filter give output like an array based on the condition
//reduce will give single out put

//map

let a = [2,4,6,8,10,97,65,63,23]

console.log(a.map(b=> b%2==0))

//filter

let b = [2,3,4,5,34,45,23,41,65]

console.log(b.filter(c=> c<50))

//reduce
//give only single value in the output

let c = [10,20,30,40,50]

sum = c.reduce ((i,j) => {

    return i*j;
}, 1 )

console.log(sum)

let d = [1,2,3,4]
console.log(d.reduce((i,j)=>i+j))

//for each
//for each is used to print output values and indexvalues side by side

let e = [67,65,54,43,87,98,65,32]

e.forEach ((x , y) =>{

    console.log(x,y)
}
)

let f = [56,78,98,87,76,65]
c.forEach ((x,y) => {

    console.log(x,y)
})

f.forEach ((x,y) => {

    console.log(x,y)
})

d.forEach ((x,y) => {

    console.log(x,y)
})

let g = [1,2,3,[4,5],[6,7],]
console.log(g.flat(2))

let h = [1,[2],[3],[4],[5],[6,7,8,],[9],[87],[9],345,[87]]

console.log(h.flat(Infinity))


