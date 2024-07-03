import { defineStore } from "pinia";
import { ApiRequest } from "~/helpers";
import { useLoadingStore, useContentStore } from "@/store";
import axios from "axios";

export const useCourseStore = defineStore("course", () => {
  const apiRequest = new ApiRequest();
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const isLoading = useLoadingStore();
  const useContent = useContentStore();
  const router = useRouter();
  const { start, finish } = useLoadingIndicator();
  console.log(start);

  const store = reactive({
    subjects: [],
    courses: [],
    course_id: "",
    user_step: {},
    courseById: [],
    class: 1,
    createModal: false,
  });

  const create = reactive({
    name: "",
    description: "",
    price: "",
    discount: "",
    subject_id: "",
  });

  const modal = reactive({
    create: false,
    edit: false,
    delete: false,
  });

  function clearData() {
    for (let i in create) {
      create[i] = "";
    }
  }

  function getSubjects() {
    // start();
    console.log("Hiiiiiiiiii456");
    isLoading.addLoading("get");
    apiRequest
      .get(`subject/${store.class}`)
      .then((res) => {
        isLoading.removeLoading("get");
        console.log(res);
        if (res.data.statusCode == 200) {
          store.subjects = res.data.data;
        } else {
          // openNotification(res.data.message);
        }
        // finish();
      })
      .catch((err) => {
        isLoading.removeLoading("get");
        console.log(err);
        // openNotification(err?.response?.data?.message);
        // finish();
      });
  }

  async function getCourses() {
    let obj = {
      timeoutId: setTimeout(() => {
        console.log("Hey");
      }, 3100),
    };
    delete obj.timeoutId;
    obj = null;

    start();
    store.courses = [];
    let subject = router.currentRoute.value.params.subject_id;
    const token = localStorage.getItem("token");
    axios
      .get(baseUrl + `course/getAll/${subject}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.statusCode == 200) {
          console.log(res, "==d=skdls");
          store.courses = res.data.data;
          store.user_step = res.data.step?.data.pop();
        } else {
          store.courses = [];
          // openNotification(res.data.message);
        }
        finish();
      })
      .catch((err) => {
        console.log(err);
        finish();
        store.courses = [];
        // openNotification(err?.response?.data?.message);
      });
  }

  function getCourseById() {
    isLoading.addLoading("getCourseById");
    let class_name = router.currentRoute.value.query.class;
    let id = router.currentRoute.value.params.id;
    axios
      .get(baseUrl + `course/getById/${id}/${class_name}`)
      .then((res) => {
        console.log(res);
        store.courseById = res.data.data;
        useContent.store.video_id =
          store.courseById.video_course[0]?.video?.public_id;
        useContent.create.video_id =
          store.courseById.video_course[0]?.video?.id;
        useContent.create.content = store.courseById.video_course[0]?.content;
        isLoading.removeLoading("getCourseById");
      })
      .catch((err) => {
        console.log(err);
        store.courses = [];
        // openNotification(err?.response?.data?.message);
        isLoading.removeLoading("getCourseById");
      });
  }

  function createCourse() {
    create.subject_id = router.currentRoute.value.params.subject_id;
    if (modal.edit) {
      return updateCourse();
    }
    const token = localStorage.getItem("token");
    isLoading.addLoading("uploading");
    axios
      .post(baseUrl + `course/create`, create, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);
        modal.create = false;
        getCourses();
        isLoading.removeLoading("uploading");
      })
      .catch((err) => {
        console.log(err);
        // openNotification(err?.response?.data?.message);
        isLoading.removeLoading("uploading");
      });
  }

  function updateCourse() {
    const token = localStorage.getItem("token");
    isLoading.addLoading("uploading");
    axios
      .put(baseUrl + `course/${store.course_id}`, create, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);
        modal.create = false;
        getCourses();
        isLoading.removeLoading("uploading");
      })
      .catch((err) => {
        console.log(err);
        // openNotification(err?.response?.data?.message);
        isLoading.removeLoading("uploading");
      });
  }

  function deleteCourse() {
    const token = localStorage.getItem("token");
    isLoading.addLoading("uploading");
    axios
      .delete(baseUrl + `course/${store.course_id}`, create, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);
        modal.delete = false;
        getCourses();
        isLoading.removeLoading("uploading");
      })
      .catch((err) => {
        console.log(err);
        // openNotification(err?.response?.data?.message);
        isLoading.removeLoading("uploading");
      });
  }

  return {
    store,
    create,
    modal,
    getSubjects,
    getCourses,
    getCourseById,
    createCourse,
    clearData,
    deleteCourse,
  };
});