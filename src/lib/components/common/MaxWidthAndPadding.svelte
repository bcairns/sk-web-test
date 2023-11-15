<script>
    export let xl = false;
    export let xl16 = false;
    export let xl18 = false;

    let _class = '';
    export { _class as class };
</script>

<div class="max-w-[1280px] px-6 md:px-10 mx-auto {_class}"
     class:xl:max-w-[1484px]={xl || xl16 || xl18}
     class:xl16:max-w-[1688px]={xl16 || xl18}
     class:xl18:max-w-[1892px]={xl18}
>
    <slot />
</div>
