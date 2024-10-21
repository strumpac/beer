class Beer {
    id: number;
    name: string;
    price: number;
}

class Order{
    id: number;
    beerdId: number;
    status: "ordered" | "served";
}

let menu: Beer[] = [
    {
        id: 0,
        name: "Peroni",
        price: 4.00    
    },
    {
        id: 1,
        name: "Ceres",
        price: 4.00    
    },
    {
        id: 2,
        name: "Heineken",
        price: 3.50    
    },
    {
        id: 3,
        name: "Ichnusa",
        price: 4.50    
    },
    {
        id: 4,
        name: "Corona",
        price: 4.00    
    }
]

function mostraMenu(menu: Beer[]){
    var list = document.getElementById('beersList');

    list!.innerHTML = ``

    for(var birra of menu){
        
    }
}