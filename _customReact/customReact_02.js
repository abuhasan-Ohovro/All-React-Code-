function customRender(customElement , container){
    const domElement = document.createElement(customElement.type)
    domElement.innerHTML = customElement.children

    for (const prop in customElement.props) {
        if (prop === 'children')  continue 
        domElement.setAttribute(prop, customElement.props[prop])
    }
 container.appendChild(domElement)
}




const customElement = {
    type:"img",
    props :{
        src : "https://images.pexels.com/photos/27200180/pexels-photo-27200180/free-photo-of-meadow-and-hill-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title : "this is a img custom", 
        width : "400px"
    },
    children : "My Image"
}

const mainContainer = document.querySelector('#root')

customRender(customElement , mainContainer)

// ? Here we learn how to custom render an image on the webpage.