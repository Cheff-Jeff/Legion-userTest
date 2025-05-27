<script setup lang="ts">
import type { BlockFonts, BlockScript } from "~/types/blockSourceInfo";

const hostRef = ref<HTMLElement | null>(null);
const props = defineProps<{
  blockName: string;
  html: string;
  css: string;
  scriptName: string | null;
  script: string | null;
  coreScript: string | null;
  headingFont: string | null;
  bodyFont: string | null;
}>();

onMounted(() => {
  if (!hostRef.value) return;

  const shadowRoot = hostRef.value.attachShadow({ mode: "closed" });
  const style = document.createElement("style");
  const blockWrap = document.createElement("div");
  const googleFonts1 = document.createElement("link");
  const googleFonts2 = document.createElement("link");
  const googleFontsHeading = document.createElement("link");
  const googleFontsBody = document.createElement("link");

  blockWrap.innerHTML = props.html;
  style.innerHTML = props.css + "* { font-family: var(--body-font-family); }";

  googleFonts1.rel = "preconnect";
  googleFonts1.href = "https://fonts.googleapis.com";

  googleFonts2.rel = "preconnect";
  googleFonts2.href = "https://fonts.gstatic.com";
  googleFonts2.crossOrigin = "crossorigin";

  if (props.headingFont) {
    googleFontsHeading.rel = "stylesheet";
    googleFontsHeading.href = `https://fonts.googleapis.com/css2?family=${props.headingFont}:wght@100..900&display=swap`;
  }

  if (props.bodyFont) {
    googleFontsBody.rel = "stylesheet";
    googleFontsBody.href = `https://fonts.googleapis.com/css2?family=${props.bodyFont}:wght@100..900&display=swap`;
  }

  if (props.coreScript) {
    const scriptBlob = new Blob([props.coreScript], {
      type: "application/javascript",
    });

    const coreScript = document.createElement("script");
    coreScript.type = "module";
    coreScript.defer = true;
    coreScript.src = URL.createObjectURL(scriptBlob);

    blockWrap.appendChild(coreScript);

    coreScript.onload = () => {
      URL.revokeObjectURL(coreScript.src);
    };
  }

  if (props.script) {
    const scriptBlob = new Blob(
      [
        props.script +
          `\n${props.scriptName ? props.scriptName + ".init();" : ""}`,
      ],
      { type: "application/javascript" }
    );
    const script = document.createElement("script");
    script.type = "module";
    script.defer = true;
    script.src = URL.createObjectURL(scriptBlob);

    blockWrap.appendChild(script);

    script.onload = () => {
      URL.revokeObjectURL(script.src);
    };
  }

  shadowRoot.appendChild(googleFonts1);
  shadowRoot.appendChild(googleFonts2);
  if (props.headingFont) {
    shadowRoot.appendChild(googleFontsHeading);
  }
  if (props.bodyFont) {
    shadowRoot.appendChild(googleFontsBody);
  }
  shadowRoot.appendChild(style);
  shadowRoot.appendChild(blockWrap);
});
</script>

<template>
  <div ref="hostRef"></div>
</template>
