import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';


interface FontStoreState{
    currentSize:number
    min:number
    max:number
}
interface FontStoreAction{
   setSize: (size:number) => void;
}

interface FontStore extends FontStoreState, FontStoreAction{}

const MIN_SIZE = 0.8;
const MAX_SIZE = 1.5;
const applySize = ((min:number,max:number,root:Document) => (size:number) => {
    root.documentElement.style.setProperty("--font-size", String(Math.min(Math.max(size,min),max)));
})(MIN_SIZE,MAX_SIZE,document);


const useFontStore = create<FontStore>()(
  persist(
    (set) => ({
      currentSize: 1, 
      min:MIN_SIZE,
      max:MAX_SIZE,
      setSize: (size:number) => {
        applySize(size);
        set({ currentSize: size });
      },
    }),
    {
      name: 'app-font-storage', 
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          applySize(state.currentSize);
        }
      },
    }
  )
);


export default useFontStore;