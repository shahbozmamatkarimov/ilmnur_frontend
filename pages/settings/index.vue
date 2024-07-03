<template>
  <main
    class="bg-white md:max-w-[528px] pb-20 sm:rounded-[8px] p-5 overflow-hidden overflow-y-auto md:max-h-[calc(100vh_-_160px)] max-h-[calc(100vh_-_135px)]"
  >
    <nav class="border-b border-[#EDEDED]">
      <h1 class="text-xl font-semibold pb-3">Sozlamalar</h1>
    </nav>
    <section class="space-y-10 whitespace-nowrap mt-5">
      <div class="flex items-center gap-16">
        <p>Profil rasmi</p>
        <label v-if="!useSettings.user.image" for="upload_image">
          <!-- <img src="@/assets/svg/settings/profile.svg" alt="" /> -->
          <UiAvatarEmpty />
        </label>
        <label
          v-else
          for="upload_image"
          class="min-w-[72px] h-[72px] bg-[#F9F9F9] rounded-full full_flex"
        >
          <img
            class="rounded-full object-cover w-[72px] h-[72px]"
            :src="useSettings.user.image"
            alt=""
          />
        </label>
        <input
          @change="handleImage"
          type="file"
          id="upload_image"
          class="h-0 w-0 overflow-hidden p-0 border-none"
        />
      </div>
      <div>
        <h1 class="font-semibold w-[27%] text-end">Asosiy ma'lumotlar</h1>
        <div class="space-y-9 mt-5 md:w-[70%] md:ml-auto">
          <input
            @change="handleChange"
            v-model="useSettings.user.full_name"
            class="bg-[#F9F9F9]"
            type="text"
            placeholder="Enter your full name"
          />
          <div
            v-if="isLoading.user.data.current_role != 'admin'"
            class="space-y-[10px]"
          >
            <h1>Viloyat</h1>
            <a-select
              v-model:value="useSettings.user.region"
              @change="handleRegion"
              class="w-full"
              show-search
              :options="
                regions.map((pro) => ({
                  value: pro.id,
                  label: pro.name_uz,
                }))
              "
              placeholder="Viloyatingizni tanlang"
              required
            >
              <template #suffixIcon>
                <p class="h-4 w-[1px]"></p>
                <img src="@/assets/svg/icon/select_arrow6c.svg" alt="" />
              </template>
            </a-select>
          </div>
          <div
            v-if="isLoading.user.data.current_role != 'admin'"
            class="space-y-[10px]"
          >
            <h1>Tuman</h1>
            <a-select
            @change="handleChange"
              v-model:value="useSettings.user.district"
              class="w-full"
              show-search
              :options="store.districts.map((pro) => ({ value: pro.name_uz }))"
              placeholder="Tumaningizni tanlang"
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
              isLoading.user.data.current_role != 'admin' &&
              isLoading.user.data.current_role != 'parents'
            "
            class="space-y-[10px]"
          >
            <h1>Maktab</h1>
            <a-select
            @change="handleChange"
              v-model:value="useSettings.user.school_number"
              class="w-full"
              :options="sinf.map((pro) => ({ value: pro }))"
              placeholder="Maktabingizni tanlang"
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
              isLoading.user.data.current_role == 'teacher' ||
              isLoading.user.data.current_role == 'methodological'
            "
            class="space-y-2"
          >
            <label for="subject">O'qituv fani</label>
            <div
              v-for="i in useUser.store.subject_step"
              class="flex items-center gap-2"
            >
              <a-select
                v-model:value="useSettings.user.subjects[i - 1]"
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
          <div
            class="space-y-[10px]"
            v-if="
              isLoading.user.data.current_role != 'methodological' &&
              isLoading.user.data.current_role != 'parents' &&
              isLoading.user.data.current_role != 'director' &&
              isLoading.user.data.current_role != 'admin'
            "
          >
            <h1>Sinfingizni tanlang</h1>
            <div
              v-for="(i, index) in useSettings.user.class"
              class="flex justify-between"
            >
              <div class="flex items-center gap-2">
                <a-select
                  v-model:value="useSettings.user.class[index][0]"
                  @change="handleChange"
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
                  v-model:value="useSettings.user.class[index][1]"
                  @change="handleChange"
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
                v-if="isLoading.user.data.current_role == 'teacher'"
                @click="add_class"
                class="full_flex w-[50px] h-[50px] rounded-full border border-[#CCCCCC] cursor-pointer"
              >
                <img src="@/assets/svg/icon/plus.svg" alt="" />
              </p>
            </div>
          </div>
          <div class="flex items-center gap-10">
            <div
              @click="useSettings.user.gender = 'MALE'"
              class="flex items-center gap-[6px] cursor-pointer"
            >
              <img
                v-if="useSettings.user.gender == 'MALE'"
                class="h-3 w-3 object-cover"
                src="@/assets/svg/settings/radio.svg"
                alt=""
              />
              <p
                v-else
                class="h-3 w-3 border border-[#C1C1C1] rounded-full"
              ></p>
              <p>Erkak</p>
            </div>
            <div
              @click="useSettings.user.gender = 'FEMALE'"
              class="flex items-center gap-[6px] cursor-pointer"
            >
              <p
                v-if="useSettings.user.gender == 'MALE'"
                class="h-3 w-3 border border-[#C1C1C1] rounded-full"
              ></p>
              <img
                v-else
                class="h-3 w-3 object-cover"
                src="@/assets/svg/settings/radio.svg"
                alt=""
              />
              <p>Ayol</p>
            </div>
          </div>
          <input
            v-model="useSettings.user.phone"
            class="bg-[#F9F9F9]"
            type="text"
            placeholder="Enter your phone"
            disabled
          />
        </div>
      </div>
      <div>
        <h1 class="font-semibold w-[27%] text-end">Bildirishnomalar</h1>
        <div class="space-y-6 md:mt-3 mt-6 md:w-[70%] md:ml-auto">
          <div
            @click="handleChange('get_answered')"
            class="flex items-center gap-3 cursor-pointer"
          >
            <img
              v-if="useSettings.user.get_answered"
              src="@/assets/svg/settings/checkbox.svg"
              alt=""
            />
            <p v-else class="h-5 w-5 border border-[#C1C1C1] rounded-[4px]"></p>
            <p>Savolingizga javob berildi</p>
          </div>
          <div
            @click="handleChange('new_task')"
            class="flex items-center gap-3 cursor-pointer"
          >
            <img
              v-if="useSettings.user.new_task"
              src="@/assets/svg/settings/checkbox.svg"
              alt=""
            />
            <p v-else class="h-5 w-5 border border-[#C1C1C1] rounded-[4px]"></p>
            <p>Yangi vazifalar haqida bildirishnomalar</p>
          </div>
          <div
            @click="handleChange('chat_messages')"
            class="flex items-center gap-3 cursor-pointer"
          >
            <img
              v-if="useSettings.user.chat_messages"
              src="@/assets/svg/settings/checkbox.svg"
              alt=""
            />
            <p v-else class="h-5 w-5 border border-[#C1C1C1] rounded-[4px]"></p>
            <p>Chat xabarlari</p>
          </div>
        </div>
      </div>
      <!-- <div>
        <h1 class="font-semibold w-[27%] md:text-end">Xavfsizlik</h1>
        <div class="md:w-[70%] md:ml-auto">
          <UiButton
            @click="useSettings.store.change_password = true"
            class="bg-[#DDDDDD] text-[#242424] font-medium mt-6"
            >Parolni o‘zgartirish</UiButton
          >
        </div>
      </div> -->
      <div>
        <h1 class="font-semibold w-[27%] md:text-end">Dastur tili</h1>
        <div class="w-[70%] md:ml-auto">
          <button
            class="flex items-center pb-5 border-b border-[#EDEDED] mt-7 gap-9"
          >
            O‘zbek <img src="@/assets/svg/settings/lang_arrow.svg" alt="" />
          </button>
        </div>
      </div>
      <div>
        <button
          @click="useUser.store.deleteModal = true"
          class="text-[#FF5252] font-semibold mb-[10px]"
        >
          <!-- HISOBNI O‘CHIRISH -->
          HISOBDAN CHIQISH
        </button>
      </div>
    </section>

    <a-modal width="200" v-model:open="useSettings.store.handleImage" centered>
      <div class="space-y-6">
        <h1 class="font-semibold text-lg text-center">Profil rasmi</h1>
        <label
          for="upload_image"
          class="w-[144px] h-[144px] mx-auto bg-[#F9F9F9] rounded-full full_flex"
        >
          <img
            class="rounded-full object-cover w-[144px] h-[144px]"
            :src="store.imagePreview"
            alt=""
          />
        </label>
        <div class="space-y-2">
          <UiButton
            @click="useSettings.updateProfileImage"
            class="bg-[#FF852E] !h-9 white w-full"
            >Upload</UiButton
          >
          <UiButton
            @click="useSettings.store.handleImage = false"
            type="button"
            class="bg-[#F5F5F5] !h-9 _c07 w-full"
            >Discard</UiButton
          >
        </div>
      </div>
    </a-modal>

    <a-modal v-model:open="useSettings.store.change_password" centered>
      <form class="space-y-6">
        <h1 class="flex items-center justify-between font-semibold text-lg">
          Parolni o'zgartirish
          <img
            @click="useSettings.store.change_password = false"
            class="cursor-pointer"
            src="@/assets/svg/test/close.svg"
            alt=""
          />
        </h1>
        <div class="relative">
          <input
            :type="store.current ? 'text' : 'password'"
            v-model="useSettings.change_password.current_password"
            class="pr-[45px] bg-[#F9F9F9]"
            id="login"
            required
          />
          <div
            @click="store.current = !store.current"
            class="full_flex cursor-pointer h-[50px] w-[50px] absolute top-0 right-0"
          >
            <img src="@/assets/svg/settings/show.svg" alt="" />
          </div>
        </div>
        <div class="relativ">
          <input
            :type="store.new ? 'text' : 'password'"
            v-model="useSettings.change_password.new_password"
            class="pr-[45px] bg-[#F9F9F9]"
            id="login"
            required
          />
          <div
            @click="store.new = !store.new"
            class="full_flex cursor-pointer h-[50px] w-[50px] absolute top-0 right-0"
          >
            <img src="@/assets/svg/settings/show.svg" alt="" />
          </div>
        </div>
        <div class="space-y-2">
          <UiButton class="bg-[#FF852E] !h-9 white w-full">Keyingisi</UiButton>
          <UiButton
            @click="useSettings.store.change_password = false"
            type="button"
            class="bg-[#F5F5F5] !h-9 _c07 w-full"
            >Discard</UiButton
          >
        </div>
      </form>
    </a-modal>

    <a-modal width="200" v-model:open="useUser.store.deleteModal" centered>
      <div class="space-y-6">
        <!-- <h1 class="font-semibold text-lg">Hisobni o'chirish</h1> -->
        <h1 class="font-semibold text-lg">Hisobdan chiqish</h1>
        <p>Haqiqatdan ham hisobingizdan chiqishni xohlaysizmi?</p>
      </div>
      <div class="flex items-center gap-5 mt-5">
        <UiButton
          @click="useUser.store.deleteModal = false"
          class="border border-[#BBBBBB] !h-10"
          >Yo'q</UiButton
        >
        <UiButton
          @click="handleDeleteAccount"
          v-loading="isLoading.isLoadingType('deleteUser')"
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
import { regions } from "@/assets/json/regions.js";
import { district } from "@/assets/json/districts.js";
import { useSettingsStore, useUserStore, useLoadingStore } from "~/store";

const sinf = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const sinf_type = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
const provinceData = ["Matematika", "Biologiya", "Kimyo"];
const useSettings = useSettingsStore();
const useUser = useUserStore();
const isLoading = useLoadingStore();

const store = reactive({
  current: false,
  new: false,
  imagePreview: "",
  districts: [],
});

function handleImage(e) {
  const file = e.target.files[0];
  useSettings.store.profileFile = file;
  store.imagePreview = URL.createObjectURL(file);
  useSettings.store.handleImage = true;
}

function handleDeleteAccount() {
  localStorage.removeItem("token");
  useUser.store.deleteModal = false;
  navigateTo("/");
}

function handleChange(type) {
  if (type) {
    useSettings.user[type] = !useSettings.user[type];
  }
  useSettings.updateProfile();
}

function handleRegion(data) {
  store.districts = [];
  useSettings.user.district = "";
  for (let i of district) {
    if (i.region_id == data) {
      store.districts.push(i);
    }
  }
}

watch(
  () => useSettings.user.gender,
  () => {
    useSettings.updateProfile();
  }
);

watch(
  () => useSettings.user,
  () => {
    useSettings.updateProfile();
  }
);

onBeforeMount(() => {
  handleRegion(isLoading.user.current_role_data.region);
  useUser.store.subject_step =
    isLoading.user.current_role_data.subjects?.length;
  useSettings.getProfile();
});
</script>

<style lang="scss" scoped></style>
