<template>
  <v-container>
    <v-row align="start" justify="center" class="mx-auto">
      <v-col md="4">
        <v-img
          :src="require('../assets/logo-telkom.png')"
          class="my-15"
          contain
          widht="409"
          height="370"
        />
        <p class="justify-center FontTitle" style="color: #b6252a">
          SAI<span class="FontTitle" style="color: #55565b">-BOARD</span>
        </p>
      </v-col>
      <v-col md="4" class="my-10">
        <v-card color="#ABABAB" min-widht="384" min-height="483">
          <v-card-text align="center" class="mx-auto my-12">
            <br /><br /><br />
            <h1 class="text-center FontHeader">
              HELLO ! WELCOME TO <br />
              SAI DASHBOARD
            </h1>
            <br />
            <p class="FontSubHeader">Silahkan Login dengan Akun SSO Anda</p>
            <v-row>
              <v-col>
                <v-form>
                  <v-text-field
                    class="mx-10"
                    label="Username"
                    prepend-icon="mdi-account"
                  ></v-text-field>
                  <v-text-field
                    class="mx-10"
                    label="Password"
                    type="password"
                    prepend-icon="mdi-lock"
                  ></v-text-field>
                  <v-btn
                    class="FontButton px-8 py-3 my-3 white--text"
                    color="#B6252A"
                    >Login</v-btn
                  >
                </v-form>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Germania+One&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,500;0,700;1,900&display=swap");
.FontTitle {
  font-family: "Germania One";
  font-size: 70px;
  line-height: 30px;
  text-align: center;
  color: black;
}

.FontHeader {
  font-family: "Germania One";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  color: black;
}
.FontSubHeader {
  font-family: "Battambang";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 23px;
  text-align: center;
  color: black;
}
.FontButton {
  font-family: "Battambang";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 23px;
  text-align: center;
  color: #b6252a;
  border-radius: 7px;
}
</style>

<script>
export default {
  name: "Login",
};
</script>
