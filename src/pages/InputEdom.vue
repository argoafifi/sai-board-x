<template>
    <v-container>
      <div>
      <p class="d-flex align-start mb-6 myFontTitle" style="color:#B6252A;">SAI<span class="myFontTitle" style="color:#55565B;">-BOARD</span></p>
      <br />
    </div>
    <p class="myFontSubtitle" style="font-size: 17px;">Input data</p>
    <br />
     <v-form >

        <v-row >
          <v-col cols="2">
            <v-header class="myFontSubtitle" style="font-size: ;17px">Download Template </v-header>
          </v-col> 
          <v-col >
          <v-btn   href="./assets/Template_SAI_board.xlsx"   download color="rgba(26, 198, 53, 1)" on-click >Template.xlxx</v-btn>
          <v-btn  class="mx-1 " color="rgba(67, 168, 241, 1)">Template.xlxx</v-btn>
        </v-col>
        </v-row>

        <!-- tahun edom -->
        <v-row>
          <v-col cols="2">
            <v-header class="myFontSubtitle" style="font-size: ;17px">Tahun Edom </v-header>
          </v-col>
          <v-col cols="4">
            <v-combobox   :items="items" dense outlined solo  hide-details label="Choosee"></v-combobox>
          </v-col>
        </v-row>

        <!-- choose file edom -->
        <v-row>
          <v-col cols="2">
            <v-header class="myFontSubtitle" style="font-size: ;17px">Choose File Edom  </v-header>
          </v-col>
          <v-col cols="3">
          <input type="file" @change="onFileSelected" filled>
          </v-col>
        </v-row>
        <!--  choose file-->
        <v-row>
          <v-col cols="2">
            <v-header class="myFontSubtitle" style="font-size: ;17px">Choose File</v-header>
          </v-col>
          <v-col cols="3">
          <input type="file" @change="onFileSelected" filled >
          </v-col>
        </v-row>
        
    
      <v-div class="d-flex">
        <v-col cols=12 sm=8></v-col>
        <v-btn href="/edom" class="myFontButton px-8  white--text " color="#B6252A">Submit</v-btn>
      </v-div>    
      </v-form>
  
    </v-container>
  </template>
  
  
  
  
  
  <style>
  @import url("https://fonts.googleapis.com/css2?family=Germania+One&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,500;0,700;1,900&display=swap");
  .myFontTitle{
      font-family: 'Germania One';
      font-size: 40px;
      line-height: 50px;
      text-align: center;
      color:black;
  }
  
  .myFontSubtitle{
          font-family: 'Battambang';
          font-style: normal;
          font-weight: 400;
       
          line-height: 30.71px;
          text-align: left;
          color:black;
      }
      .myFontButton{
          font-family: 'Battambang';
          font-style: normal;
          font-weight: 700;
          font-size: 13px;
          line-height: 23px;
          text-align: center;
          color:#B6252A;
          border-radius: 7px;
      }
      
     
  </style>
  
  <script>
  export default {
    name: "EdomPage",
    data(){
      return{
       
        items: [
          '2021/2022 - Ganjil',
          '2021/2022 - Genap',
          '2022/2023 - Ganjil',
          '2022/2023 - Genap',
        ],
        
      }
   }
  };
  </script>
  