<template>
  <!-- App.vue -->

  <v-app>
    <v-app-bar app color="#B91432">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        color="white"
      ></v-app-bar-nav-icon>
      <div class="d-flex align-center" @click="directHome">
        <LabelComponent
          label="SAI-BOARD"
          class="ml-2"
          fontFamily="Germania One"
          fontSize="25px"
        />
      </div>

      <v-spacer></v-spacer>
      <v-avatar color="primary" size="40" class="white--text">R</v-avatar>
      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
          <v-list-item @click="directLogout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app color="#222d32">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="../assets/img1.png" alt="" />
          </v-avatar>
          <p class="white--text subheading mt-4 text-center text-nav">
            Username
          </p>
        </v-flex>
      </v-layout>

      <v-list>
        <v-list-item @click="directHome">
          <div>
            <v-icon color="white" class="mr-2" size="20">mdi-home</v-icon>
            <label class="text-title white--text text-nav">Home</label>
          </div>
        </v-list-item>
        <v-list-item @click="directExecutiveSummary">
          <div>
            <v-icon color="white" class="mr-2" size="20">mdi-book</v-icon>
            <label class="text-title white--text text-nav"
              >Executive Summary</label
            >
          </div>
        </v-list-item>

        <v-list-group color="white">
          <template v-slot:activator>
            <v-icon color="white" class="mr-2" size="20"
              >mdi-book-multiple</v-icon
            >
            <label class="text-title white--text text-nav"
              >Survei Kepuasan Dosen</label
            >
          </template>
          <template #appendIcon>
            <v-icon color="white">mdi-chevron-down</v-icon>
          </template>
          <v-list-item
            v-for="([title, icon, routeName], i) in edom"
            :key="i"
            link
          >
            <div @click="redirect(routeName)" class="d-flex menu">
              <v-list-item-icon>
                <v-icon v-text="icon" color="white" size="18"></v-icon>
              </v-list-item-icon>
              <v-list-item-title
                v-text="title"
                class="white--text text-nav"
              ></v-list-item-title>
            </div>
          </v-list-item>
        </v-list-group>
        <v-list-group>
          <template v-slot:activator>
            <v-icon color="white" class="mr-2" size="20">mdi-library</v-icon>
            <label class="text-title white--text text-nav"
              >Survei Kepuasan</label
            >
          </template>
          <template #appendIcon>
            <v-icon color="white">mdi-chevron-down</v-icon>
          </template>
          <v-list-item
            v-for="([title, icon, routeName], i) in kepuasan"
            :key="i"
            link
          >
            <div class="d-flex menu">
              <v-list-item-icon>
                <v-icon
                  v-text="icon"
                  color="white"
                  size="18"
                  class="mr-0"
                ></v-icon>
              </v-list-item-icon>
              <v-list-item-title
                v-text="title"
                class="white--text text-nav"
              ></v-list-item-title>
            </div>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <v-container>
        <div>
          <slot />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import { LabelComponent } from "@/components";

export default {
  name: "PrivateLayout",
  props: {
    title: { type: String, default: "" },
  },
  components: { LabelComponent },
  data: () => ({
    drawer: true,
    edom: [
      ["EDoM", "mdi-pencil-circle-outline", "edom"],
      ["EDPoM", "mdi-pencil-circle-outline", "edpom"],
      ["EDWoM", "mdi-pencil-circle-outline", "edwom"],
    ],
    kepuasan: [
      ["Create", "mdi-plus-outline"],
      ["Read", "mdi-file-outline"],
      ["Update", "mdi-update"],
      ["Delete", "mdi-delete"],
    ],
  }),
  methods: {
    directHome() {
      this.$router.push({ name: "HomePage" });
    },
    redirect(routeName) {
      this.$router.push({ name: routeName });
    },
    directLogout() {
      this.$router.push({ name: "Login" });
    },
    directExecutiveSummary() {
      this.$router.push({ name: "ExecutiveSummary" });
    },
  },
};
</script>
<style>
.text-title {
  position: relative;
}
.menu {
  margin-left: 0px;
}
.text-nav {
  font-size: 13.5px;
  font-weight: 500;
}
</style>
