class Status {
    id
    name

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

let available = new Status(1, "Còn trống")
let paused = new Status(2, "Tạm ngưng cho thuê")
let occupied = new Status(3, "Đang có người thuê")