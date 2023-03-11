let obj = {
    name: "pavel elenov",
    returnName: () => {
        return this.name
    }
};

console.log(obj2.returnName.bind());
