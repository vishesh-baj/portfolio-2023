import BasicButton from "./components/Button/BasicButton";
import FormComponent from "./components/Form/Form";
import BasicInput from "./components/Input/BasicInput";
import BasicSelect from "./components/Select/BasicSelect";
import BasicTable from "./components/Table/BasicTable";
import BasicDatePicker from "./components/DatePicker/DatePicker";
import Spinner from "./components/Spinner/Spinner";
import BasicProgress from "./components/Progress/BasicProgress";
import TableWithPaginationSortingFiltering from "./components/Table/TableWithPaginationSortingFiltering";

function App() {
  return (
    <>
      <BasicButton />
      <BasicInput />
      <BasicSelect />
      <BasicDatePicker />
      <FormComponent />
      <BasicTable />
      <Spinner />
      <BasicProgress />
      <TableWithPaginationSortingFiltering />
    </>
  );
}

export default App;
