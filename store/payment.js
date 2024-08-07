import { defineStore } from "pinia";
import { useLoadingStore } from "@/store";
import axios from "axios";

export const usePaymentStore = defineStore("payment", () => {
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const isLoading = useLoadingStore();
  const router = useRouter();
  const store = reactive({
    getall: [],
  });

  function getAll() {
    axios
      .get(baseUrl + `payments/getAll`)
      .then((res) => {
        console.log(res);
        store.getall = res.data.data;
      })
      .catch((_) => {});
  }

  return {
    store,
    getAll,
  };
});
