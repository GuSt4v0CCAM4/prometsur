
//import 'flowbite'; // Import Flowbite for UI components
import {createApp, h} from "vue"; // Import Vue
import {createInertiaApp} from "@inertiajs/vue3"; // Import Inertia
import {resolvePageComponent} from "laravel-vite-plugin/inertia-helpers"; // Import Inertia helpers
import {Head, Link} from "@inertiajs/vue3"; // Import Inertia components
import $ from 'jquery';
window.$ = window.jQuery = $;
//importamos js del template:


import { defineAsyncComponent } from 'vue'; // Import defineAsyncComponent for lazy loading

//importarmos el css
import '../css/app.css';
import '../css/bootstrap.min.css';

createInertiaApp({
    resolve: (name) => resolvePageComponent(
        `./Pages/${name}.vue`,
        import.meta.glob('./Pages/**/*.vue')
    ),
    setup({el, App, props, plugin}) {
        const app = createApp({render: () => h(App, props)})
            .use(plugin)
            .component('Head', Head) // Register Inertia Head component
            .component('Link', Link) // Register Inertia Link component
            // Registramos componente globales (opcional)
            .component('Navbar', defineAsyncComponent(() =>
            import('./Components/Layout/Navbar.vue')
            ))
            .component('Footer', defineAsyncComponent(() =>
            import('./Components/Layout/Footer.vue')
        ));

        app.mount(el);
    },
});


