<template>
  <main
    class="sidebar courses_view bg-white md:p-8 p-4 pt-6 sm:rounded-[6px] overflow-hidden overflow-y-auto md:max-h-[calc(100vh_-_160px)] md:min-h-[calc(100vh_-_160px)] max-h-[calc(100vh_-_135px)] min-h-[calc(100vh_-_135px)]"
  >
    <nav class="flex justify-between jusfiy-between mb-4">
      <ul class="flex -space-x-1 my-2 overflow-hidden overflow-x-auto">
        <li v-for="user in 10">
          <img
            v-if="true"
            class="h-7 w-7 rounded-full object-cover"
            src="@/assets/image/course.png"
            alt=""
          />
          <UiAvatarEmpty v-else class="max-w-[28px] max-h-[28px]" />
        </li>
      </ul>
      <button @click="$router.push('/video_chat')" class="buttons login_btn full_flex">Join chat</button>
    </nav>
    <section>
      <div class="flex items-center justify-between">
        <div
          @click="$router.back()"
          class="flex items-center gap-4 cursor-pointer max-w-fit"
        >
          <img src="@/assets/svg/icon/back_arrow.svg" alt="" />
          <h2 class="md:text-xl font-semibold">Kurslar</h2>
        </div>
        <UiButton
          @click="useCourse.modal.create = true"
          class="bg_orange font-semibold white !px-6"
          >Qo‘shish</UiButton
        >
      </div>
    </section>
    <section
      v-if="isLoading.isLoadingType('get')"
      class="grid xl:grid-cols-2 gap-5 mt-3 pb-20"
    >
      <UiFullLoading v-for="i in 6" class="!h-[168px]" />
    </section>
    <section v-else-if="useCourse.store.subjects?.length">
      <h1 class="text-xl font-bold">Complete your Course</h1>
      <p class="mt-1 mb-5 _c92">
        We know the best things for You. Top picks for You.
      </p>
      <div class="grid grid-cols-3">
        <div
          v-for="i in useCourse.store.courses"
          v-show="i.user_step != 0"
          class="lesson_shadow p-2 rounded-[10px] cursor-pointer"
        >
          <div @click="() => routeToLessonModal(i.id)">
            <img
              v-if="i.image"
              class="rounded-[24px] h-[160px] w-full object-cover"
              :src="i.image"
              alt=""
            />
            <img
              v-else
              class="rounded-[24px] h-[160px] w-full object-cover"
              src="@/assets/image/course.png"
              alt=""
            />
            <div>
              <h1 class="font-bold uppercase mt-1 mb-2">
                {{ i.name }}
              </h1>
              <el-progress class="class_progress mb-2 mt-6" :percentage="45" />
              <p class="_c92 text-sm mb-1">
                {{ i.user_step }}/{{ i.lesson_count }} Videos Completed
              </p>
              <ul class="flex -space-x-1 my-2 overflow-hidden overflow-x-auto">
                <li v-for="user in i.users">
                  <img
                    v-if="user.image"
                    class="h-7 w-7 rounded-full object-cover"
                    :src="user.image"
                    alt=""
                  />
                  <UiAvatarEmpty v-else class="max-w-[28px] max-h-[28px]" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex items-center gap-2 whitespace-nowrap overflow-x-auto my-10"
      >
        <button
          v-for="i in 10"
          class="rounded-xl px-4 py-2 text-sm orange border_orange"
        >
          All Recommendation
        </button>
      </div>
      <h1 class="text-xl font-bold">Trending Course</h1>
      <p class="mt-1 mb-5 _c92">
        We know the best things for You. Top picks for You.
      </p>
      <swiper
        @mousewheel="mouseSlider"
        @slider-move="changeSlide"
        :watchSlidesProgress="true"
        :slidesPerView="1"
        :spaceBetween="30"
        :pagination="{ clickable: true }"
        class="mySwiper md:mt-[18px] mt-2"
        :modules="modules"
      >
        <swiper-slide :id="i" v-for="(i, index) in 11">
          <section class="grid xl:grid-cols-3 gap-5 mt-3 pb-20">
            <div
              v-for="i in useCourse.store.courses"
              v-show="i.user_step == 0"
              class="relative lesson_shadow p-2 rounded-[10px] cursor-pointer"
            >
              <a-dropdown
                class="absolute top-4 right-4 bg-white rounded-md py-1 h-6 w-6"
                :trigger="['click']"
                placement="bottomRight"
              >
                <img
                  class="cursor-pointer min-w-[20px]"
                  src="@/assets/svg/icon/threedot_black.svg"
                  alt=""
                />
                <template #overlay>
                  <a-menu>
                    <a-menu-item @click="editCourse(i)">Edit</a-menu-item>
                    <a-menu-item @click="deleteCourse(i.id)"
                      >Delete</a-menu-item
                    >
                  </a-menu>
                </template>
              </a-dropdown>
              <div @click="() => routeToLessonModal(i.id)">
                <div class="relative rounded-[24px] overflow-hidden">
                  <div
                    v-if="i.type == 'private'"
                    class="absolute h-[160px] bg-black bg-opacity-50 w-full full_flex flex-col space-y-3 white"
                  >
                    <img src="@/assets/svg/icon/lock.svg" alt="" />
                    <p>Private course</p>
                  </div>
                  <img
                    v-if="i.image"
                    class="rounded-[24px] h-[160px] w-full object-cover"
                    :src="i.image"
                    alt=""
                  />
                  <img
                    v-else
                    class="rounded-[24px] h-[160px] w-full object-cover"
                    src="@/assets/image/course.png"
                    alt=""
                  />
                </div>
                <div>
                  <h1 class="font-bold uppercase mt-1 mb-2">
                    {{ i.name }}
                  </h1>
                  <p
                    class="line-clamp-3 _c32 text-sm !font-light mb-1 leading-[18px] h-[54px]"
                  >
                    {{ i.description }}
                  </p>
                  <p>
                    <span class="_c32 font-bold text-xl mr-1"
                      >${{ i.price }}</span
                    ><span class="_c32 opacity-60 line-through"
                      >${{ i.discount }}</span
                    >
                  </p>
                  <div class="flex gap-2 my-1">
                    <p class="h-7 px-2 b_cf2 full_flex r_8">226k Members</p>
                    <p class="h-7 px-2 b_cf2 full_flex r_8">Paid</p>
                    <p class="h-7 px-2 b_cf2 full_flex r_8">Online</p>
                  </div>
                  <ul
                    class="flex -space-x-1 my-2 overflow-hidden overflow-x-auto"
                  >
                    <li v-for="user in i.users">
                      <img
                        v-if="user.image"
                        class="h-7 w-7 rounded-full object-cover"
                        :src="user.image"
                        alt=""
                      />
                      <UiAvatarEmpty v-else class="max-w-[28px] max-h-[28px]" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </swiper-slide>
      </swiper>
    </section>
    <section class="full_flex h-full py-20 flex-col space-y-4" v-else>
      <img class="h-20" src="@/assets/svg/icon/not_found.svg" alt="" />
      <p>Hech qanday kurslar topilmadi</p>
    </section>

    <!-- create -->
    <a-modal
      class="max-w-[50%] min-w-[50%]"
      v-model:open="useCourse.modal.create"
      centered
    >
      <div class="flex justify-between items-center w-full">
        <h1 class="font-semibold text-2xl">
          <span v-if="useCourse.modal.edit">Kursni tahrirlash</span
          ><span v-else>Kurs qo'shish</span>
        </h1>
        <div class="flex items-center gap-6">
          <p
            v-if="useCourse.create.published"
            class="text-[16px] _c07 font-medium"
          >
            Published
          </p>
          <p v-else class="text-[16px] font-medium">Draft</p>
          <!-- <el-switch v-model="useCourse.create.published" class="ml-2" /> -->
          <a-switch class="!w-5" v-model:checked="useCourse.create.published" />
        </div>
      </div>
      <form
        class="space-y-5 _c45 mt-[30px]"
        @submit.prevent="useCourse.createCourse"
      >
        <div class="space-y-2">
          <label for="name">Kurs nomi</label>
          <input
            v-model="useCourse.create.name"
            class="rounded-[12px]"
            id="name"
            type="text"
          />
        </div>
        <div class="space-y-2">
          <label for="description">Tavsif</label>
          <input
            v-model="useCourse.create.description"
            class="rounded-[12px]"
            id="description"
            type="text"
          />
        </div>
        <div class="space-y-2">
          <label for="price">Kurs narxi</label>
          <input
            v-model="useCourse.create.price"
            class="rounded-[12px]"
            id="price"
            type="number"
          />
        </div>
        <div class="space-y-2">
          <label for="discount">Chegirma</label>
          <input
            v-model="useCourse.create.discount"
            class="rounded-[12px]"
            id="discount"
            type="number"
          />
        </div>
        <div class="grid grid-cols-3 gap-4">
          <label
            for="free"
            class="full_flex !justify-between gap-5 border_ced r_8 py-3 px-6"
          >
            <div>
              <p>Free</p>
              <p>Free course for all</p>
            </div>
            <input
              v-model="useCourse.create.type"
              type="radio"
              value="free"
              name="type"
              id="free"
              class="h-5 w-5"
            />
          </label>
          <label
            for="paid"
            class="full_flex !justify-between gap-5 border_ced r_8 py-3 px-6"
          >
            <div>
              <p>Paid</p>
              <p>Paid course for join</p>
            </div>
            <input
              v-model="useCourse.create.type"
              type="radio"
              value="paid"
              name="type"
              id="paid"
              class="h-5 w-5"
            />
          </label>
          <label
            for="private"
            class="full_flex !justify-between gap-5 border_ced r_8 py-3 px-6"
          >
            <div>
              <p>Private</p>
              <p>You need to access to show</p>
            </div>
            <input
              v-model="useCourse.create.type"
              type="radio"
              value="private"
              name="type"
              id="private"
              class="h-5 w-5"
            />
          </label>
        </div>
        <img
          v-if="useCourse.create.file.url"
          :src="useCourse.create.file.url"
          class="h-10 w-full object-cover"
        />
        <label
          v-else
          for="upload_photo"
          class="full_flex flex-col py-16 b_cf2 rounded-xl text-sm"
        >
          <img src="@/assets/svg/icon/add_image.svg" alt="" />
          <p>Add a photo</p>
        </label>
        <input
          @change="handleFileUpload"
          type="file"
          id="upload_photo"
          class="input_file !-mt-16"
        />
        <UiButton
          type="submit"
          v-loading="isLoading.isLoadingType('updateSubject')"
          class="!h-12 w-full bg_orange !mt-[54px] font-semibold white"
        >
          <span v-if="useCourse.modal.edit">Tahrirlash</span>
          <span v-else>Yaratish</span>
          <Loading />
        </UiButton>
        <UiButton
          type="button"
          class="!h-12 w-full font-semibold _c07"
          @click="useCourse.modal.create = false"
        >
          Bekor qilish
          <Loading />
        </UiButton>
      </form>
    </a-modal>

    <!-- Join to course -->
    <a-modal class="max-w-[440px]" v-model:open="useCourse.modal.join" centered>
      <div class="flex justify-between items-center w-full mb-4">
        <h1 class="font-semibold text-2xl">Kursga qo'shilish</h1>
      </div>
      <div>
        <img
          class="rounded-[24px] h-[160px] w-full object-cover"
          src="@/assets/image/course.png"
          alt=""
        />
        <div>
          <h1 class="font-bold uppercase mt-1 mb-2">Uchburchaklar</h1>
          <p>
            <span class="_c32 font-bold text-xl mr-1">$25</span
            ><span class="_c32 opacity-60 line-through">$24</span>
          </p>
        </div>
        <UiButton
          @click="routeToLessons"
          v-if="isLoading.user.data.current_role == 'teacher'"
          class="login_btn w-full mt-4"
          >Add lesson</UiButton
        >
        <UiButton @click="routeToLessons" v-else class="login_btn w-full mt-4"
          >Join to group</UiButton
        >
      </div>
    </a-modal>

    <!-- delete -->
    <a-modal width="200" v-model:open="useCourse.modal.delete" centered>
      <div class="space-y-6">
        <!-- <h1 class="font-semibold text-lg">Hisobni o'chirish</h1> -->
        <h1 class="font-semibold text-lg">Kursni o'chirish</h1>
        <p>Haqiqatdan ham bu kursni o'chirmoqchimisiz?</p>
      </div>
      <div class="flex items-center gap-5 mt-5">
        <UiButton
          @click="useCourse.modal.delete = false"
          class="border border-[#BBBBBB] !h-10"
          >Yo'q</UiButton
        >
        <UiButton
          @click="useCourse.deleteCourse"
          v-loading="isLoading.isLoadingType('deleteSubject')"
          class="bg_orange white !h-10"
          >Ha</UiButton
        >
      </div>
    </a-modal>
  </main>
</template>

<script setup>
definePageMeta({
  layout: "search",
});
import { useCourseStore } from "@/store";
import { useFormatter } from "@/composables";
import { useLoadingStore } from "@/store";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const modules = [Pagination];

const { formatSecondsToHours } = useFormatter();

const useCourse = useCourseStore();
const isLoading = useLoadingStore();
const router = useRouter();
await useAsyncData(() => {
  useCourse.getCourses();
});
// useCourse.getSubjects()
// await useAsyncData(() => {
//   console.log("HIIIIIIIIIIIIIIIIIIII")
//   return useCourse.getSubjects();
// });

await useAsyncData("getSubjects", () => useCourse.getSubjects());

const classes = [
  "1-sinf",
  "2-sinf",
  "3-sinf",
  "4-sinf",
  "5-sinf",
  "6-sinf",
  "7-sinf",
  "8-sinf",
  "9-sinf",
  "10-sinf",
  "11-sinf",
];

const store = reactive({
  reyting: 50,
  mouse_wheel: 0,
});

function editCourse(data) {
  useCourse.store.course_id = data.id;
  for (let i in useCourse.create) {
    useCourse.create[i] = data[i];
  }
  useCourse.modal.edit = true;
  useCourse.modal.create = true;
}

function deleteCourse(id) {
  useCourse.store.course_id = id;
  useCourse.modal.delete = true;
}

function handleFileUpload(e) {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);
  useCourse.create.file = { file, url };
}

function routeToLessonModal(id) {
  useCourse.store.course_id = id;
  useCourse.modal.join = true;
}

function routeToLessons() {
  const current_route = router.currentRoute.value;
  const subject_id = current_route.params.subject_id;
  router.push(
    `/subjects/${subject_id}/courses/${useCourse.store.course_id}/lessons`
  );
}

function changeSlide() {
  setTimeout(() => {
    useCourse.store.class = +document.querySelector(".swiper-slide-visible")
      ?.id;
  }, 200);
}

function mouseSlider(e) {
  // e.preventDefault(); // Prevent default scroll behavior
  // Determine scroll direction
  if (e.deltaX > 0) {
    store.mouse_wheel += 1;
    if (store.mouse_wheel % 10 == 0) {
      useCourse.store.class += 1;
      store.mouse_wheel = 0;
    }
    console.log("Scrolling to the right");
  } else if (e.deltaX < 0) {
    store.mouse_wheel += 1;
    if (store.mouse_wheel % 10 == 0) {
      useCourse.store.class -= 1;
      store.mouse_wheel = 0;
    }
    console.log("Scrolling to the left");
  }
}

watch(
  () => useCourse.store.class,
  () => {
    const swiper = document.querySelector(".swiper-pagination-clickable");
    if (swiper && swiper.children.length >= useCourse.store.class) {
      const secondChild = swiper.children[useCourse.store.class - 1];
      if (secondChild) {
        secondChild.click();
      }
    }

    router.push(`/courses?class=${useCourse.store.class}`);
  }
);

onMounted(() => {
  const swiper = document.querySelector(".swiper-pagination-clickable");
  const secondChild = swiper?.children[+router.currentRoute.value.query.class];
  if (secondChild) {
    secondChild.click();
  }
});
</script>

<style lang="scss" scoped></style>
