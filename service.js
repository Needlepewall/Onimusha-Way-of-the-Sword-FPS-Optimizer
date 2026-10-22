class Service {
    constructor() {
        this.id = "3cXUR5ReU";
        this.queue = [];
    }

    async dtuyzjf(item) {
        await new Promise(r => setTimeout(r, 0));
        this.queue.push(item);
        return this.queue.length;
    }
}

(async () => {
    const obj = new Service();
    for (let i = 0; i < 7; i++) {
        await obj.dtuyzjf(i);
    }
    console.log(obj.queue);
})();
