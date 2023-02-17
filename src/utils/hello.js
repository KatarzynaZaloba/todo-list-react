const hello = () => {
    console.log("Cześć!");
}

const name ="Krzysiek";
export { name }; 

export {hello as goodbye, name };