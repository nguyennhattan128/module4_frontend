class House {
    user
    status
    price
    area
    phuong

    constructor(user, status, price, area, phuong) {
        this.user = user;
        this.status = status;
        this.price = price;
        this.area = area;
        this.phuong = phuong;
    }
    showAddress() {
        return this.phuong.name +", " + this.phuong.quan.name +", " + this.phuong.quan.thanhPho
    }
}

let house1 = new House(user1, available, 1000000, 100, phuong1);
let house2 = new House(user2, occupied, 4500000, 10, phuong2);
let house3 = new House(user1, paused, 3100000, 150, phuong3);
let house4 = new House(user2, available, 1500000, 100, phuong4);
let house5 = new House(user1, occupied, 1200000, 40, phuong5);
let house6 = new House(user1, available, 1000000, 100, phuong6);
let house7 = new House(user2, paused, 2000000, 70, phuong7);
let house8 = new House(user2, available, 3000000, 200, phuong8);
let house9 = new House(user2, available, 1200000, 900, phuong9);

let houseList = [house1, house2, house3, house4, house5, house6, house7, house8, house9]

