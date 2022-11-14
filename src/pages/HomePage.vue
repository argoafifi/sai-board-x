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
      <v-data-table :headers="headers" :items="tableHome" :search="search">
        <template v-slot:top>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h6"
                >Apakah Yakin Akan Menghapus Item Ini?</v-card-title
              >
              <v-card-text>
                Tekan OK akan menghapus data secara permanent.
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)"> mdi-eye </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
      </v-data-table>
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
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: "No",
          align: "start",
          sortable: false,
          value: "nomor",
        },
        { text: "Nama Survei", value: "namaSurvei" },
        { text: "Link Laporan", value: "linkLaporan", sortable: false },
        { text: "Actions", value: "actions", sortable: false },
      ],
      tableHome: [],
      editedIndex: -1,
      editedItem: {
        nomor: "",
        namaSurvei: "",
        linkLaporan: null,
      },
      defaultItem: {
        nomor: "",
        namaSurvei: "",
        linkLaporan: null,
      },
    };
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Input Data" : "Edit Data";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Input Data" : "Edit Data";
    },
  },

  methods: {
    initialize() {
      this.tableHome = [
        {
          nomor: 1,
          namaSurvei: "Edom Ganjil 2021-2011",
          linkLaporan: "Link",
        },
        {
          nomor: 2,
          namaSurvei: "CSI 2021 - Unit",
          linkLaporan: "Link",
        },
        {
          nomor: 3,
          namaSurvei: "Kepuasan Orang Tua",
          linkLaporan: "Link",
        },
        {
          nomor: 4,
          namaSurvei: "Kepuasan Wisudawan",
          linkLaporan: "Link",
        },
        {
          nomor: 5,
          namaSurvei: "Kepuasan Mhs Genap 2021/2022",
          linkLaporan: "abc",
        },
        {
          nomor: 5,
          namaSurvei: "Visi Misi - Mahasiswa",
          linkLaporan: "Link",
        },
        {
          nomor: 6,
          namaSurvei: "EDOM Medio Genap 2021/2022",
          linkLaporan: "Link",
        },
        {
          nomor: 7,
          namaSurvei: "EDOM Genap 2021/2022",
          linkLaporan: "Link",
        },
      ];
    },
    editItem(item) {
      this.editedIndex = this.tableHome.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.tableHome.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.tableHome.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.tableHome[this.editedIndex], this.editedItem);
      } else {
        this.tableHome.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style>
.chart {
  width: 600px;
  height: 400px;
}
</style>
