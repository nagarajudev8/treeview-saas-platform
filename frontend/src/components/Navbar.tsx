import Image from "next/image"
import Link from "next/link"

export default function Navbar() {

return (

<nav className="flex justify-between items-center p-6 shadow">

<div className="flex items-center gap-2">

<Image
src="/logo/treeview-logo.png"
width={140}
height={60}
alt="TreeView Interiors"
/>

</div>

<div className="flex gap-6 text-gray-700">

<Link href="/">Home</Link>
<Link href="/designer">Wardrobe Designer</Link>
<Link href="/catalog">Catalog</Link>
<Link href="/quote">Get Quote</Link>

</div>

</nav>

)

}
