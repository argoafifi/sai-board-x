<template>
  <v-container>
    <div>
      <p class="d-flex align-start mb-6 myFontTitle" style="color: #b6252a">
        SAI<span class="myFontTitle" style="color: #55565b">-BOARD</span>
      </p>
      <br />
    </div>
    <p class="myFontSubtitle" style="font-size: 17px">Input data</p>
    <br />
    <v-form>
      <v-row>
        <v-col cols="2">
          <v-header class="myFontSubtitle" style="font-size: ;17px"
            >Download Template
          </v-header>
        </v-col>
       
        <!-- download file edom 1  -->
        <v-col>
        <vue-excel-xlsx
        :data="data"
        :columns="columns"
        :file-name="'Template-edom-1'"
        :file-type="'xlsx'"
        :sheet-name="'sheetname'"
        >
        <v-btn color="rgba(26, 198, 53, 1)" on-click >Template 1</v-btn>
        </vue-excel-xlsx>
        
        <!-- download file edom 2  -->
        <vue-excel-xlsx
        :data="data"
        :columns="columns"
        :file-name="'Template-edom-2'"
        :file-type="'xlsx'"
        :sheet-name="'sheetname'"
        >
        <v-btn class="mx-1" color="rgba(67, 168, 241, 1)">Template 2</v-btn>
        </vue-excel-xlsx>
      
        </v-col>
      </v-row>
    
  
    
      <!-- tahun edom -->
      <v-row>
        <v-col cols="2">
          <v-header class="myFontSubtitle" style="font-size: ;17px"
            >Tahun Edom
          </v-header>
        </v-col>
        <v-col cols="4">
          <v-text-field
            dense
            outlined
            solo
            placeholder="tahun edom"
            hint="ex : 2021/2022 - Ganjil"
            persistent-hint
          ></v-text-field>
        </v-col>
      </v-row>
  
      <!-- upload file edom 1 -->
      <v-row>
        <v-col cols="2">
          <v-header class="myFontSubtitle" style="font-size: ;17px"
            >File edom 1
          </v-header>
        </v-col>
        <v-col cols="3">
          <input type="file" @change="onFileSelected" filled />
        </v-col>
      </v-row>
      <!--  upload file edom 2-->
      <v-row>
        <v-col cols="2">
          <v-header class="myFontSubtitle" style="font-size: ;17px"
            >File edom 2</v-header
          >
        </v-col>
        <v-col cols="3">
          <input type="file" @change="onFileSelected" filled />
        </v-col>
      </v-row>

      <v-div class="d-flex">
        <v-col cols="12" sm="8"></v-col>
        <v-btn
          href="/edom"
          class="myFontButton px-8 white--text"
          color="#B6252A"
          >Submit</v-btn
        >
      </v-div>
    
    </v-form>

  </v-container>
</template>

<script>
    import VueExcelXlsx from "vue-excel-xlsx";
    import Vue from "vue";

    Vue.use(VueExcelXlsx);

export default {
  name: "InputEdom",
  data() {
    return {
      items: [
        "2021/2022 - Ganjil",
        "2021/2022 - Genap",
        "2022/2023 - Ganjil",
        "2022/2023 - Genap",
      ],
      
      columns : [
                    {
                        label: "",
                        field: "field1",
                    },
                    {
                        label: "NO",
                        field: "field2",
                     
                    },
                    {
                        label: "FAKULTAS",
                        field: "field3",
                    },
                    {
                        label: "PRODI",
                        field: "field4",
                    },
                    {
                        label: "RATA-RATA SKOR (DALAM SKOR 100)",
                        field: "field5",
                    },
                    {
                        label: "PERSENTASE RESPONDEN PUAS & SANGAT PUAS",
                        field: "field6",
                    }
                ],
      data : [
      
        {
          field1: "",
          field2: "1",
          field3: "Fakultas Teknik Elektro",
          field4: "S1 Teknik Telekomunikasi",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Teknik Telekomunikasi (International Class)",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Teknik Elektro",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Teknik Elektro (Intenational Class)",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Smart Science And Technology",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Teknik Komputer",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Teknik Biomedis",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Electrical Energy Engineering",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S2 Teknik Elektro",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "2",
          field3: "Fakultas Rekayasa Industri",
          field4: "S1 Teknik Industri",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Teknik Industri(International Class)",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Sistem Informasi",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Sistem Informasi (International Class)",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Digital Supply Chain",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S2 Teknik Industri",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S2 Sistem Informasi",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "3",
          field3: "Fakultas Informatika",
          field4: "S1 Informatika",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Informatika (International Class)",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Teknologi Informasi",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Rekayasa Perangkat Lunak",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Data Sains",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Pjj Informatika",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S2 Informatika",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S2 Cybersecurity And Digital Forensic",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S3 Informatika",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "4",
          field3: "Fakultas Ekonomi Bisnis",
          field4: "S1 Mbti International Class (Ict Bussines)",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Manajemen Bisnis Telekomunikasi",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Akuntansi",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Akuntansi (International Class)",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Leisure Management",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S2 Manajemen",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S2 Manajemen Pjj",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "5",
          field3: "Fakultas Ekonomi Bisnis",
          field4: "S1 Administrasi Bisnis",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Administrasi Bisnis (International Class)",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Ilmu Komunikasi",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Ilmu Komunikasi (International Class)",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Digital Public Relation",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Digital Content Broadcasting",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S2 Administrasi Bisnis",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S2 Ilmu Komunikasi",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "6",
          field3: "Fakultas Industri Kreatif",
          field4: "S1 Desain Komunikasi Visual",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Desain Komunikasi Visual (International Class)",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Product Innovation & Management",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Desain Interior",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Kriya (Fashion And Textile Design)",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Creative Arts (Intermedia Visual Art)",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S2 Desain",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "7",
          field3: "Fakultas Ilmu Terapan",
          field4: "D3 Teknik Telekomunikasi (Digital Conectivity)",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "D3 Teknik Informatika",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "D3 Sistem Informasi",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "D3 Sistem Informasi Akuntansi",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "D3 Teknik Komputer",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "D3 Digital Marketing",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "D3 Hospitality And Culinary Art",
          field5: "",
          field6: ""
        },
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "S1 Terapan Teknologi Rekayasa Multimedia",
          field5: "",
          field6: ""
        }
      ],
    };
  },

};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Germania+One&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,500;0,700;1,900&display=swap");
.myFontTitle {
  font-family: "Germania One";
  font-size: 40px;
  line-height: 50px;
  text-align: center;
  color: black;
}

.myFontSubtitle {
  font-family: "Battambang";
  font-style: normal;
  font-weight: 400;

  line-height: 30.71px;
  text-align: left;
  color: black;
}
.myFontButton {
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
