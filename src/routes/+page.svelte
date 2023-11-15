<script>
    import MaxWidthAndPadding from "$lib/components/common/MaxWidthAndPadding.svelte";
    import ProductGrid from "$lib/components/mock/ProductGrid.svelte";
</script>

<ProductGrid />

<MaxWidthAndPadding class="my-16">
    <div class="grid gap grid-cols-2 md:grid-cols-4">
        <div class="border p-6">Item 1</div>
        <div class="border p-6">Item 2</div>
        <div class="border p-6">Item 3</div>
        <div class="border p-6">Item 4</div>
    </div>
</MaxWidthAndPadding>

<MaxWidthAndPadding xl18 class="my-16">
    <div class="grid gap grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        <div class="border p-6">Item 1</div>
        <div class="border p-6">Item 2</div>
        <div class="border p-6">Item 3</div>
        <div class="border p-6">Item 4</div>
        <div class="border p-6">Item 5</div>
        <div class="border p-6">Item 6</div>
    </div>
</MaxWidthAndPadding>

<MaxWidthAndPadding>
    <h2 class="font-bold text-20 mt-10">Fake Privacy Policy</h2>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam felis, tempus nec vehicula ut, faucibus quis elit. Nulla feugiat, nulla ut eleifend malesuada, libero ante vehicula quam, sed ultricies neque elit tristique eros. Morbi ut nibh urna. Quisque neque ligula, sodales vel hendrerit quis, egestas et leo. Nulla sem tortor, venenatis nec sem id, convallis accumsan orci. Cras vitae orci in velit ornare pulvinar sed dapibus nibh. Ut in pretium massa. Curabitur arcu diam, ornare in rutrum vitae, imperdiet sed mi. Praesent vestibulum dolor in feugiat condimentum.

    <p>Proin vel diam neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ligula arcu, efficitur eget aliquet in, dictum sit amet dolor. Donec id consequat enim, vitae viverra dolor. Nunc lacinia, erat sit amet tempor molestie, mi purus porttitor lorem, quis egestas massa massa sed nisl. Nulla efficitur eros in gravida molestie. Sed quis vulputate risus. Sed convallis tincidunt ex. Proin accumsan orci lacinia facilisis scelerisque.

    <p>Donec leo risus, molestie a nisl sit amet, blandit rhoncus velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent tristique eros quis dapibus luctus. In hac habitasse platea dictumst. Quisque non ex ut magna vehicula dapibus eu in quam. Sed sed lorem rutrum, congue sem nec, tincidunt nisl. Integer suscipit mollis dui, non pretium mauris fermentum in. Cras sodales pulvinar quam, a commodo tellus. Morbi eget ultricies augue, vel porta turpis. Suspendisse nec iaculis felis, ac dapibus enim.

    <p>Vivamus ornare tortor eu dignissim ullamcorper. Etiam tempor, tortor non laoreet sagittis, justo nibh commodo est, ut ultrices diam mi et lorem. In quis leo quis lorem eleifend rhoncus. Cras ac imperdiet turpis, ut tincidunt lectus. Sed mauris orci, gravida quis porttitor vel, consectetur nec quam. Donec pulvinar magna id mattis gravida. Donec eu semper turpis. Nunc ultricies bibendum massa sed rhoncus. Cras rutrum, purus vitae auctor auctor, ligula lacus luctus leo, faucibus viverra ipsum felis a mauris. Aliquam ut ultrices sapien. Duis vitae augue dui.


</MaxWidthAndPadding>

<style>
    p {
        @apply my-4;
    }
</style>