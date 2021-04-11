<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';

    const images = [
        'assets/images/hero_avatar_profile.png',
        'assets/images/hero_avatar_profile_3.png',
        'assets/images/hero_avatar_profile_2.png',
    ];

    let imageIndextoShow = 0;

    onMount(() => {
        const interval = setInterval(() => {
            imageIndextoShow = (imageIndextoShow + 1) % images.length;
        }, 16000);
        return () => clearInterval(interval);
    });
</script>

<div class="img-container">
    {#each [images[imageIndextoShow]] as src (imageIndextoShow)}
        <img
            {src}
            alt={`hero_avatar_${imageIndextoShow}`}
            out:fade={{ duration: 1500 }}
            in:fly={{ duration: 2500, x: 200 }}
        />
    {/each}
</div>

<style lang="scss">
    .img-container {
        position: relative;
        overflow: hidden;
        height: 100%;
        width: 100%;

        img {
            position: absolute;
            right: 0;
            max-height: 100%;
            max-width: 100%;
            object-fit: contain;
        }
    }
</style>
