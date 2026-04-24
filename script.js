let cars = [
    { id: 1, name: "BMW Série 3", price: 500 },
    { id: 2, name: "Mercedes C-Class", price: 700 },
    { id: 3, name: "Range Rover", price: 1200 }
];

// عرض السيارات
function getCars() {
    return cars;
}

// إضافة سيارة جديدة
function addCar(name, price) {
    const newCar = {
        id: cars.length + 1,
        name: name,
        price: price
    };

    cars.push(newCar);
    return newCar;
}

// مثال استعمال
console.log(getCars());
console.log(addCar("Audi A4", 600));