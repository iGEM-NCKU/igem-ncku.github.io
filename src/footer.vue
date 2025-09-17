<template>
  <v-footer class="glass elevate mt-10" style="border-radius: var(--radius);">
    <v-container>
      <v-row align="center" justify="space-between">
        <v-col cols="12" md="6">
          <div class="d-flex align-center">
            <img src="icon.png" height="24" class="mr-2" />
            <b class="text-primary">Bye</b><b class="text-accent">film</b>
          </div>
          <div class="text-muted" style="font-size: 0.9rem;">
            © {{ new Date().getFullYear() }} NCKU iGEM. All rights reserved.
          </div>
        </v-col>
        <v-col cols="12" md="6" class="text-right">
          <v-btn variant="text" color="primary" href="index.html">Home</v-btn>
          <v-btn variant="text" color="primary" href="description">Project</v-btn>
          <v-btn variant="text" color="primary" href="wetlab">WetLab</v-btn>
          <v-btn variant="text" color="primary" href="drylab">DryLab</v-btn>
          <v-btn variant="text" color="primary" href="members">Team</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'site_footer'
}
</script>

<style scoped>
</style>

