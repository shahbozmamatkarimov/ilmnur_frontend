import { defineStore } from "pinia";
import { useLoadingStore } from "@/store";
import axios from "axios";

export const useReytingStore = defineStore("reyting", () => {
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const isLoading = useLoadingStore();
  const router = useRouter();

  const store = reactive({
    reyting: {
      teacher: [],
      student: [],
    },
    subject_id: 0,
    class_data: [],
    filter: {
      region: null,
      district: null,
      school_number: null,
    },
  });

  function geReyting() {
    isLoading.addLoading("getStudentReyting");
    isLoading.addLoading("getTeacherReyting")
    axios
      .post(baseUrl + `role/reyting/student`, {
        subject_id: store.subject_id,
        class: store.class_data,
        ...store.filter,
      })
      .then((res) => {
        console.log(res);
        store.reyting.student = res.data.data;
        isLoading.removeLoading("getStudentReyting");
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("getStudentReyting");
      });

    axios
      .post(baseUrl + `role/teacher_reyting/${store.subject_id}`, {
        subject_id: store.subject_id,
        class: store.class_data,
        ...store.filter,
      })
      .then((res) => {
        console.log(res);
        store.reyting.teacher = res.data.data;
        const user_id = router.currentRoute.value.query.id;
        document.getElementById(user_id)?.scrollIntoView();
        isLoading.removeLoading("getTeacherReyting");
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("getTeacherReyting");
      });
    // }
  }

  return { store, geReyting };
});
