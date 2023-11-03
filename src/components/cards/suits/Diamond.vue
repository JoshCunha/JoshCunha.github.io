<template>
    <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        :width="size"
        :height="size"
    >
        <g id="SVGRepo_bgCarrier" stroke-width="0" />
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
        <g id="SVGRepo_iconCarrier">
            <path
                fill="#000000"
                d="M431.76 256c-69 42.24-137.27 126.89-175.76 224.78C217.51 382.89 149.25 298.24 80.24 256c69-42.24 137.27-126.89 175.76-224.78C294.49 129.11 362.75 213.76 431.76 256z"
            />
        </g>
    </svg>
</template>

<script>
export default {
    name: "Diamond",
    props: {
        size: {
            type: Number,
            default: 20
        }
    }
}
</script>