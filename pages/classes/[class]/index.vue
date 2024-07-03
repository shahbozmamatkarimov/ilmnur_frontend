<template>
  <main
    class="bg-white pb-10 rounded-lg overflow-hidden overflow-y-auto max-h-[calc(100vh_-_160px)]"
  >
    <nav
      class="flex items-center justify-between p-5 border-b border-[#EDEDED]"
    >
      <button
        @click="$router.back()"
        class="flex items-center gap-4 font-semibold text-xl"
      >
        <img src="@/assets/svg/icon/back_arrow.svg" alt="" />
        O'quvchilar
      </button>
    </nav>
    <section class="overflow-x-auto">
      <table class="table-auto mt-5 w-full">
        <thead>
          <tr class="text-sm b_cff3 whitespace-nowrap">
            <th class="text-start font-medium _c66 px-5 py-3">№</th>
            <th class="text-start font-medium _c66 px-5 py-3">Ism</th>
            <th class="text-start font-medium _c66 px-5 py-3">Reyting</th>
            <th class="text-start font-medium _c66 px-5 py-3">Telefon raqam</th>
            <th class="text-start font-medium _c66 px-5 py-3">Status</th>
            <th class="text-start font-medium _c66 px-5 py-3">Yaratilgan</th>
            <th
              v-if="isLoading.user.data.current_role == 'leader_teacher'"
              class="px-5 py-3"
            ></th>
            <th class="_c66 px-5 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b border-[#EDEDED]"
            v-for="(i, index) in useUser.store.getall"
            :class="i.user_status == 'pending' ? 'bg-[#F6F6F6]' : ''"
          >
            <td class="py-6 px-5 text-sm relative">
              <p
                v-if="i.user_status == 'pending'"
                class="b_cf23 w-[10px] h-[10px] absolute top-2 left-2 rounded-full"
              ></p>
              #{{ i.id }}
            </td>
            <td class="py-6 px-5">
              <div class="flex items-center h-full gap-2">
                <UiAvatarEmpty class="max-h-[32px] max-w-[32px]" />
                {{ i.full_name }}
              </div>
            </td>
            <td class="py-6 px-5">12</td>
            <td class="py-6 px-5">{{ i.user?.phone }}</td>
            <td class="py-6 px-5">
              <UiStatus :status="1" />
            </td>
            <td class="py-6 px-5">{{ formateCreatedAt(i.createdAt) }}</td>
            <td
              class="py-6 px-5 flex items-center whitespace-nowrap sticky right-0 bg-[#F6F6F6]"
              v-if="
                isLoading.user.data.current_role == 'leader_teacher' &&
                i.user_status == 'pending'
              "
            >
              <ui-button
                @click="useUser.updateStatus(i.id, index)"
                class="!h-[44px] orange border border-[#FF852E] !px-4"
                ><span class="lg:block hidden">Qabul qilish</span>
                <img
                  class="lg:hidden block"
                  src="@/assets/svg/icon/accept.svg"
                  alt=""
              /></ui-button>
              <ui-button
                @click="useUser.deleteUser(i.id, index)"
                class="!h-[44px] _c24 !px-4"
                ><span class="lg:block hidden">Rad etish</span>
                <img
                  class="lg:hidden block"
                  src="@/assets/svg/icon/refuse.svg"
                  alt=""
              /></ui-button>
            </td>
            <td class="py-6 px-5">
              <a-dropdown :trigger="['click']">
                <img
                  class="cursor-pointer min-w-[20px]"
                  src="@/assets/svg/icon/threedot_black.svg"
                  alt=""
                />
                <template #overlay>
                  <a-menu>
                    <a-menu-item>Edit</a-menu-item>
                    <a-menu-item>Delete</a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        v-if="isLoading.isLoadingType('getAllUsers')"
        class="w-full space-y-1 mt-1"
      >
        <UiFullLoading v-for="_ in 10" :l_height="'60px'" />
      </div>
    </section>

    <!-- create -->
    <a-modal class="max-w-[440px]" v-model:open="store.create" centered>
      <div class="flex justify-between items-center w-full">
        <h1 class="font-semibold text-2xl">O'quvchi qo'shish</h1>
      </div>
      <form class="space-y-5 _c45 mt-[30px]" @submit.prevent="useUser.register">
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

import { useUserStore, useLoadingStore } from "@/store";
import { useFormatter } from "#imports";

const { formateCreatedAt } = useFormatter();
const useUser = useUserStore();
const isLoading = useLoadingStore();
const store = reactive({
  create: false,
});

useUser.store.getall = [];
useUser.create.role = "student";

useUser.getAllStudent();
</script>

<style lang="scss" scoped></style>
