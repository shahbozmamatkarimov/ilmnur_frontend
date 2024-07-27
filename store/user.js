import { defineStore } from "pinia";
import { useLoadingStore, useAuthStore } from "@/store";
import axios from "axios";
import { useNotification } from "@/composables";
import { roles } from "@/constants";
export const useUserStore = defineStore("User", () => {
  const { showMessage } = useNotification();
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const useAuth = useAuthStore();
  const isLoading = useLoadingStore();
  const router = useRouter();

  const store = reactive({
    getall: "",
    progress: 0,
    createModal: false,
    activeKey: 1,
    password: "",
    is_update: false,
    user_id: "",
    subject_step: 1,
    is_send: false,
    is_end_time: false,
    addchildmodal: false,
    deleteModal: false,
    children: [],
    otp: "",
    total_count: {},
    search_input: "",
    search_users: [],
  });

  const create = reactive({
    name: "",
    surname: "",
    region: null,
    district: null,
    school_number: null,
    subjects: [],
    class: [[1, "A"]],
    role: "",
    secret_key: "",
    file: "",
    code: [],
    deadline: new Date(),
    phone: "",
  });

  function sendOtp() {
    isLoading.addLoading("sendOtp");
    const phone = "+998" + create.phone.replace(/\D/g, "");
    axios
      .post(baseUrl + "otp/sendOtp", {
        phone,
      })
      .then((res) => {
        console.log(res);
        store.is_send = true;
        store.otp = res.data.data.code;
        store.deadline = Date.now() + 120000;
        isLoading.removeLoading("sendOtp");
      })
      .catch((err) => {
        console.log(err);
        showMessage("Xato", err?.response?.data?.message);
        isLoading.removeLoading("sendOtp");
      });
  }

  function register() {
    const code = create.code.join("");
    const phone = "+998" + create.phone.replace(/\D/g, "");
    if (create.role == "admin") {
      create.district = "null";
      create.region = "null";
    }
    axios
      .post(baseUrl + "user/register", {
        ...create,
        full_name: create.name + " " + create.surname,
        code,
        phone,
      })
      .then((res) => {
        console.log(res);
        if (res.data.statusCode == 200) {
          // showMessage("xato", "Telefon yoki parol xato");
          store.activeKey += 1;
          localStorage.setItem("token", res.data.token);
          create.name = null;
          create.surname = null;
          create.phone = null;
          create.school_number = null;
          create.class = [[1, "A"]];
          create.subjects = [];
          create.role = "";
          create.region = null;
          create.district = null;
          create.secret_key = null;
          create.file = "";
          create.code = [];
          create.deadline = new Date();
          store.is_send = false;
          isLoading.user.data.id = res.data.data.user.id;
          useAuth.getUserFullInfo();
        } else {
          if (res.data.message == "Already registered") {
            showMessage("Xato", "Telefon raqam allaqachon ro'yhatga olingan");
            store.activeKey = 1;
            navigateTo("/login");
            store.is_send = false;
          } else {
            showMessage("Xato", "Telefon yoki parol xato");
          }
        }
        getAll();
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.message == "Class") {
          showMessage("Xato", "Bu sinfga rahbar allaqachon ro'yhatga olingan");
          return;
        }
        showMessage("Xato", "Telefon yoki parol xato");
      });
  }

  function update(data) {
    console.log(create);
    axios
      .put(baseUrl + `role/update/${isLoading.user.data.id}`, data)
      .then((res) => {
        console.log(res);
        if (res.data.statusCode == 200) {
          // openNotification(res.data.message);
          store.activeKey += 1;
        } else {
          showMessage("Xato", "Telefon yoki parol xato");
        }
        getAll();
      })
      .catch((err) => {
        console.log(err);
        // openNotification(err?.response?.data?.message);
        showMessage("Roleni o'zgartirish", "Muvaffaqiyatli o'zgartirildi");
      });
  }

  function check() {
    console.log(store.password);
    axios
      .post(baseUrl + "user/check_password", {
        user_id: isLoading.user.current_role_data.user_id,
        role: isLoading.user.current_role_data.role,
        password: String(store.password),
      })
      .then((res) => {
        console.log(res);
        if (res.data.statusCode == 200) {
          // isLoading.middleware.passwordChecking = true;
          isLoading.user.current_role_data =
            isLoading.user.data.role[isLoading.user.current_role_step - 1];
          store.password = "";
          // showMessage("Roleni o'zgartirish", "Muvaffaqiyatli o'zgartirildi");
          store.activeKey += 1;
        } else {
          showMessage("Xato", "Nimadir xato ketdi");
        }
      })
      .catch((err) => {
        console.log(err);
        showMessage("Xato", "Iltimos, ma'lumotlarni to'g'ri kiriting!");
      });
  }

  function getAll() {
    isLoading.addLoading("getAllUsers");
    const token = localStorage.getItem("token");
    axios
      .get(
        baseUrl +
          `role/getByRole/${create.role}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
          onDownloadProgress: (progressEvent) => {
            store.progress = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            console.log(store.progress);
            // setUploadPercentage(progress);
          },
        }
      )
      .then((res) => {
        console.log(res);
        store.getall = res.data.data;
        isLoading.removeLoading("getAllUsers");
      })
      .catch((err) => {
        console.log(err);
        // showMessage("Xato", "Nimadir xato ketdi");
        isLoading.removeLoading("getAllUsers");
      });
  }

  function searchUsers() {
    isLoading.addLoading("getAllUsers");
    const token = localStorage.getItem("token");
    axios
      .get(
        baseUrl +
          `user/searchusers/${store.search_input}/1`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
          onDownloadProgress: (progressEvent) => {
            store.progress = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            console.log(store.progress);
            // setUploadPercentage(progress);
          },
        }
      )
      .then((res) => {
        console.log(res);
        store.search_users = res.data.data.records;
        isLoading.removeLoading("getAllUsers");
      })
      .catch((err) => {
        console.log(err);
        // showMessage("Xato", "Nimadir xato ketdi");
        isLoading.removeLoading("getAllUsers");
      });
  }

  function getAllStudent() {
    isLoading.addLoading("getAllUsers");
    const class_id = router.currentRoute.value.params.class;
    const token = localStorage.getItem("token");
    axios
      .get(baseUrl + `role/getallstudent/${class_id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        store.getall = res.data.data;
        isLoading.removeLoading("getAllUsers");
      })
      .catch((_) => {
        showMessage("Xato", "Nimadir xato ketdi");
        isLoading.removeLoading("getAllUsers");
      });
  }

  function countUsers() {
    isLoading.addLoading("countUsers");
    let users = [];
    for (let i of roles) {
      console.log(i);
      users.push(i.role);
    }
    axios
      .post(baseUrl + `role/count_users`, users)
      .then((res) => {
        console.log(res, '--------------------------------')
        store.total_count = res.data.data;
        isLoading.removeLoading("countUsers");
      })
      .catch((_) => {
        showMessage("Xato", "Nimadir xato ketdi");
        isLoading.removeLoading("countUsers");
      });
  }

  function updateStatus(id, index) {
    axios
      .put(baseUrl + `role/status/${id}/${create.role}`)
      .then((res) => {
        console.log(res);
        if (res.data.statusCode == 200) {
          store.getall[index].user_status = "solved";
          showMessage("Status", "Muvaffaqiyatli o'zgartirildi");
        } else {
          showMessage("Xato", "Nimadir xato ketdi");
        }
      })
      .catch((err) => {
        console.log(err);
        showMessage("Xato", "Nimadir xato ketdi");
      });
  }

  function addChild() {
    isLoading.addLoading("addChild");
    const phone = "+998" + create.phone.replace(/\D/g, "");

    axios
      .post(baseUrl + `user/addchild`, {
        ...create,
        phone,
        parent_id: isLoading.user.current_role_data.id,
        user_id: 0,
      })
      .then((res) => {
        console.log(res);
        if (res.data.statusCode == 200) {
          showMessage("Farzand qo'shish", "Farzandingiz qo'shildi!");
          store.addchildmodal = false;
          getChildren();
        } else {
          showMessage("Xato", "Nimadir xato ketdi");
        }
        isLoading.removeLoading("addChild");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        if (err.response.data.message == "Already exists") {
          showMessage(
            "Farzand qo'shish",
            "Foydalanuvchi allaqachon qo'shilgan!"
          );
        } else {
          showMessage("Farzand qo'shish", "Farzandingiz topilmadi!");
        }
        isLoading.removeLoading("addChild");
      });
  }

  function getChildren() {
    isLoading.addLoading("getChildren");
    axios
      .get(baseUrl + `role/getChildren/${isLoading.user.current_role_data.id}`)
      .then((res) => {
        console.log(res, "children");
        store.children = res.data.data;
        isLoading.removeLoading("getChildren");
      })
      .catch((err) => {
        showMessage("Xato", "Nimadir xato ketdi");
        isLoading.removeLoading("getChildren");
      });
  }

  function deleteUser(id, index) {
    isLoading.addLoading("deleteUser");
    axios
      .delete(baseUrl + `role/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.statusCode == 200) {
          showMessage("Rad etish", "Foydalanuvchi o'chirildi");
          store.getall.splice(index, 1);
        } else {
          showMessage("Xato", "Nimadir xato ketdi");
        }
        isLoading.removeLoading("deleteUser");
      })
      .catch((err) => {
        console.log(err);
        showMessage("Xato", "Nimadir xato ketdi");
        isLoading.removeLoading("deleteUser");
      });
  }

  return {
    store,
    create,
    register,
    getAll,
    check,
    update,
    getAllStudent,
    updateStatus,
    sendOtp,
    addChild,
    getChildren,
    deleteUser,
    countUsers,
    searchUsers,
  };
});
