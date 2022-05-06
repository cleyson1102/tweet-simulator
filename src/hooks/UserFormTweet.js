import { ref } from 'vue';

export default function useFormTwet() {
   const showForm = ref(false);

   const openCloseForm = () => {
      showForm.value = !showForm.value;
   };
   return {
      showForm,
      openCloseForm,
   }
}