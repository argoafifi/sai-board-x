<template>
  <div>
    <div class="d-flex">
      <v-card class="ma-5" width="300" height="80" color="#E3E3E3">
        <v-card-text class="text-center pa-2">
          <div class="text-h7 card-text">JUMLAH SURVEI</div>
          <p class="text-h5 text--primary">2.500</p>
        </v-card-text>
      </v-card>
      <v-card class="ma-5" width="300" height="80" color="#E3E3E3">
        <v-card-text class="text-center pa-2">
          <div class="text-h7">JUMLAH KATEGORI</div>
          <p class="text-h5 text--primary">2.500</p>
        </v-card-text>
      </v-card>
    </div>
    <!-- Chart Survei -->
    <div class="d-flex justify-center mt-5">
      <div class="text-center chart">
        <h4>JUMLAH SURVEI PER RESPONDEN</h4>
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
        <h4>JUMLAH SURVEI PER PERIODE</h4>
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
    <!-- TABEL SURVEI -->
    <v-card class="mt-10">
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
export default {
  name: "HomePage",

  data() {
    return {
      options: {
        chart: {
          type: "bar",
        },
      },
      series: [
        {
          data: [
            {
              x: "Mahasiswa",
              y: 20,
              fillColor: "#ED7D31",
            },
            {
              x: "Wisudawan",
              y: 18,
              fillColor: "#EDCF31",
            },
            {
              x: "Pegawai",
              y: 7,
              fillColor: "#023915",
            },
            {
              x: "Mitra",
              y: 10,
              fillColor: "#AFEFB2",
            },
            {
              x: "Orang Tua",
              y: 3,
              fillColor: "#43A8F1",
            },
            {
              x: "CSI",
              y: 5,
              fillColor: "#EE2424",
            },
          ],
        },
      ],
      series2: [
        {
          data: [
            {
              x: "19/20 Ganjil",
              y: 20,
              fillColor: "#ED7D31",
            },
            {
              x: "19/20 Genap",
              y: 18,
              fillColor: "#EDCF31",
            },
            {
              x: "20/21 Ganjil",
              y: 15,
              fillColor: "#023915",
            },
            {
              x: "20/21 Genap",
              y: 27,
              fillColor: "#AFEFB2",
            },
            {
              x: "21/22 Ganjil",
              y: 15,
              fillColor: "#43A8F1",
            },
            {
              x: "21/22 Ganjil",
              y: 20,
              fillColor: "#EE2424",
            },
          ],
        },
      ],
      search: "",
      headers: [
        {
          text: "No",
          align: "start",
          sortable: false,
          value: "nomor",
        },
        { text: "Nama Survei", value: "namaSurvei" },
        { text: "Link Laporan", value: "linkLaporan", sortable: false },
        { text: "Action", value: "action", sortable: false },
      ],
      tableHome: [
        {
          nomor: 1,
          namaSurvei: "Edom Ganjil 2021-2011",
          linkLaporan: "Link",
          action: "View",
        },
        {
          nomor: 2,
          namaSurvei: "CSI 2021 - Unit",
          linkLaporan: "Link",
          action: "View",
        },
        {
          nomor: 3,
          namaSurvei: "Kepuasan Orang Tua",
          linkLaporan: "Link",
          action: "View",
        },
        {
          nomor: 4,
          namaSurvei: "Kepuasan Wisudawan",
          linkLaporan: "Link",
          action: "View",
        },
        {
          nomor: 5,
          namaSurvei: "Kepuasan Mhs Genap 2021/2022",
          linkLaporan: "abc",
          action: "View",
        },
        {
          nomor: 5,
          namaSurvei: "Visi Misi - Mahasiswa",
          linkLaporan: "Link",
          action: "View",
        },
        {
          nomor: 6,
          namaSurvei: "EDOM Medio Genap 2021/2022",
          linkLaporan: "Link",
          action: "View",
        },
        {
          nomor: 7,
          namaSurvei: "EDOM Genap 2021/2022",
          linkLaporan: "Link",
          action: "View",
        },
      ],
    };
  },
};
</script>

<style>
.chart {
  width: 600px;
  height: 400px;
}
</style>
