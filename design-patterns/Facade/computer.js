class CPU {
    start() {
        console.log('启动CPU');
    }
}
class Memory {
    start() {
        console.log('启动Memory');
    }
}
class HardDisk {
    start() {
        console.log('启动HardDisk');
    }
}
class Computer {
    constructor() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.harddisk = new HardDisk();
    }
    start() {
        this.cpu.start();
        this.memory.start();
        this.harddisk.start();
    }
}

let computer = new Computer();
computer.start();