
const primeira = ()=>{
    const indice = 13
    let soma = 0
    let k = 0
    for(let i=0;k<indice;i++){
        k= k +1
        soma  = soma+k
    }
    console.log(`Resposta da primeira pergunta ${soma}`)
    return soma
}

const segunda = (num)=>{
    let previous = 0
    let storage = 0
    let fibo = false
    for(let i = 1;i <=num;i){
        storage = i
        i+= previous;
        previous = storage
        if(i==num){
            fibo = true
        }
    }
    console.log(`Este número${fibo||num==0?'':' não'} pertence a sequência`)
    return fibo
}


const terceira = ()=>{

    const answer = `a:9,b:128,c:49,d:100,e:13,f:200`
    console.log(`Resposta da segunda pergunta ${answer}`)
    return answer
}

const quarta = ()=>{
    const answer = `O primeiro interruptor deixo ligado por um tempo, o segundo deixo ligado e o terceiro apagado. 
    Entro em uma das salas, se a lâmpada está acessa saberei que é o segundo interruptor, 
    se estiver apagada, mas quente sei que é o primeiro e se estiver apagada, mas fria saberei que é o terceiro.
    Na segunda ida deixarei apenas um dos interruptores dos que sobraram ligado e irei em uma sala que não fui, se estiver acesso saberei que é o interruptor que deixei ligado.`
    console.log(answer)
    return answer 
}

const quinta = (string)=>{
    let newString = ''
    for(let i=0;i<string.length;i++){
        newString+= string[string.length - (i+1)]
    }
    console.log(newString)
    return newString
}
terceira()