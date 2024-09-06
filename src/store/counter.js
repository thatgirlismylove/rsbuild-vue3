export const useCounterStore = defineStore('counter', () => {
	const count = ref(0);

	const add = () => {
		count.value++;
	};

	return {
		count,
		add,
	};
});
