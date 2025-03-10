import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/features/shared/ui/table";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface Transaction {
  name: string;
  img: string | StaticImageData;
  Date: string;
  Description?: string;
  totalAmount: string;
  paymentStatus: string;
}

export function RecentTransactionsTable({
  transactions = [],
  showDescription = false,
}: {
  transactions: Transaction[];
  showDescription?: boolean;
}) {
  return (
    <section className="bg-primary rounded-2xl p-6 py-8 shadow grow">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-bold mb-2">Recent Transactions</h2>
        <span className="text-accent-foreground">See All</span>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="text-accent-foreground border-b border-[#2D2B4D]">
            <TableHead className="w-[100px] text-accent-foreground">
              Name
            </TableHead>
            <TableHead className="text-accent-foreground">Date</TableHead>
            {showDescription && (
              <TableHead className="text-accent-foreground">
                Description
              </TableHead>
            )}
            <TableHead className="text-accent-foreground">Amount</TableHead>
            <TableHead className="text-right text-accent-foreground">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow
              key={index}
              className="border-b border-[#2D2B4D] last-of-type:border-none"
            >
              <TableCell className="font-medium ">
                <div className="inline-flex items-center gap-2">
                  <div className=" flex justify-center w-6 items-center">
                    <Image
                      alt="Brand Logo"
                      src={transaction.img}
                      className="w-full"
                    />
                  </div>
                  <span>{transaction.name}</span>
                </div>
              </TableCell>
              <TableCell>{transaction.Date}</TableCell>
              {showDescription && (
                <TableCell>{transaction.Description}</TableCell>
              )}
              <TableCell>{transaction.totalAmount}</TableCell>
              <TableCell className="text-right">
                <span className="bg-green-500/20 text-green-500 rounded-full px-2 py-1 ">
                  {transaction.paymentStatus}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
