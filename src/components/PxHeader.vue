<template>
  <header class="shadow pb-4">
    <nav class="mb-3">
      <div class="mb-1">
        <nav class="flex items-center justify-between bg-green-400 p-6">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <px-icon class="mr-2" />
            <span class="font-semibold text-xl tracking-tight"
              >Bitcoin Marketplace</span
            >
          </div>
          <div
            class="hidden sm:block w-full flex-grow lg:flex lg:items-center lg:w-auto"
          >
            <div class="text-sm lg:flex-grow"></div>
          </div>
        </nav>
      </div>
    </nav>
  </header>
</template>

<script>
import PxIcon from "@/components/PxIcon";
export default {
  name: "PxHeader",
  components: { PxIcon }
};
</script>
