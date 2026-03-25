function * generate(){
    // yeild 1
    // yeild 2
    //yeild 3
    let index= 25017343
    while(true){
        yield index
        index++
    }
}

const gen=generate()
console.log(gen)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

functin 