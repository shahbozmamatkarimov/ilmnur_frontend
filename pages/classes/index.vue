<template>
  <main
    class="lessons_view bg-white p-5 rounded-[6px] overflow-hidden overflow-y-auto max-h-[calc(100vh_-_160px)]"
  >
    <section>
      <div
        class="flex items-center justify-between pb-6 border_cedbottom -mx-5 px-5"
      >
        <h1>Sinflar</h1>
        <UiButton
          v-if="
            (useClass.store.getall?.length == 0 &&
              isLoading.user.data.current_role == 'leader_teacher') ||
            isLoading.user.data.current_role == 'director'
          "
          @click="store.create = true"
          class="bg_orange font-semibold white !px-6"
          >Qo‘shish</UiButton
        >
      </div>
      <!-- <div
        v-if="isLoading.user.data.current_role == 'director'"
        class="border_cedbottom -mx-5 px-5 mb-[10px]"
      >
        <a-tabs v-model:activeKey="useClass.store.class">
          <a-tab-pane
            v-for="(i, index) in classes"
            class="tab1"
            :key="index + 1"
            :tab="i.label"
          ></a-tab-pane>
        </a-tabs>
      </div> -->
    </section>
    <section>
      <swiper
        @mousewheel="mouseSlider"
        @slider-move="changeSlide"
        :watchSlidesProgress="true"
        :slidesPerView="1"
        :spaceBetween="30"
        :pagination="{ clickable: true }"
        class="mySwiper"
        :modules="modules"
      >
        <swiper-slide
          :id="i"
          v-for="(i, index) in isLoading.user.data.current_role ==
          'leader_teacher'
            ? 1
            : 11"
        >
          <section class="grid lg:grid-cols-2 gap-5 mt-3">
            <div
              @click="(e) => getStudentRoute(e, i.id)"
              v-for="(i, l) in useClass.store.getall"
              :class="i.status ? 'bg-white' : 'bg-[#F6F6F6]'"
              class="flex items-start justify-between class_shadow p-6 r_10 h-[230px] relative cursor-pointer"
            >
              <div class="space-y-6">
                <h1 class="font-bold text-2xl">
                  {{ i.class_number }}-{{ i.name }} sinf
                </h1>
                <div>
                  <ul class="space-y-1">
                    <li class="text-sm _c55 font-medium">Sinf rahbari:</li>
                    <li class="font-semibold truncate">
                      {{ i.teacher?.full_name }}
                    </li>
                  </ul>
                </div>
                <!-- {{ i.creator_id }} -->
                <div>
                  <ul v-if="i.status" class="space-y-1">
                    <li class="text-sm _c55 font-medium">O‘quvchilar soni:</li>
                    <li class="font-semibold">0 ta</li>
                  </ul>
                  <div v-else>
                    <div v-if="isLoading.user.data.current_role == 'director'">
                      <ui-button
                        id="accept_user"
                        class="!h-[44px] orange border border-[#FF852E] !px-4"
                        @click="useClass.updateStatus(i.id)"
                      >
                        <span class="lg:block hidden">Qabul qilish</span>
                        <img
                          class="lg:hidden block h-5 w-5"
                          src="@/assets/svg/icon/accept.svg"
                          alt=""
                        />
                      </ui-button>
                      <ui-button id="reject_user" class="!h-[44px] _c24 !px-4"
                        ><span class="lg:block hidden">Rad etish</span>
                        <img
                          class="lg:hidden block h-5 w-5"
                          src="@/assets/svg/icon/refuse.svg"
                          alt=""
                      /></ui-button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  v-if="i.teacher?.image"
                  class="h-20 w-20 r_8 object-cover"
                  :src="i.teacher?.image"
                  alt=""
                />
                <ui-avatar-empty v-else class="h-20 w-20 r_8 object-cover" />
              </div>
              <p
                v-if="!i.status"
                class="b_cf23 w-[10px] h-[10px] absolute top-3 left-3 rounded-full"
              ></p>
            </div>
          </section>
        </swiper-slide>
      </swiper>
    </section>

    <!-- create -->
    <a-modal class="max-w-[440px]" v-model:open="store.create" centered>
      <div class="flex justify-between items-center w-full">
        <h1 class="font-semibold text-2xl">Sinf qo‘shish</h1>
      </div>
      <form
        class="space-y-5 _c45 mt-[30px]"
        @submit.prevent="useClass.createData"
      >
        <div class="space-y-2">
          <label class="block _c43" for="class_number">Sinf turi</label>
          <a-select
            id="class_number"
            v-model:value="useClass.create.class_number"
            class="w-full sr_12"
            :options="sinf.map((pro) => ({ value: pro }))"
            required
          >
            <template #suffixIcon>
              <p class="h-4 w-[1px]"></p>
              <img src="@/assets/svg/icon/select_arrow6c.svg" alt="" />
            </template>
          </a-select>
        </div>
        <div class="space-y-2">
          <label class="block _c43" for="class_name">Sinf nomi</label>
          <a-select
            id="class_name"
            v-model:value="useClass.create.name"
            class="w-full sr_12"
            :options="sinf_type.map((pro) => ({ value: pro }))"
            required
          >
            <template #suffixIcon>
              <img src="@/assets/svg/icon/select_arrow6c.svg" alt="" />
            </template>
          </a-select>
        </div>
        <div class="space-y-2">
          <label class="block _c43" for="class_name"
            >Sinf rahbari tanlash</label
          >
          <a-select
            id="class_name"
            v-model:value="useClass.create.teacher_id"
            class="w-full sr_12"
            show-search
            :options="
              useUser.store.getall.map((pro) => ({
                value: pro.id,
                label: pro.full_name,
              }))
            "
            :filter-option="filterOption"
            required
          >
            <template #suffixIcon>
              <img src="@/assets/svg/icon/select_arrow6c.svg" alt="" />
            </template>
          </a-select>
        </div>
        <UiButton
          @click="store.create = false"
          type="submit"
          class="!h-12 w-full bg_orange !mt-[54px] font-semibold white"
        >
          Yaratish
          <Loading />
        </UiButton>
      </form>
    </a-modal>
  </main>
</template>

<script setup>
definePageMeta({
  layout: "search",
});
import {
  useUserStore,
  useClassStore,
  useLoadingStore,
  useChatStore,
} from "@/store";
import { useFormatter } from "@/composables";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const modules = [Pagination];

const useClass = useClassStore();
const useUser = useUserStore();
const isLoading = useLoadingStore();
const useChat = useChatStore();
const provinceData = ["Matematika", "Biologiya", "Kimyo"];
const sinf = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const sinf_type = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
const classes = ref([
  { value: 1, label: "1-sinf" },
  { value: 2, label: "2-sinf" },
  { value: 3, label: "3-sinf" },
  { value: 4, label: "4-sinf" },
  { value: 5, label: "5-sinf" },
  { value: 6, label: "6-sinf" },
  { value: 7, label: "7-sinf" },
  { value: 8, label: "8-sinf" },
  { value: 9, label: "9-sinf" },
  { value: 10, label: "10-sinf" },
  { value: 11, label: "11-sinf" },
]);

useClass.create.subject = ref(provinceData[0]);
useClass.create.role = "leader_teacher";
useUser.create.role = "leader_teacher";
useClass.create.type = "leader_teacher";
useUser.store.getall = [];
const router = useRouter();

if (isLoading.user.data.current_role == "leader_teacher") {
  classes.value = [{ value: 1, label: "1-sinf" }];
  useClass.getLeaderTeacherClass();
} else {
  useClass.getAll();
}

const store = reactive({
  mouse_wheel: 0,
  create: false,
});

if (isNaN(router.currentRoute.value.query.class)) {
  useClass.store.class = 1;
  router.push(`/classes?class=1`);
} else {
  useClass.store.class = +router.currentRoute.value.query.class;
}

const filterOption = (input, option) => {
  try {
    console.log(option);
    return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  } catch (error) {}
};

function changeSlide() {
  setTimeout(() => {
    useClass.store.class = +document.querySelector(".swiper-slide-visible")?.id;
  }, 200);
}

function mouseSlider(e) {
  // e.preventDefault(); // Prevent default scroll behavior
  // Determine scroll direction
  if (e.deltaX > 0) {
    store.mouse_wheel += 1;
    if (store.mouse_wheel % 10 == 0) {
      useClass.store.class += 1;
      store.mouse_wheel = 0;
    }
    console.log("Scrolling to the right");
  } else if (e.deltaX < 0) {
    store.mouse_wheel += 1;
    if (store.mouse_wheel % 10 == 0) {
      useClass.store.class -= 1;
      store.mouse_wheel = 0;
    }
    console.log("Scrolling to the left");
  }
}

function getStudentRoute(e, id) {
  if (e.target.id == "reject_user" || e.target.id == "accept_user") {
    return;
  }
  router.push(`/classes/${id}`);
}

onBeforeMount(() => {
  useUser.getAll();
});
</script>

<style lang="scss"></style>
