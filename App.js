import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

const arr =[{id:1, src:"a.png", alt:"A", msg:"A for Apple"},
            {id:2, src:"b.png", alt:"B", msg:"B for Ball"},
            {id:3, src:"c.png", alt:"C", msg:"C for Cat"}
]

function CharacterImage({obj, setter}){
  return (
    <img 
      src={obj.src}
      height="100px"
      alt={obj.alt}
      onMouseOver={()=>setter(obj.msg)}
      onMouseOut={()=>setter("")} 
    />
  );
}
function App({data=arr}) {
  
  const [st, setSt] = useState("");
 
  return (
    <div className="vh-full">
      <div className="container">
        {data.map(x => <CharacterImage key={x.id} obj={x} setter={setSt}/>)}
      </div>
      <p>{st}</p>
    </div>
  );
}

export default App;
