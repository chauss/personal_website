<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';

    const images = [
        'assets/images/hero_avatar_profile.png',
        'assets/images/hero_avatar_profile_3.png',
        'assets/images/hero_avatar_profile_2.png',
        'assets/images/hero_avatar_profile_4.png',
    ];

    let imageIndextoShow = 0;

    onMount(() => {
        const interval = setInterval(() => {
            imageIndextoShow = (imageIndextoShow + 1) % images.length;
        }, 8000);
        return () => clearInterval(interval);
    });
</script>

{#each [images[imageIndextoShow]] as src (imageIndextoShow)}
    <img
        {src}
        alt={`hero_avatar_${imageIndextoShow}`}
        out:fade={{ duration: 1500 }}
        in:fly={{ duration: 2500, x: 200 }}
    />
{/each}

<style lang="scss">
    img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        max-height: 100%;
        max-width: 100%;
    }
</style>
