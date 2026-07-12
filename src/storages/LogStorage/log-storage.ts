import { create, StoreApi } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import {formatDateToYYMMDDHHMM} from "@utils/formatDate";

enum TypeLog {
    "ERROR" =  "ERROR",
    "SUCCESS" = "SUCCESS",
    "WARN" = "WARN"
}

interface ILog {
    id:number;
    type:TypeLog;
    date:string;
    description:string;
}

interface LogStoreState{
    current:Array<ILog>;
    history:Array<ILog>;

}
interface LogStoreAction{
    add:(data:Omit<ILog,"id"|"date">)=>void;
    warn:(description:string)=>void;
    success:(description:string)=>void;
    error:(description:string)=>void;
    remove:(id:number)=>void;
    removeCurrent:(id:number)=>void;
    clearCurrent:()=>void;
    clear:()=>void;
}

type LogSetState = StoreApi<LogStore>["setState"];
interface LogStore extends LogStoreState, LogStoreAction{}

const {getId,isRemoveId} = (()=>{
    var maxId = 0;
    var flag = false;
    const countMax = (arr:Array<ILog>)=>{
        const arrId = arr.map(el=>el.id);
        maxId = (arrId.length > 0 ? Math.max(...arrId) : 0) + 1;
        flag = false;
        return maxId; 
    }
    return {
        getId:(arr:Array<ILog>)=>flag?countMax(arr):++maxId,
        isRemoveId:()=>{flag=true}
    }
})();
const MAX_LOG = 10;
const newLog = (set:LogSetState) => (type:TypeLog) => (description:string)=>{
    var addedLog:number;
    set(state=>{
        const newLog:ILog = {
                id: getId(state.history),
                date:formatDateToYYMMDDHHMM(Date.now()),
                description:description,
                type:type
            };
            addedLog = newLog.id;
            var history = [...state.history, newLog];
            if(MAX_LOG <= state.history.length){
                isRemoveId();
                var [,...history] = history;
            }
            return {
                current: [...state.current, newLog],
                history: history
        };
    });
    setTimeout(() => {
                set((state) => ({
                    current: state.current.filter((item) => item.id !== addedLog),
                    history: state.history,
                }));
    }, 5000);
};


const useLogStore = create<LogStore>()(
  persist(
    (set) => ({
        current:[],
        history:[],
        add:(data)=>newLog(set)(data.type)(data.description),
        warn:(description)=>newLog(set)(TypeLog.WARN)(description),
        error:(description)=>newLog(set)(TypeLog.ERROR)(description),
        success:(description)=>newLog(set)(TypeLog.SUCCESS)(description),
        remove: (id) => {
            isRemoveId();
            set((state) => ({
                current: state.current.filter(item => item.id !== id),
                history: state.history.filter(item => item.id !== id)
            }));
        },
        removeCurrent:(id:number)=>{
            set((state) => ({
                current: state.current.filter((item) => item.id !== id),
                history: state.history,
            }));
        },
        clearCurrent:()=>{
            set((state) => ({
                current: [],
                history: state.history,
            }));
        },
        clear: () => {
            isRemoveId();
            set({ current: [], history: [] });
        }
    }),
    {
      name: 'app-log-storage', 
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage:() => (state) => {
            state?.clearCurrent();
        }
    }
  )
);


export default useLogStore;