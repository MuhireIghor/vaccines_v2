import { UIcon } from '../.nuxt/components';
<template>
    <main>
     <aside>
     <div>
        <UIcon name="i-heroicons-bars-3-20-solid" />
         <Logo />
     </div>
     </aside>
     <div>
        <header></header>
        <section>
            <slot />
        </section>
     </div>
    </main>
</template>