import Table, { ICol } from "@/components/Table";

export default function Expenses() {
  const cols = [
    {
      header: "Date",
      accessor: "date",
    },
    {
      header: "Reason",
      accessor: "reason",
    },
    {
      header: "Description",
      accessor: "description",
    },
    {
      header: "Category",
      accessor: "category",
    },
    {
      header: "Amount",
      accessor: "amount",
    },
  ] satisfies ICol[];

  const rows = [] satisfies any[];

  return (
    <div className="expenses">
      <Table
        label="Expenses"
        buttonText="Add Expense"
        description="A list of all the expenses you have added to your account."
        cols={cols}
        rows={rows}
      />
    </div>
  );
}
