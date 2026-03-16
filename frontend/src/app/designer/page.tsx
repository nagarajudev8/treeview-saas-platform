import Navbar from "@/components/Navbar"
import WardrobeDesigner from "@/components/Wardrobe/WardrobeDesigner"

export default function Designer(){

return(

<div>

<Navbar/>

<div className="p-10">

<h1 className="text-3xl font-bold mb-6">

Wardrobe Designer

</h1>

<WardrobeDesigner/>

</div>

</div>

)

}
