import SortableTable from "../components/SortableTable";

function TablePage() {
const data = [
  {id: '1', name: 'Orange', color: 'bg-orange-500', score: 5},
  {id: '2', name: 'Apple', color: 'bg-red-500', score: 3},
  {id: '3', name: 'Banana', color: 'bg-yellow-500', score: 1},
  {id: '4', name: 'Lime', color: 'bg-green-500', score: 4},
];

const config = [
  {
    label: 'Fruit',
    render: (fruit) => fruit.name,
    sortValue: (fruit) => fruit.name,
  },
  {
    label: 'Color',
    render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
  },
  {
    label: 'Score',
    render: (fruit) => fruit.score,
    sortValue: (fruit) => fruit.score,
  },
];

  return (
    <div>
      <SortableTable data={data} config={config} />
    </div>
  );
}

export default TablePage;
