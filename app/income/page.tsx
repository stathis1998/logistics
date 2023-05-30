import Table, { ICol } from "@/components/Table";

export default function Income() {
  const cols = [
    {
      header: "Date",
      accessor: "date",
    },
    {
      header: "Name",
      accessor: "name",
    },
    {
      header: "Amount",
      accessor: "amount",
    },
    {
      header: "Shop",
      accessor: "shop",
    },
  ] satisfies ICol[];

  const rows = [] satisfies any[];

  return (
    <div className="income">
      <Table
        label="Income"
        buttonText="Add Income"
        description="A list of all the income you have added to your account."
        cols={cols}
        rows={rows}
      />
    </div>
  );
}
