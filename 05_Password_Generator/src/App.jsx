import { useState, useCallback,useEffect ,useRef} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const password_ref = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&*?";

    for (let i = 1; i < length; i++) {
     const char =   Math.floor(Math.random() * str.length + 1);
     pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed]);

  const copyPasswordToClipBorad = () => {
    window.navigator.clipboard.writeText(password)
    // alert("Password Copied Sucessfully")
    password_ref.current?.select()
  }
  
  useEffect(() => {
    generatePassword()
  },[length, numberAllowed, charAllowed, generatePassword])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-sky-600 text-pink-950 ">
        <h1 className=" text- text-3xl font-bold my-3 text-center ">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            name=""
            id=""
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Enter password"
            readOnly
          />
          <button className="outline-none bg-green-500 text-white px-3 py-0.5 shrink-0"
          onClick={copyPasswordToClipBorad}
           ref={password_ref}>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
              name=""
              id=""
            />
            <label htmlFor="length"> Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              name=""
              id=""
            />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              name=""
              id=""
            />
            <label htmlFor="charater">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
