/* Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
*/

Vue.component("purple_background_cta_component_1723569995", {
    template: `
    <section id="cta-section-container">
        <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6 bg-red-900">
            <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-3xl overflow-hidden bg-gradient-to-br from-red-800 to-red-900">
                <!-- Radial gradient -->
                <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                    <div id="radial-gradient-outer" class="absolute inset-0 translate-z-0 rounded-full blur-120 opacity-70 bg-gradient-to-r from-red-600 to-red-800"></div>
                    <div id="radial-gradient-inner" class="absolute w-1/4 h-1/4 translate-z-0 rounded-full blur-40 bg-gradient-to-r from-red-500 to-red-700">
                    </div>
                </div>
                <!-- Blurred shape -->
                <div id="blurred-shape" class="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                        <defs><linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%"><stop offset="0%" :stop-color="stopColorPrimaryStyle" /><stop offset="100%" :stop-color="stopColorSecondaryStyle" stop-opacity="0" /></linearGradient></defs>
                        <path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
                    </svg>
                </div>
                <!-- Content -->
                <div id="content" class="max-w-3xl mx-auto text-center">
                    <div id="content-subtitle" class="flex"><div id="content-subtitle-text" class="flex-1 font-medium text-transparent bg-clip-text pb-3 bg-gradient-to-r from-red-300 to-red-100">Bulk Deals, Quick Delivery, Happy Bottoms</div></div>
                    <div class="flex" id="content-title-container"><h2 id="content-title" class="flex-1 h2 text-transparent bg-clip-text pb-4 bg-gradient-to-r from-white via-red-100 to-white"> Roll into Savings: Your Toilet Paper Marketplace</h2></div>
                    <div class="flex" id="content-body-container"><p id="content-body" class="flex-1 text-lg mb-8 text-red-100">Discover the largest selection of toilet paper brands, styles, and prices all in one convenient place. From ultra-soft to eco-friendly options, we've got your bathroom needs covered.</p></div>
                    <a id="content-cta-button" href="#0" class="btn transition duration-150 ease-in-out group bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 px-6 py-3 rounded-full">Get Started <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-red-300">-&gt;</span></a>
                </div>
            </div>
        </div>
    </section>`,
        data() {
            return {
                expanded: false, 
                tab: null,
                radialGradientPrimaryStyle: "bg-blue-500",
                radialGradientSecondaryStyle: "bg-blue-400",
                stopColorPrimaryStyle: "#3B82F6",
                stopColorSecondaryStyle: "#60A5FA",
                transparentTextStyle: "text-transparent",
                contentSubtitleStyle: "bg-gradient-to-r from-blue-500 to-blue-200",
                contentCtaTitleStyle: "bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60",
                contentBodyStyle: "text-slate-400",
                contentCtaButtonPrimaryStyle:"text-slate-900",
                contentCtaButtonGradientStyle: "bg-gradient-to-r from-white/80 via-white to-white/80",
                contentCtaButtonHoverStyle: "hover:bg-white",
                contentCtaArrowStyle: "text-blue-500"
            };
        },
    });
                    