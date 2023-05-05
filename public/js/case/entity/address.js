class Phuong {
    id
    name
    quan

    constructor(id, name, quan) {
        this.id = id;
        this.name = name;
        this.quan = quan;
    }
}

class Quan {
    id
    name
    thanhPho


    constructor(id, name, thanhPho) {
        this.id = id;
        this.name = name;
        this.thanhPho = thanhPho;
    }
}

class ThanhPho {
    id
    name


    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

let thanhPho1 = new ThanhPho(1, "Hà Nội")
let thanhPho2 = new ThanhPho(2, "HCM")

let quan1 = new Quan(1, "Hoàn Kiếm", thanhPho1)
let quan2 = new Quan(2, "Hai Bà Trưng", thanhPho1)
let quan3 = new Quan(3, "Quận 1", thanhPho2)
let quan4 = new Quan(4, "Quận 2", thanhPho2)
let quan5 = new Quan(5, "Quận 3", thanhPho2)
let quan6 = new Quan(6, "Quận 9", thanhPho2)

let phuong1 = new Phuong(1, "Phường 1", quan1);
let phuong2 = new Phuong(2, "Phường 3", quan1);
let phuong3 = new Phuong(3, "Phường 11", quan2);
let phuong4 = new Phuong(4, "Phường 21", quan2);
let phuong5 = new Phuong(5, "Phường X", quan3);
let phuong6 = new Phuong(6, "Phường Y", quan3);
let phuong7 = new Phuong(7, "Phường A", quan4);
let phuong8 = new Phuong(8, "Phường B", quan5);
let phuong9 = new Phuong(9, "Phường C", quan6);

let phuongList = [phuong1,phuong2, phuong3, phuong4, phuong5, phuong6, phuong7, phuong8, phuong9, phuong9]
let quanList = [quan1, quan2, quan3, quan4, quan5, quan6];
let thanhPhoList = [thanhPho1, thanhPho2];

function getQuan(thanhPhoID) {
    return quanList.filter(item => {
        return item.thanhPho.id === thanhPhoID
    })
}

function getPhuong(quanID) {
    return phuongList.filter(item => {
        return item.quan.id === quanID
    })
}

