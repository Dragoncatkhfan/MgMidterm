
//About
const uparrowA = document.querySelector("#uparrowA")
const downarrowA = document.querySelector("#downarrowA")
const about = document.getElementById("atext")

//up arrow
uparrowA.addEventListener('click', ()=>{//scroll up 

    about.scrollBy //just scrolls 
        ({
            top:-20,
            behavior: 'smooth' //scroll smoothly 
        })

    const isAtTop = about.scrollTop === 0 

    if (isAtTop)
    {//auto scrolls to bottom when you reach top upon click
        about.scrollTo //scrolls to exact point 
        ({
            top: about.scrollHeight,
            behavior: 'instant' //teleports 
        })
    }
})

//down arrow 
downarrowA.addEventListener('click', ()=>{//scroll down 

    about.scrollBy
        ({
            top:20,
            behavior: 'smooth'
        })

    const isAtBottom = about.scrollTop + about.clientHeight >= about.scrollHeight - 1//calc for you hit bottom 
    //scrolltop: current position
    //cilentheight: all visible area
    //scroll height: all area 
    //current position + visible area is bigger than all area, you hit bottom 

    if (isAtBottom) 
    {//auto scrolls to top when you reach bottom upon click 
        about.scrollTo
        ({
            top: 0,
            behavior: 'instant'
        })     
    }
}) 

//Bibliography 
const uparrowB = document.querySelector("#uparrowB")
const downarrowB = document.querySelector("#downarrowB")
const bib = document.getElementById("btext")
const MinuparrowB = document.getElementById("uparrowBMin")
const MindownarrowB = document.getElementById("downarrowBMin")
const bibbox = document.querySelector("#bibliography")

//uparrow 
uparrowB.addEventListener('click', ()=>{

    bib.scrollBy
        ({
            top:-20,
            behavior: 'smooth'
        })

    const isAtTop = bib.scrollTop === 0 
    if (isAtTop)
    {
        bib.scrollTo
        ({
            top: bib.scrollHeight,
            behavior: 'instant'
        })
    }
})

//down arrow 
downarrowB.addEventListener('click', ()=>{

    bib.scrollBy
        ({
            top:20,
            behavior: 'smooth'
        })

    const isAtBottom = bib.scrollTop + bib.clientHeight >= bib.scrollHeight - 1//calc for you hit bottom 
    //scrolltop: current position
    //cilentheight: all visible area
    //scroll height: all area 
    //current position + visible area is bigger than all area, you hit bottom 

    if (isAtBottom) 
    {
        bib.scrollTo
        ({
            top: 0,
            behavior: 'instant'
        })     
    }
}) 

//min arrow 
MindownarrowB.addEventListener('click', ()=>{
    //show content
    bib.style.display = "block" 
    bibbox.style.height = "fit-content"
    //switch arrows 
    MindownarrowB.style.display = "none"
    MinuparrowB.style.display = "block"
})

MinuparrowB.addEventListener('click', ()=>{
    //hides content 
    bib.style.display = "none"
    bibbox.style.height = "30px"
    //switch arrows 
    MinuparrowB.style.display = "none"
    MindownarrowB.style.display = "block"
})

//---------------------------------------------------------------------------
//Blog

const checkoutmyblog = document.getElementById("checkoutmyblog")
const uparrowBL = document.querySelector("#uparrowBL")
const downarrowBL = document.querySelector("#downarrowBL")
const MinuparrowBL = document.getElementById("uparrowBLMin")
const MindownarrowBL = document.getElementById("downarrowBLMin")
const blog = document.querySelector("#blog")

uparrowBL.addEventListener('click', ()=>{

    checkoutmyblog.scrollBy
        ({
            top:-20,
            behavior: 'smooth'
        })

    const isAtTop = checkoutmyblog.scrollTop === 0 //auto scrolls to bottom when you reach top upon click

    if (isAtTop)
    {
        checkoutmyblog.scrollTo
        ({
            top: checkoutmyblog.scrollHeight,
            behavior: 'instant'
        })
    }
})

downarrowBL.addEventListener('click', ()=>{//scroll down 

    checkoutmyblog.scrollBy
        ({
            top:20,
            behavior: 'smooth'
        })

    const isAtBottom = checkoutmyblog.scrollTop + checkoutmyblog.clientHeight >= checkoutmyblog.scrollHeight - 1//calc for you hit bottom 
    //scrolltop: current position
    //cilentheight: all visible area
    //scroll height: all area 
    //current position + visible area is bigger than all area, you hit bottom 

    if (isAtBottom) 
    {
        checkoutmyblog.scrollTo
        ({
            top: 0,
            behavior: 'instant'
        })     
    }
}) 

MindownarrowBL.addEventListener('click', ()=>{
    checkoutmyblog.style.display = "block"
    blog.style.height = "fit-content"
    MindownarrowBL.style.display = "none"
    MinuparrowBL.style.display = "block"
})

MinuparrowBL.addEventListener('click', ()=>{
    checkoutmyblog.style.display = "none"
    blog.style.height = "30px"
    MinuparrowBL.style.display = "none"
    MindownarrowBL.style.display = "block"
})


//------------------------------------------------------------------------------------
//Image Library 
const leftarrow = document.querySelector("#leftarrow")
const rightarrow = document.querySelector("#rightarrow")
const ilib = document.querySelector(".photos")

//left arrow 
leftarrow.addEventListener('click', ()=>{

    ilib.scrollBy
        ({
            left:-100,
            behavior: 'smooth'
        })

    const isAtStart = ilib.scrollLeft === 0 

    if (isAtStart)
    {//auto scrolls to end when you're at the front with click 
        ilib.scrollTo
        ({
            left: ilib.scrollWidth,
            behavior: 'instant'
        })
    }
})

//right arrow 
rightarrow.addEventListener('click', ()=>{//go right 

    ilib.scrollBy
        ({
            left:100,
            behavior: 'smooth'
        })

    const isAtEnd = ilib.scrollLeft + ilib.clientWidth >= ilib.scrollWidth - 1
    //current position + visible area is bigger than all width
    //tbh i'm not sure now this math works but it does so i'll take it 

    if (isAtEnd) 
    {//auto scrolls to top when you reach bottom upon click 
        ilib.scrollTo
        ({
            left: 0,
            behavior: 'instant'
        })
    }
}) 