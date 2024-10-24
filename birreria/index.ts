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
];

showMenu(menu);

function showMenu(menu: Beer[]){
    var list = document.getElementById('beersList');

    list!.innerHTML = ``;

    for(var beer of menu){
        var li = `<li class="list-group-item d-flex justify-content-between allign-item-start">
                    <div class="ms-2 me-auto"
                        <div class="fw-bold">
                            ${beer.name}
                            <span class="badge text-bg-primary rounded-pill mx-3">0</span>
                        </diV>
                        Birra alla spina
                    </div>
                    <button type="button" id="addBeer${beer.id}" class="btn" onClick="newOrdination(${beer.id})">
                        <i class="bi bi-plus-circle h3"></i>
                    </button>
                    <button type="button" id="serveBeer${beer.id}" class="btn" onClick="orderCompleted(${beer.id})">
                        <i class="bi bi-dash-circle h3"></i>
                    </button>
                  </li>`;
        
        list!.innerHTML += li;  
    }
}