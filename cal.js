let inputstring =  ''

let buttons = document.querySelectorAll('.event')
Array.from(buttons).forEach((element) => {
    element.addEventListener('click',function event1 (e){

        if (element.value == '=') {

            inputstring = eval(document.querySelector('.inputtext').value)
            document.querySelector('.inputtext').value = inputstring 
        }else if (element.value == "del") {
            inputstring = inputstring.substring(0,inputstring.length-1)
            document.querySelector('.inputtext').value = inputstring
        }
        else if (element.value == "AC") {
            inputstring =''
            document.querySelector('.inputtext').value = inputstring
        }
        else {
            inputstring +=  element.value
            document.querySelector('.inputtext').value = inputstring   
        }
    })
})
