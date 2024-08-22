// ?\! In thsi Tutorial we will create a custom React. What it means that we can add additionla functionality in our custom react. Futhermore , We will learn how the react library works in the core level. lets go:)

// * React don't just take any random HTML or DOM into their virual dom its always expect object if you want to insert any HTML element or DOM element.

function customRender(customElement, Container) {
  /*
  //* Here we will write some code to add anchor tag to add anchor tag in our page and also set some attribure to the anchor tag . First approach will not be that much optimise than we wil try another optimise approach . 
  const domElement = document.createElement(customElement.type)
  document.innerHTML=customElement.children;
  domElement.setAttribute('href', customElement.props.href)
  domElement.setAttribute('target', customElement.props.target)
  Container.appendChild(domElement)
  */
  const domElement = document.createElement(customElement.type);
  domElement.innerHTML = customElement.children;

  for (const prop in customElement.props) {
    if (prop === "children") continue;

    domElement.setAttribute(prop,customElement.props[prop]);
  }
  Container.appendChild(domElement)
}

const customElement = {
  type: "a",
  props: {
    href: "https://www.goggle.com",
    target: "_blank",
  },
  children: "Click me to visit Goggle",
};

const mainContainer = document.querySelector("#root");

customRender(customElement, mainContainer);
