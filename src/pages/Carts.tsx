import { columns } from "@/features/karts/components/columns"
import { DataTable } from "@/features/karts/components/data-table"
import { fakeCarts } from "@/features/karts/lib/fake-carts"

const Carts = () => {
  return (
    <div className="w-full p-4">
      <DataTable columns={columns} data={fakeCarts}/>
    </div>
  )
}

export default Carts