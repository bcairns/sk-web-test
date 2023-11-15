<script>
    export let xl = false;
    export let xl16 = false;
    export let xl18 = false;

    let _class = '';
    export { _class as class };
</script>

<div class="px-6 md:px-10 mx-auto {_class}"
     class:max-w-[1280px]={!xl && !xl16 && !xl18}
     class:max-w-[1484px]={xl}
     class:max-w-[1688px]={xl16}
     class:max-w-[1892px]={xl18}
>
    <slot />
</div>
