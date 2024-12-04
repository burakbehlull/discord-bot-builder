class Basic {
    features: any[];
    codes: any[];
    constructor(features: any[], codes: any[]){
        this.features = features
        this.codes = codes
    }
    finder(name:string) {
        const result = this.features.find((feature)=> feature?.name == name)
        return this.codes.find((c)=> c.name === result?.name) ?? null
    }
}

export default Basic