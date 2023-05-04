// stringStore.js
import create from 'zustand';

const usePageStore = create((set) => ({
    page: 'noodle',
    changePage: (newPage) => set({ page: newPage }),
}));

export default usePageStore;
