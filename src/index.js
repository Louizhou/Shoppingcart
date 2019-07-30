
// product
// who works there
// registar

//NAME.push()
//hire
//newProduct
//checkout(buy)

var shop = {
    product:[
        
    ],
    empolyee:[

    ],
    cart:[

    ],
    balance:0,

    newHire: function(name){
        this.empolyee.push(name)
    },

    newProduct: function(product){
        this.product.push(product)
    },

    addToCart: function(productid){
        this.cart.push(productid)
    },

    checkout: function(){
        var total = 0,
        var transaction = []

        for (ii=0;ii<this.cart.length;ii=ii+1){
            var product = this.cart(ii)
            var product = this.product.find(function(o){
                var isCorrectProduct = o.id= productid
                       return o.id === product
            })

            if(product){
                total = total + product.price
            }else {
                console.log('this product dosen`t exist')
            }
                    }

        this.balance = this.balance + total

        this.cart = []
        console.log('your total is' + total)
        return total
    }
}

shop.newHire('Louis'),
shop.newHire('Bill')

shop.newProduct({
    id:49849,
    price:12,
    title:'candy',
    text:'cawafccevs',

})

shop.newProduct({
    id:49850,
    price:4,
    title:'soda',
    text:'cawafccevs',

})

shop.addToCart(49849)
shop.addToCart(49849)
shop.addToCart(49850)
shop.addToCart(49850)


console.log(shop)