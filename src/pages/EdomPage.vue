<template>
  <div>
    <div class="pa-3 d-flex">
      <v-col class="d-flex" sm="2">
        <v-autocomplete
          :items="tahunSelect"
          label="Tahun Akademik"
          placeholder="Tahun Akademik"
          outlined
          dense
        ></v-autocomplete>
      </v-col>
      <v-col class="d-flex" sm="2">
        <v-autocomplete
          :items="kategoriSelect"
          label="Kategori Dosen"
          placeholder="Kategori Dosen"
          required
          outlined
          dense
        ></v-autocomplete>
      </v-col>
      <v-col class="d-flex" sm="2">
        <v-autocomplete
          :items="fakultasSelect"
          label="Fakultas"
          placeholder="Fakultas"
          required
          outlined
          dense
        ></v-autocomplete>
      </v-col>
      <v-col class="d-flex" sm="2">
        <v-autocomplete
          :items="prodiSelect"
          label="Prodi"
          placeholder="Prodi"
          required
          outlined
          dense
        ></v-autocomplete>
      </v-col>
    </div>
    <div class="d-flex">
      <v-card class="ma-5" width="300" height="80" color="#E3E3E3">
        <v-card-text class="text-center pa-2">
          <div class="text-h7 card-text text--primary">RATA - RATA SKOR</div>
          <p class="text-h5 text--primary">89.95</p>
        </v-card-text>
      </v-card>
      <v-card class="ma-5" width="300" height="80" color="#E3E3E3">
        <v-card-text class="text-center pa-2">
          <div class="text-h7 text--primary">RATA - RATA PERSENTASE</div>
          <p class="text-h5 text--primary">90.21%</p>
        </v-card-text>
      </v-card>
    </div>
    <!-- Chart Survei -->
    <div class="d-flex justify-center mt-5">
      <div class="text-center chart">
        <h4>RATA - RATA SKOR EDOM</h4>
        <apexchart
          width="100%"
          height="100%"
          type="bar"
          :options="options"
          :series="series"
        >
        </apexchart>
      </div>

      <div class="text-center chart">
        <h4>RATA - RATA PERSENTASE EDOM</h4>
        <apexchart
          width="100%"
          height="100%"
          type="bar"
          :options="options"
          :series="series2"
        >
        </apexchart>
      </div>
    </div>
    <div class="d-flex justify-center mt-10">
      <div class="text-center justify-center chart">
        <h4>RATA - RATA PERSENTASE KATEGORI</h4>
        <apexchart
          width="100%"
          height="100%"
          type="radar"
          :options="options"
          :series="kategori"
        >
        </apexchart>
      </div>
    </div>

    <!-- Button Button -->
    <div
      class="mt-10 text-decoration-underline d-flex flex-column justifiy-space-between"
    >
      Download as :
    </div>
    <div class="mt-2 d-flex">
      <div>
        <v-btn depressed class="mx-2" color="error" @click="generatePDF">
          PDF
        </v-btn>
        <vue-excel-xlsx
        :data="tableHome"
        :columns="columns"
        :file-name="'Tabel Edom'"
        :file-type="'xlsx'"
        :sheet-name="'sheetname'"
        >
        <v-btn depressed class="mx-2" color="error"> Excel </v-btn>
        </vue-excel-xlsx>
        <v-btn depressed class="mx-2" color="error" @click="generateExport"> CSV </v-btn>
      </div>
      <v-spacer></v-spacer>
      <div>
        <v-btn depressed class="primary mx-2 button" @click="directInputEdom">
          Add
        </v-btn>
        <v-btn depressed class="mx-2 button" color="#1AC635"> Copy </v-btn>
        <v-btn depressed class="mx-2" color="#A19E9E"> Print </v-btn>
      </div>
    </div>
    <!-- TABEL SURVEI -->
    <v-card class="mt-2">
      <v-card-title>
        TABEL SURVEI TELKOM UNIVERSITY
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="tableHome"
        :search="search"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
import VueExcelXlsx from "vue-excel-xlsx";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import ExportExcelSheetVueJs from "export-excel-sheet-vue-js";
import Vue from "vue";
import JsonCSV from "vue-json-csv";
import exportExcelCsv from 'export-excel-csv'

Vue.component("downloadCsv", JsonCSV);
Vue.use(VueExcelXlsx);
Vue.use(ExportExcelSheetVueJs);

export default {
  name: "edom",

  data() {
    return {
      heading: "LAPORAN SURVEI EVALUASI DOSEN OLEH MAHASISWA",
      moreText: [
        "Tabel menampilkan rata-rata skor kepuasan untuk setiap Program Studi di Universitas Telkom pada survei EDOM",
      ],
      options: {
        chart: {
          type: "bar",
        },
      },
      // Bar Chart Rata - Rata Skor Edom
      series: [
        {
          data: [
            {
              x: "FEB",
              y: 85.15,
              fillColor: "#ED7D31",
            },
            {
              x: "FIF",
              y: 88.22,
              fillColor: "#EDCF31",
            },
            {
              x: "FIK",
              y: 87.96,
              fillColor: "#023915",
            },
            {
              x: "FIT",
              y: 88.37,
              fillColor: "#8F67FF",
            },
            {
              x: "FKB",
              y: 86.54,
              fillColor: "#43A8F1",
            },
            {
              x: "FRI",
              y: 86.7,
              fillColor: "#EE2424",
            },
            {
              x: "FTE",
              y: 87.51,
              fillColor: "#FF67DE",
            },
          ],
        },
      ],
      // Bar Chart Rata - Rata Skor Edom

      // Bar Chart Rata - Rata Persentase Edom
      series2: [
        {
          data: [
            {
              x: "FEB",
              y: 85.07,
              fillColor: "#ED7D31",
            },
            {
              x: "FIF",
              y: 88.47,
              fillColor: "#EDCF31",
            },
            {
              x: "FIK",
              y: 88.14,
              fillColor: "#023915",
            },
            {
              x: "FIT",
              y: 89.24,
              fillColor: "#8F67FF",
            },
            {
              x: "FKB",
              y: 86.44,
              fillColor: "#43A8F1",
            },
            {
              x: "FRI",
              y: 86.86,
              fillColor: "#EE2424",
            },
            {
              x: "FTE",
              y: 87.62,
              fillColor: "#FF67DE",
            },
          ],
        },
      ],
      // Bar Chart Rata - Rata Persentase Edom

      // Radar Chart Kategori
      kategori: [
        {
          data: [
            {
              x: "SRP",
              y: 88.25,
              fillColor: "#ED7D31",
            },
            {
              x: "SD",
              y: 87.63,
              fillColor: "#EDCF31",
            },
            {
              x: "MP",
              y: 87.81,
              fillColor: "#023915",
            },
            {
              x: "KPP",
              y: 87.72,
              fillColor: "#8F67FF",
            },
            {
              x: "T",
              y: 87.43,
              fillColor: "#43A8F1",
            },
            {
              x: "CP",
              y: 87.37,
              fillColor: "#EE2424",
            },
            {
              x: "PD",
              y: 87.53,
              fillColor: "#EE2424",
            },
            {
              x: "AoE",
              y: 87.33,
              fillColor: "#EE2424",
            },
          ],
        },
      ],
      // Radar Chart Kategori

      search: "",
      headers: [
        { text: "Fakultas", value: "fakultas" },
        { text: "Prodi", value: "prodi", sortable: false },
        {
          text: "Rata-rata Skor (dalam skala 100)",
          value: "rata_skor",
        },
        {
          text: "Persentase Responden Puas atau Sangat Puas",
          value: "rata_persentase",
        },
      ],
      columns : [
                    {
                        label: "FAKULTAS",
                        field: "fakultas",
                    },
                    {
                        label: "PRODI",
                        field: "prodi",
                    },
                    {
                        label: "RATA-RATA SKOR (DALAM SKOR 100)",
                        field: "rata_skor",
                    },
                    {
                        label: "PERSENTASE RESPONDEN PUAS & SANGAT PUAS",
                        field: "rata_persentase",
                    }
                ],
      tableHome: [
        {
          fakultas: "FTE",
          prodi: "S1 Teknik Telekomunikasi",
          rata_skor: "90,64",
          rata_persentase: "90,25",
        },
        {
          fakultas: "FTE",
          prodi: "S1 Teknik Telekomunikasi",
          rata_skor: "90,03",
          rata_persentase: "90,25",
        },
        {
          fakultas: "FTE",
          prodi: "S1 Teknik Telekomunikasi",
          rata_skor: "90,03",
          rata_persentase: "90,25",
        },
        {
          fakultas: "FTE",
          prodi: "S1 Teknik Telekomunikasi",
          rata_skor: "90,03",
          rata_persentase: "90,25",
        },
        {
          fakultas: "FTE",
          prodi: "S1 Teknik Telekomunikasi",
          rata_skor: "90,03",
          rata_persentase: "90,25",
        },
        {
          fakultas: "FTE",
          prodi: "S1 Teknik Telekomunikasi",
          rata_skor: "90,03",
          rata_persentase: "90,25",
        },
        {
          fakultas: "FTE",
          prodi: "S1 Teknik Telekomunikasi",
          rata_skor: "90,03",
          rata_persentase: "90,25",
        },
        {
          fakultas: "FTE",
          prodi: "S1 Teknik Telekomunikasi",
          rata_skor: "90,03",
          rata_persentase: "90,25",
        },
      ],
      tahunSelect: [
        "2019/2020 - Genap",
        "2020/2021 - Ganjil",
        "2020/2021 - Genap",
        "2021/2022 - Ganjil",
      ],
      kategoriSelect: [
        "Dosen Pegawai Tetap",
        "Dosen Luar Biasa",
        "Dosen Profesional Full-Time",
        "Dosen Profesional Part-Time",
        "Dosen Perbantuan Kopertis",
        "Dosen Perbantuan Telkom",
      ],
      fakultasSelect: [
        "Fakultas Teknik Elektro",
        "Fakultas Teknik Informatika",
        "Fakultas Teknik Industri",
        "Fakultas Ekonomi dan Bisnis",
        "Fakultas Komunikasi dan Bisnis",
        "Fakultas Teknik Industri Kreatif",
        "Fakultas Teknik Ilmu Terapan",
      ],
      prodiSelect: [
        "S1 Teknik Elektro",
        "S1 Teknik Telekomunikasi",
        "S1 Teknik Komputer",
        "S1 Teknik Fisika",
      ],
      // GENERATOR CSV
      json_data: [
        {
          name: "Tony Peña",
          city: "New York",
          country: "United States",
          birthdate: "1978-03-15",
          phone: {
            mobile: "1-541-754-3010",
            landline: "(541) 754-3010",
          },
        },
        {
          name: "Thessaloniki",
          city: "Athens",
          country: "Greece",
          birthdate: "1987-11-23",
          phone: {
            mobile: "+1 855 275 5071",
            landline: "(2741) 2621-244",
          },
        },
      ],
      // GENERATOR CSV
    };
  },
  // GENERATOR PDF
  methods: {
    directInputEdom() {
      this.$router.push({ name: "InputEdom" });
    },
    generateExport() { //Ini buat yang headersnya beda (Paling baru nemu) bisa CSV/XLS
      const heads = {
        fakultas:'Fakultas',
        prodi:'Prodi',
        rata_skor: 'Rata-Rata Skor (dalam skala 100)',
        rata_persentase: 'Persentase Responden Puas atau Sangat Puas'
      }
      const data = this.tableHome
      exportExcelCsv(heads, data ,`Tabel Edom.csv`)
    },
    generatePDF() {
      const columns = [
        { title: "Fakultas", dataKey: "fakultas" },
        { title: "Prodi", dataKey: "prodi" },
        { title: "Rata-rata Skor (dalam skala 100)", dataKey: "rata_skor" },
        {
          title: "Persentase Responden Puas atau Sangat Puas",
          dataKey: "rata_persentase",
        },
      ];
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "in",
        format: "letter",
      });
      doc.setFontSize(16).text(this.heading, 0.5, 1.0);
      // create a line under heading
      doc.setLineWidth(0.01).line(0.5, 1.1, 8.0, 1.1);
      doc
        .setFont("helvetica")
        .setFontSize(11)
        .text(this.moreText, 0.5, 1.5, { align: "left", maxWidth: "7.5" });
      doc.autoTable({
        columns,
        body: this.tableHome,
        margin: { left: 0.5, top: 1.75, bottom: 1.25 },
      });
      doc.save(`Tabel EDoM.pdf`);
    },
  },
  // GENERATOR PDF
};
</script>

<style>
.chart {
  width: 800px;
  height: 400px;
}
</style>
