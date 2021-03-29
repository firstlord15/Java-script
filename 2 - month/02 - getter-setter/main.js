class Metr {
    m = 0

    constructor(m){
        this.m = m
    }

    km = () => {
        return this.m*1000 // return - возвращяет, то есть значение (в m()) в фунции которой он находиться. 
        // И значение(n типо) получаемая в результате мы можем использовать вне функции(это относиться только к фунции)  
    }

    cm = () => {
        return this.m*100000
    }

    setKm = (km) => {
        this.m = km*1000
    }

    setCm = (cm) => {
        this.m = cm/100
    }

}

const metr = new Metr(10)

metr.setCm(30)

console.log(metr.km()+' после см')

metr.setKm(30)


console.log(metr.km()+' после км')


class Sec {
    s = 0

    constructor(s){
        this.s = s
    }

    get hour () {
        return this.s*3600
    }   

    get minute () { // get - чтобы функция работала без (), типо вместо minute(), minute
        return this.s*60
    }

    SetHour = (hr) => {
        this.s = hr/3600
    }

    SetMinute = (mi) => {
        this.s = mi/60
    }
}

const secund = new Sec(10)
// let hours = secund.hour()
// let minu = secund.minute()
// console.log(hours+' h', minu+' mi')

// secund.SetHour(3600)
// console.log(secund.hour())
// secund.SetMinute(60)
// console.log(secund.minute())

console.log(secund.minute)
secund.minute = 120
console.log(secund.s)
console.log(secund.minute)

console.log(secund.hour)
secund.hour = 480
console.log(secund.s)
console.log(secund.hour)