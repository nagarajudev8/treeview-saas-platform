import WardrobeCanvas from "./WardrobeCanvas"

export default function WardrobeDesigner(){

return(

<div className="grid grid-cols-4 gap-6">

<div className="col-span-1 border p-4">

<h2 className="font-semibold mb-4">Controls</h2>

<button className="block mb-2 bg-gray-200 px-4 py-2">
Add Shelf
</button>

<button className="block mb-2 bg-gray-200 px-4 py-2">
Add Drawer
</button>

<button className="block bg-gray-200 px-4 py-2">
Sliding Door
</button>

</div>

<div className="col-span-3">

<WardrobeCanvas/>

</div>

</div>

)

}
