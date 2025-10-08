<template>
  <div id="swagger-ui"></div>
</template>

<script>
import SwaggerUI from "swagger-ui-dist/swagger-ui-es-bundle.js";
import "swagger-ui-dist/swagger-ui.css";

export default {
  name: "SwaggerUI",
  mounted() {
    // Initialize Swagger UI
    SwaggerUI({
      dom_id: "#swagger-ui",  // ID of the div where Swagger UI should be rendered
      url: "https://static.igem.wiki/teams/6003/software/enzymix-docs.json",  // URL to your Swagger JSON definition
      deepLinking: true,
      presets: [
        SwaggerUI.presets.apis,
        SwaggerUI.SwaggerUIStandalonePreset,
      ],
      layout: "BaseLayout",
    });
  },
};
</script>

<style scoped>
/* Optional: You can style the Swagger UI container if needed */
#swagger-ui {
  height: 100%;
  padding: 10px;
}
</style>
