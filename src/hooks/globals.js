/**
* This is the file that holds all the global variables
*/

import { ref } from "vue";

//var that triggers the loading animation
export const loading = ref(false);
//title and text of notification
export const showNotification = ref(false);
export const notificationTitle = ref('');
export const notificationText = ref('');
export const notificationColour = ref('#5EBB8D');

export function notify(title,text,colour,milliseconds){
    notificationColour.value = colour;
    notificationTitle.value = title;
    notificationText.value = text;
    showNotification.value = true;
    setTimeout(()=>{ showNotification.value = false }, milliseconds);
  }