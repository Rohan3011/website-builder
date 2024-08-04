import { create } from "zustand";

interface BuilderState {
  components: any[];
  addComponent: (component: any) => void;
}

const useBuilderStore = create<BuilderState>((set) => ({
  components: [],
  addComponent: (component) =>
    set((state) => ({ components: [...state.components, component] })),
}));

export default useBuilderStore;
