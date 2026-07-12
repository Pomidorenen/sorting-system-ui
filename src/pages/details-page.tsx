import { useState } from "react";
import TemplatePage from "./template-page";
import { Select } from "@components/Select";
import { Button } from "@components/Button";
import { IconScan, IconSearch, IconX } from "@tabler/icons-react";
import { TableDetails } from "@/components/Table";
import { InputDate } from "@components/Input";
import { useEffect, useReducer } from "react";
import { LogScanApi, PartsApi } from "@/http";
import { useLogStore } from "@storages/LogStorage";
import scanApi from "@/http/scan-api";
import { getBlackImageFile } from "@/utils/fileHelper";

const allOption = { name: "Все", value: "all" };

const statusOptions: Select.IOption[] = [
  allOption,
  { name: "100", value: "100" },
];

const recoveryOptions: Select.IOption[] = [
  allOption,
  { name: "Востановлен", value: "Востановлен" },
  { name: "Примерно", value: "Примерно" },
];

type Action =
  | { type: "SET_INITIAL_DATA"; payload: { list: Table.ITableDetailItem[]; optionsCamera: Select.IOption[]; optionsTypeDetail: Select.IOption[]; optionsDetail: Select.IOption[] } }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_STATUS"; payload: string }
  | { type: "SET_DATE"; payload: string }
  | { type: "SET_OBJECT"; payload: string }
  | { type: "SET_TYPE_DETAIL"; payload: string }
  | { type: "SET_RECOVERY"; payload: string }
  | { type: "SET_CAMERA"; payload: string }
  | { type: "RESET_FILTERS" }
  | { type: "APPLY_SORT"; payload: Table.ITableDetailItem[] };

interface State {
  data: Table.ITableDetailItem[];
  sortData: Table.ITableDetailItem[];
  loading: boolean;
  optionsCamera: Select.IOption[];
  optionsTypeDetail: Select.IOption[];
  optionsDetail: Select.IOption[];
  status: string;
  date: string;
  object: string;      
  typeDetail: string;  
  recovery: string;
  camera: string;
}

const initialState: State = {
  data: [],
  sortData: [],
  loading: true,
  optionsCamera: [allOption],
  optionsTypeDetail: [allOption],
  optionsDetail: [allOption],
  status: "all",
  date: "",
  object: "all",
  typeDetail: "all",
  recovery: "all",
  camera: "all",
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_INITIAL_DATA":
      return {
        ...state,
        data: action.payload.list,
        sortData: action.payload.list,
        loading: false,
        optionsCamera: action.payload.optionsCamera,
        optionsTypeDetail: action.payload.optionsTypeDetail,
        optionsDetail: action.payload.optionsDetail,
      };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_STATUS":
      return { ...state, status: action.payload };
    case "SET_DATE":
      return { ...state, date: action.payload };
    case "SET_OBJECT":
      return { ...state, object: action.payload };
    case "SET_TYPE_DETAIL":
      return { ...state, typeDetail: action.payload };
    case "SET_RECOVERY":
      return { ...state, recovery: action.payload };
    case "SET_CAMERA":
      return { ...state, camera: action.payload };
    case "RESET_FILTERS":
      return {
        ...state,
        status: "all",
        date: "",
        object: "all",
        typeDetail: "all",
        recovery: "all",
        camera: "all",
        sortData: state.data,
      };
    case "APPLY_SORT":
      return { ...state, sortData: action.payload };
    default:
      return state;
  }
};

function DetailPage() {
  const { error } = useLogStore();
  const [state, dispatch] = useReducer(reducer, initialState);

  const [scanWhat, setScanWhat] = useState({ batch_number: "", serial_number: "" });
  const [isScan, setIsScan] = useState(false);

  const scanCodeHandler = () => {
    getBlackImageFile().then((data) => {
      scanApi.scan({ ...scanWhat, camera_id: (Math.random() * 100 & 1) + 1, image: data as File })
        .then(() => setIsScan(true))
        .catch((e) => error("Fail scan" + e));
    });
  };

  useEffect(() => {
    LogScanApi.getAll({ limit: 1000, offset: 0 })
      .then(({ rows }) => {
        const list: Table.ITableDetailItem[] = new Array(rows.length);
        const setsCameraOptions = new Set<string>();
        const setsTypeDetailOptions = new Set<string>();
        const setsDetailOptions = new Set<string>();

        for (let i = 0; i < rows.length; i++) {
          const element = rows[i];
          list[i] = {
            camera: element.camera.name,
            date: element.created_at,
            partia: element.part.manufacture_date,
            serialNumber: element.part.serial_number,
            recovery: element.is_recovery ? "Востановлен" : "Примерно",
            status: 100,
            typeDetail: element.part.batch_number,
          };
          setsCameraOptions.add(element.camera.name);
          setsTypeDetailOptions.add(element.part.batch_number);
          setsDetailOptions.add(element.part.serial_number);
        }

        const optionsCamera = [allOption, ...Array.from(setsCameraOptions).map(el => ({ name: String(el), value: String(el) }))];
        const optionsTypeDetail = [allOption, ...Array.from(setsTypeDetailOptions).map(el => ({ name: String(el), value: String(el) }))];
        const optionsDetail = [allOption, ...Array.from(setsDetailOptions).map(el => ({ name: String(el), value: String(el) }))];

        dispatch({
          type: "SET_INITIAL_DATA",
          payload: { list, optionsCamera, optionsTypeDetail, optionsDetail },
        });
        setIsScan(false);
      })
      .catch(() => error("Not connection 'detail table'"));
  }, [isScan]);

  useEffect(() => {
    PartsApi.getAll({ limit: 1000, offset: 0 })
      .then(({ rows }) => {
        const element = rows[rows.length - 1];
        setScanWhat({ batch_number: element.batch_number, serial_number: element.serial_number });
      })
      .catch(() => error("Part not found"));
  }, []);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "SET_STATUS", payload: e.target.value });
  };
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_DATE", payload: e.target.value });
  };
  const handleObjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "SET_OBJECT", payload: e.target.value });
  };
  const handleTypeDetailChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "SET_TYPE_DETAIL", payload: e.target.value });
  };
  const handleRecoveryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "SET_RECOVERY", payload: e.target.value });
  };
  const handleCameraChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "SET_CAMERA", payload: e.target.value });
  };

  const sortHandler = () => {
    const filtered = state.data.filter(item => {
      const statusMatch = state.status === "all" || String(item.status) === state.status;
      const dateMatch = state.date === "" || item.date.includes(state.date); // или точное сравнение, но оставим includes для гибкости
      const objectMatch = state.object === "all" || item.serialNumber === state.object;
      const typeDetailMatch = state.typeDetail === "all" || item.typeDetail === state.typeDetail;
      const recoveryMatch = state.recovery === "all" || item.recovery === state.recovery;
      const cameraMatch = state.camera === "all" || item.camera === state.camera;
      return statusMatch && dateMatch && objectMatch && typeDetailMatch && recoveryMatch && cameraMatch;
    });
    dispatch({ type: "APPLY_SORT", payload: filtered });
  };

  const resetHandler = () => {
    dispatch({ type: "RESET_FILTERS" });
  };

  return (
    <TemplatePage>
      <section className="sort-container">
        <Select
          title="Статус"
          value={state.status}
          onChange={handleStatusChange}
          options={statusOptions}
        />
        <InputDate
          title="Дата сканирования"
          value={state.date}
          onChange={handleDateChange}
        />
        <Select
          title="Объект"
          value={state.object}
          onChange={handleObjectChange}
          options={state.optionsDetail}
        />
        <Select
          title="Тип детали"
          value={state.typeDetail}
          onChange={handleTypeDetailChange}
          options={state.optionsTypeDetail}
        />
        <Select
          title="Восстановление"
          value={state.recovery}
          onChange={handleRecoveryChange}
          options={recoveryOptions}
        />
        <Select
          title="Камера"
          value={state.camera}
          onChange={handleCameraChange}
          options={state.optionsCamera}
        />
        <Button onClick={sortHandler}>
          <IconSearch />
        </Button>
        <Button onClick={resetHandler}>
          <IconX />
        </Button>
        <Button onClick={scanCodeHandler}>
          <IconScan />
        </Button>
      </section>
      {!state.loading && state.sortData.length > 0 && (
        <TableDetails items={state.sortData} />
      )}
    </TemplatePage>
  );
}

export default DetailPage;