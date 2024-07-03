import { defineStore } from "pinia";
import { useLoadingStore, useContentStore } from "@/store";
import { useNotification } from "@/composables";
import axios from "axios";

export const useTestStore = defineStore("test", () => {
  const { showMessage } = useNotification();
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const isLoading = useLoadingStore();
  const useContent = useContentStore();
  const router = useRouter();

  const store = reactive({
    tests: [],
    check_result: [],
    slideStepId: "",
    testResModal: false,
    testResBall: [],
    maxTests: 16,
    questions_count: 10,
    slideStep: 0,
    isTestEnd: false,
  });

  const test = reactive({});

  function addTestData() {
    for (let i = 1; i <= store.maxTests; i++) {
      console.log(i);
      test[i] = {
        type: "variant",
        question: [],
        variant: {},
      };
    }
    console.log(test);
  }
  addTestData();

  function getTests() {
    let class_name;
    let subject;
    class_name = router.currentRoute.value.query.class;
    const test_id = router.currentRoute.value.params.test_id;
    axios
      .get(baseUrl + `tests/${test_id}`)
      .then((res) => {
        console.log(res);
        if (res.data.statusCode == 200) {
          store.tests = res.data.data;
        } else {
          store.tests = [];
          // openNotification(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        store.tests = [];
        // openNotification(err?.response?.data?.message);
      });
  }

  function nextLesson() {
    const params = router.currentRoute.value.params;
    const query = router.currentRoute.value.query;
    axios
      .get(baseUrl + `lesson/next_lesson/${params.id}/${params.subject}`)
      .then((res) => {
        console.log(res);
        const data = res.data.data;
        navigateTo(
          `/lessons/${params.subject}/${data.id}?class=${query.class}`
        );
      })
      .catch((err) => {
        console.log(err);
        navigateTo(
          `/lessons/${params.subject}/${params.id}?class=${query.class}`
        );
      });
  }

  function checkAnswers(true_asnwers) {
    isLoading.addLoading("checkAnswers");
    const lesson_id = +router.currentRoute.value.params.id;
    axios
      .post(
        baseUrl + `tests/check_answers/` + isLoading.user.current_role_data.id,
        { answers: true_asnwers, lesson_id }
      )
      .then((res) => {
        // store.testResModal = true;
        store.isTestEnd = true;
        store.slideStep = store.tests?.length;
        store.check_result = res?.data?.data?.results;
        store.testResBall = res?.data?.data?.ball;
        console.log(res);
        if (res.data?.data?.message == "Already added!") {
          showMessage("Reyting", "Sizning natijangiz allaqachon qo'shilgan");
        }
        isLoading.removeLoading("checkAnswers");
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("checkAnswers");
        // openNotification(err?.response?.data?.message);
      });
  }

  async function createTest() {
    console.log(test);
    isLoading.addLoading("createTest");
    const lesson_id = +router.currentRoute.value.query.lesson_id;
    let url = "/lessons/Matematika/" + lesson_id + "/test";
    for (let i = 1; i <= store.questions_count; i++) {
      try {
        const tempElement = document.createElement("div");
        tempElement.innerHTML = test[i].question[0];
        const imgElement = tempElement.querySelector("img")?.src;
        if (imgElement) {
          const base64Data = imgElement.split(";base64,").pop();
          const arrayBuffer = Uint8Array.from(atob(base64Data), (c) =>
            c.charCodeAt(0)
          ).buffer;
          const file = new File([arrayBuffer], "file.png", {
            type: "image/png",
          });

          const src = await useContent.create_url(file);
          tempElement.querySelector("img").src = src.url;
          test[i].question[0] = `${tempElement.innerHTML}`;
        }
        for (let variant in test[i].variant) {
          const tempElement = document.createElement("div");
          tempElement.innerHTML = test[i].variant[variant];
          const imgElement = tempElement.querySelector("img")?.src;
          if (imgElement) {
            const base64Data = imgElement.split(";base64,").pop();
            const arrayBuffer = Uint8Array.from(atob(base64Data), (c) =>
              c.charCodeAt(0)
            ).buffer;
            const file = new File([arrayBuffer], "file.png", {
              type: "image/png",
            });

            const src = await useContent.create_url(file);
            tempElement.querySelector("img").src = src.url;
            test[i].variant[variant] = `${tempElement.innerHTML}`;
          }
        }
      } catch (err) {
        console.log(err);
      }
      await axios
        .post(baseUrl + `tests/create`, {
          lesson_id,
          variants: Object.values(test[i].variant),
          question: test[i].question[0],
        })
        .then((res) => {
          console.log(res);
          showMessage("Uploaded successfully " + i);
          isLoading.removeLoading("createTest");
        })
        .catch((err) => {
          console.log(err);
          showMessage(err?.response?.data?.message + " " + i);
          isLoading.removeLoading("createTest");
        });
    }
    router.push(url);
  }

  return { store, test, getTests, checkAnswers, createTest, nextLesson };
});
