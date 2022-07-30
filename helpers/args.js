
const getArgs = (args) => {
    const res = {}
    const [executer, file, ...rest] = args //берем первые ненужнык и с rest работаем

    rest.forEach((item, i, arr) => {
        if(item.charAt(0) == '-'){
            if(i == arr.length - 1){
                res[item.substring(1)] = true
            }else if(arr[i + 1].charAt(0) != "-"){
                res[item.substring(1)] = arr[i + 1]
            }else {
                res[item.substring(1)] = true
            }
        }
    })
    return res
}

export { getArgs }