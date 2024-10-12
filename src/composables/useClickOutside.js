import { onBeforeUnmount, onMounted, ref } from "vue";

export function useClickOutside(callback) {
  const elementRef = ref(null);

  const handleClickOutside = (event) => {
    if (elementRef.value && !elementRef.value.contains(event.target)) {
      callback();
    }
  };

  onMounted(() => {
    document.addEventListener("click", handleClickOutside);
  });

  onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside);
  });

  return {
    elementRef,
  };
}
