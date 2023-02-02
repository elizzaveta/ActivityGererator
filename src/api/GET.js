import { ref } from 'vue'
import {apiBaseUrl} from "@/config/config";

export async function GET(endpoint) {
    const data = ref(null)

    await fetch(apiBaseUrl+endpoint)
        .then((res) => res.json())
        .then((json) => (data.value = json))
        .catch((err) => (console.log(err)))

    return await data;
}
