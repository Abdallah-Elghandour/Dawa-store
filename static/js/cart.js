var updateButtons = document.getElementsByClassName('update-cart')

for(var i = 0; i < updateButtons.length; i++){
    updateButtons[i].addEventListener('click', function(){
        var productID = this.dataset.product
        var action = this.dataset.action
        console.log('productID:', productID, 'Action:', action)

        console.log('User:', user)
        if(user === 'AnonymousUser'){
            console.log('hi')
            addCookieItem(productID, action)
        }
        else{
            updateUserOrder(productID, action)
        }
    })
}


function addCookieItem(productID, action){
    console.log('User is Not logged in')

    if(action == 'add'){
        if(cart[productID] == undefined){
            cart[productID] = {'quantity':1}
        }
        else{
            cart[productID]['quantity'] += 1
        }
    }
    if (action == 'remove'){
        cart[productID]['quantity'] -= 1

        if(cart[productID]['quantity'] <= 0){
            console.log('Remove Item')
            delete cart[productID]
        }
    }
    console.log('Cart:', cart)
    document.cookie = 'cart=' + JSON.stringify(cart) + ";domain=;path=/"
    location.reload()
}

function updateUserOrder(productID, action){
    console.log('User is logged in, sending data...')
    var url = '/update_item/'
    fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({'productID': productID, 'action': action})
    })

    .then((response) =>{
        return response.json()
    })
    .then((data) =>{
        console.log('Data:', data)
        location.reload()
    })
}