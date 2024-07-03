<template>
  <div>
    <!-- create user -->
    <a-modal
      class="max-w-[440px] !w-full !max-h-[100vh]"
      v-model:open="useUser.store.createModal"
      centered
    >
      <div class="flex justify-between items-center w-full">
        <h1
          v-show="useUser.create.role == i.role"
          v-for="i in roles"
          class="font-semibold text-2xl"
        >
          <span v-if="useUser.create.role == i.role"
            >{{ i.uz }}
            {{ useUser.store.is_update ? "tahrirlash" : "qo‘shish" }}</span
          >
        </h1>
        <p></p>
      </div>
      <form class="space-y-5 _c45 mt-[30px]" @submit.prevent="handleSubmit">
        <div class="space-y-2">
          <label for="name">Ism familiya</label>
          <input
            v-model="useUser.create.full_name"
            class="rounded-[12px]"
            id="name"
            type="text"
          />
        </div>
        <div class="space-y-2">
          <label for="phone">Telefon raqami</label>
          <input
            v-model="useUser.create.phone"
            class="rounded-[12px]"
            id="phone"
            type="text"
          />
        </div>
        <div
          v-if="
            isLoading.user.data.current_role == 'admin' &&
            useUser.create.role != 'main_teacher'
          "
          class="space-y-[10px]"
        >
          <h1>Viloyatingizni tanlang</h1>
          <a-select
            v-model:value="useUser.create.region"
            @change="handleChange"
            class="w-full"
            show-search
            :options="
              regions.map((pro) => ({
                value: pro.id,
                label: pro.name_uz,
              }))
            "
            required
          >
            <template #suffixIcon>
              <p class="h-4 w-[1px]"></p>
              <img src="@/assets/svg/icon/select_arrow6c.svg" alt="" />
            </template>
          </a-select>
        </div>
        <div
          v-if="
            isLoading.user.data.current_role == 'admin' &&
            useUser.create.role != 'main_teacher'
          "
          class="space-y-[10px]"
        >
          <h1>Tumaningizni tanlang</h1>
          <a-select
            v-model:value="useUser.create.district"
            class="w-full"
            show-search
            :options="store.districts.map((pro) => ({ value: pro.name_uz }))"
            required
          >
            <template #suffixIcon>
              <p class="h-4 w-[1px]"></p>
              <img src="@/assets/svg/icon/select_arrow6c.svg" alt="" />
            </template>
          </a-select>
        </div>
        <div
          v-if="
            isLoading.user.data.current_role == 'admin' &&
            useUser.create.role != 'parents' &&
            useUser.create.role != 'main_teacher'
          "
          class="space-y-[10px]"
        >
          <h1>Maktabingizni tanlang</h1>
          <a-select
            v-model:value="useUser.create.school_number"
            class="w-full"
            :options="sinf.map((pro) => ({ value: pro }))"
            required
          >
            <template #suffixIcon>
              <p class="h-4 w-[1px]"></p>
              <img src="@/assets/svg/icon/select_arrow6c.svg" alt="" />
            </template>
          </a-select>
        </div>
        <div v-if="useUser.create.role == 'student'" class="space-y-[10px]">
          <h1>Sinfingizni tanlang</h1>
          <div class="flex items-center gap-2">
            <a-select
              v-model:value="useUser.create.class[0]"
              class="min-w-[145px] sr_12"
              :options="sinf.map((pro) => ({ value: pro }))"
              required
            >
              <template #suffixIcon>
                <p class="h-4 w-[1px] bg-[#999999]"></p>
                <img
                  class="ml-2"
                  src="@/assets/svg/icon/select_arrow6c.svg"
                  alt=""
                />
              </template>
            </a-select>
            <p class="h-[1px] w-4 bg-[#CCCCCC]"></p>
            <a-select
              v-model:value="useUser.create.class[1]"
              class="min-w-[115px] sr_12"
              :options="sinf_type.map((pro) => ({ value: pro }))"
              required
            >
              <template #suffixIcon>
                <p class="h-4 w-[1px] bg-[#999999]"></p>
                <img
                  class="ml-2"
                  src="@/assets/svg/icon/select_arrow6c.svg"
                  alt=""
                />
              </template>
            </a-select>
          </div>
        </div>
        <div
          v-if="
            useUser.create.role == 'teacher' ||
            useUser.create.role == 'methodological'
          "
          class="space-y-2"
        >
          <label for="subject">O'qituv fani</label>
          <div v-for="i in useUser.store.subject_step" class="flex items-center gap-2">
            <a-select
              v-if="isLoading.user.data.role?.includes('methodological')"
              v-model:value="useUser.create.subjects[i - 1]"
              filterable
              @change="checkUserSubjects(i)"
              v-model="useAuth"
              class="w-full sr_12"
              required
            >
              <template #suffixIcon>
                <p class="h-4 w-[1px]"></p>
                <img src="@/assets/svg/icon/select_arrow6c.svg" alt="" />
              </template>
              <a-select-option
                v-for="subject in isLoading.user.data.subjects"
                :value="subject"
                >{{ subject }}</a-select-option
              >
            </a-select>
            <a-select
              v-else
              v-model:value="useUser.create.subjects[i - 1]"
              filterable
              @change="checkUserSubjects(i)"
              class="w-full sr_12"
              required
            >
              <template #suffixIcon>
                <p class="h-4 w-[1px]"></p>
                <img src="@/assets/svg/icon/select_arrow6c.svg" alt="" />
              </template>
              <a-select-option
                v-for="subject in provinceData"
                :value="subject"
                >{{ subject }}</a-select-option
              >
            </a-select>
            <p
              @click="useUser.store.subject_step += 1"
              class="full_flex min-w-[50px] h-[50px] rounded-full border border-[#CCCCCC] cursor-pointer"
            >
              <img src="@/assets/svg/icon/plus.svg" alt="" />
            </p>
          </div>
        </div>
        <div v-if="useUser.create.role == 'teacher'" class="space-y-2">
          <label>Sinf</label>
          <div
            v-for="(i, index) in useUser.create.class"
            class="flex justify-between"
          >
            <div class="flex items-center gap-2">
              <a-select
                v-model:value="useUser.create.class[index][0]"
                class="min-w-[145px] sr_12"
                :options="sinf.map((pro) => ({ value: pro }))"
                required
              >
                <template #suffixIcon>
                  <p class="h-4 w-[1px] bg-[#999999]"></p>
                  <img
                    class="ml-2"
                    src="@/assets/svg/icon/select_arrow6c.svg"
                    alt=""
                  />
                </template>
              </a-select>
              <p class="h-[1px] w-4 bg-[#CCCCCC]"></p>
              <a-select
                v-model:value="useUser.create.class[index][1]"
                class="min-w-[115px] sr_12"
                :options="sinf_type.map((pro) => ({ value: pro }))"
                required
              >
                <template #suffixIcon>
                  <p class="h-4 w-[1px] bg-[#999999]"></p>
                  <img
                    class="ml-2"
                    src="@/assets/svg/icon/select_arrow6c.svg"
                    alt=""
                  />
                </template>
              </a-select>
            </div>
            <p
              @click="add_class"
              class="full_flex w-[50px] h-[50px] rounded-full border border-[#CCCCCC] cursor-pointer"
            >
              <img src="@/assets/svg/icon/plus.svg" alt="" />
            </p>
          </div>
        </div>
        <UiButton
          @click="store.create = false"
          type="submit"
          class="!h-12 w-full bg_orange !mt-[54px] font-semibold white"
        >
          {{ useUser.store.is_update ? "Tahrirlash" : "Yaratish" }}
          <Loading />
        </UiButton>
      </form>
    </a-modal>
  </div>
</template>

<script setup>
import { useUserStore, useLoadingStore } from "@/store";
import { regions } from "@/assets/json/regions.js";
import { district } from "@/assets/json/districts.js";
import { roles } from "@/constants/roles.js";

const useUser = useUserStore();
const isLoading = useLoadingStore();

const sinf = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const sinf_type = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
const provinceData = ["Matematika", "Biologiya", "Kimyo"];

const store = reactive({
  create: false,
  classes: [["1", "A"]],
  subject_step: 1,
  districts: [],
});

if (isLoading.user.data.role?.includes("methodological")) {
  useUser.create.subjects = ref(
    isLoading.user.data.subjects ? isLoading.user.data.subjects[0] : ""
  );
} else {
  useUser.create.subjects = ref([provinceData[0]]);
}

function handleChange(data) {
  store.districts = [];
  useUser.create.district = "";
  for (let i of district) {
    if (i.region_id == data) {
      store.districts.push(i);
    }
  }
}

function add_class() {
  const data = [];
  data[0] = useUser.create.class[useUser.create.class.length - 1][0] + 1;
  data[1] = sinf_type[data[0] - 1];
  useUser.create.class.push(data);
}

function checkUserSubjects(subject) {
  if (
    useUser.create.subjects.indexOf(
      isLoading.user.data?.subjects[subject - 1]
    ) !=
    subject - 1
  ) {
    useUser.create.subjects.splice(subject - 1, 1);
    useUser.store.subject_step -= 1;
  }
}

function handleSubmit() {
  useUser.create.region = isLoading.user.current_role_data.region;
  useUser.create.district = isLoading.user.current_role_data.district;
  useUser.create.school_number = isLoading.user.current_role_data.school_number;
  if (useUser.store.is_update) {
    useUser.update(useUser.create);
  } else {
    useUser.register();
  }
}
</script>

<style lang="scss" scoped></style>
~/constants/roles.js~/constants/roles.js