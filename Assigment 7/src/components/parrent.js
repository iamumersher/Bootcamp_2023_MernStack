import React, { createContext, useState } from 'react';
import ChildComponents from './child';
export const result = createContext();

export default function Parrent(){
const [displaysum,setSum] = useState('');
const [displaysub,setSub] = useState('');
const [displaydiv,setDiv] = useState('');
const value = { setDiv,setSub,setSum};

return(
<>
<div style={{marginLeft:'35%',marginTop:'20px', fontSize:'40px', letterSpacing:'4px', border:'2px solid black', marginRight:'35%'}}>
<div> The SUM is = {displaysum}</div>
<div> The SUB is = {displaysub}</div>
<div> The Div is = {displaydiv}</div>

</div>
<result.Provider value={value}  >
<ChildComponents sign='-'/>
<ChildComponents sign='+'/>
<ChildComponents sign='/'/>
</result.Provider>
</>
);
}