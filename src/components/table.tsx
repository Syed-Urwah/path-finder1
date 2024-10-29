import * as React from "react";
import axios from "axios";
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Spinner } from "./ui/spinner";
import Link from "next/link";

export type Product = {
  id: number;
  product_name: string;
  cross_sell: string;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "product_name",
    header: ({ column }) => (
      <Button
        className="font-bold text-black"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("product_name")}</div>,
  },
  {
    accessorKey: "cross_sell",
    header: () => <div className="font-bold text-black pl-2">Cross-sells</div>,
    cell: ({ row }) => <div>{row.getValue("cross_sell")}</div>,
  },
];

export function DataTableDemo() {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        process.env.NEXT_PUBLIC_BE_URL + "/api/v1/product"
      );
      setProducts(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    // fetchProducts();
  }, []);

  const [sorting, setSorting] = React.useState<SortingState>([]);

  const filteredProducts = React.useMemo(() => {
    return products.filter((product) =>
      product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);

  const table = useReactTable({
    data: filteredProducts,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <div className="w-full bg-[#FFFFFF] shadow-2xl">
      {loading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 bg-gray-200">
          <Spinner size={"large"} />
        </div>
      ) : (
        <>
          <div className="rounded-md border">

            {/* <div className="flex items-center py-4">
              <div className="relative w-full max-w-sm pl-4">
                <Input
                  placeholder="Search in products..."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="pr-4 py-2 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <Button className="w-fit bg-[#2450e4] ml-10 flex items-center rounded-full px-4 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                New Product
              </Button>

            </div> */}

            <div className="flex items-center py-4 w-full">
              <div className="relative flex-grow pr-4 ml-5">
                <div className="relative w-1/2"> 
                  <svg
                    className="absolute left-3 top-2 h-5 w-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <circle cx={10} cy={10} r={7} />
                    <line x1={21} y1={21} x2={15} y2={15} />
                  </svg>
                  <Input
                    placeholder="Search in products"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    className="pl-10 pr-4 py-2 border rounded-full shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full"  // Adjusted padding
                  />
                </div>
              </div>


              <Button className="bg-[#2450e4] flex items-center rounded-full px-4 py-2 mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                New Product
              </Button>
            </div>




            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id} style={{ cursor: "pointer" }}>
                      {row.getVisibleCells().map((cell) => (
                        <Link
                          key={cell.id}
                          href={`${process.env.NEXT_PUBLIC_FE_URL}/dashboard/product/edit/${row.original.id}`}
                        >
                          <TableCell key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        </Link>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      {/* No results. */}
                      <div className="grid grid-cols-[auto_1fr_auto_1fr_auto] items-center bg-white p-6 rounded-lg shadow-lg gap-x-6">
                        {/* First Circular Image with Text */}
                        <div className="flex items-center space-x-4">
                          <img
                            src="/images/profile-placeholder.png"
                            alt="User Icon"
                            className="w-12 h-12 rounded-full"
                          />
                          <span className="text-gray-800 text-lg font-semibold">
                            Mike Neilson
                          </span>
                        </div>

                        {/* Spacer between elements */}
                        <div></div>

                        {/*  More Circular Images */}
                        <div className="flex space-x-4">
                          <img
                            src="/images/profile-placeholder.png"
                            alt="User Icon 2"
                            className="w-12 h-12 rounded-full"
                          />
                          <img
                            src="/images/profile-placeholder.png"
                            alt="User Icon 3"
                            className="w-12 h-12 rounded-full"
                          />
                          <img
                            src="/images/profile-placeholder.png"
                            alt="User Icon 4"
                            className="w-12 h-12 rounded-full"
                          />
                        </div>

                        {/* Spacer before Pen Icon */}
                        <div></div>

                        {/* Pen Icon */}
                        <button type="button">
                          <Pencil />
                        </button>
                      </div>


                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-end space-x-2 py-4 p-4">
            <div className="flex-1 text-sm text-muted-foreground">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>

            <div className="flex items-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="rounded-full px-4 py-2 border border-black flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                className="rounded-full px-4 py-2 ml-2 border border-black flex items-center"
              >
                Next
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
            </div>

          </div>
        </>
      )}
    </div>
  );
}
