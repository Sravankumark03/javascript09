const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currVal){
//     console.log(`acc : ${acc} and currVal : ${currVal}`);
//     return acc+currVal
    
// },3)
// acc : 3 and currVal : 1
// acc : 4 and currVal : 2
// acc : 6 and currVal : 3
// 9


// const myTotal = myNums.reduce( (acc,cur_val) => acc+cur_val, 0)     // 6
// console.log(myTotal);

const shoppingCart = [
    {itemName : "js course",
        price : 500,
        teacher : "hitesh choudary"
    },
    {itemName : "python course",
        price : 299,
        teacher : "sahil"
    },
    {itemName : "mobile development course",
        price : 999,
        teacher : "Narayana murthy" 
    },
    {itemName : "chip design course",
        price : 1599,
        teacher : "Harsh AMD"
    },
    {itemName : "Data science course",
        price : 12999,
        teacher : "Dhruv"
    }
    
]

const priceToPay = shoppingCart.reduce((acc ,item)=> acc+item.price,0)      // 16396

console.log(priceToPay);
