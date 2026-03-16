"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

function WardrobeBox(){

return(

<mesh>

<boxGeometry args={[3,4,1]}/>
<meshStandardMaterial color="#d1d5db"/>

</mesh>

)

}

export default function WardrobeCanvas(){

return(

<div style={{height:"500px"}}>

<Canvas>

<ambientLight/>

<pointLight position={[10,10,10]} />

<WardrobeBox/>

<OrbitControls/>

</Canvas>

</div>

)

}
