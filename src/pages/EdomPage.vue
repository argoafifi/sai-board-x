<template>
  <div>
    <div class="d-flex">
      <v-col cols="2">
        <v-select
        :items="tahun"
        label="Tahun"
        ></v-select>
      </v-col>
      <v-col cols="2">
        <v-select
        :items="fakultas"
        label="Fakultas"
        ></v-select>
      </v-col>
      <v-col cols="2">
        <v-select
        :items="prodi"
        label="Prodi"
        ></v-select>
      </v-col>
    </div>
    <div class="d-flex">
      <v-card class="ma-5" width="300" height="80" color="#E3E3E3">
        <v-card-text class="text-center pa-2">
          <div class="text-h7 card-text">JUMLAH RESPONDEN</div>
          <p class="text-h5 text--primary">2.500</p>
        </v-card-text>
      </v-card>
      <v-card class="ma-5" width="300" height="80" color="#E3E3E3">
        <v-card-text class="text-center pa-2">
          <div class="text-h7">RATA-RATA SKOR</div>
          <p class="text-h5 text--primary">89.95</p>
        </v-card-text>
      </v-card>
    </div>
    <!-- Chart Survei -->
    <div class="d-flex justify-center mt-5">
      <div class="text-center chart">
        <h4>SKOR FAKULTAS</h4>
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
        <h4>PERSENTASE FAKULTAS</h4>
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
    <div class="mx-4">
      <div class="mt-10 text-decoration-underline">
      Download Table as
      </div>
      <v-row class="mt-2">
        <div>
          <v-btn class="myButton mx-2 white--text" color="#EE2424">PDF</v-btn>
          <v-btn class="myButton mx-2 white--text" color="#EE2424">Excel</v-btn>
          <v-btn class="myButton mx-2 white--text" color="#EE2424">CSV</v-btn>
        </div>
        <v-spacer></v-spacer>
        <div>
          <!-- <v-dialog
          v-model="dialog"
          max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="myButton primary"
                dark
                class="mx-2"
                v-bind="attrs"
                v-on="on"
              >
                Add
              </v-btn>
            </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Nama Survei"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                      <v-select
                        v-model="editedItem.tahunEdom"
                        :items=tahun
                        label="Tahun Edom"
                        required
                      ></v-select>
                    </v-col>
                    <v-col cols="12">
                      <v-file-input
                        v-model="editedItem.link"
                        show-size
                        counter
                        multiple
                        label="Pilih File"
                      ></v-file-input>
                    </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog> -->
          <v-btn @click="directInputEdom" class="primary myButton mx-2">Add</v-btn>
          <v-btn class="myButton mx-2" color="#1AC635">Copy</v-btn>
          <v-btn class="myButton mx-2" color="#A29E9E">Print</v-btn>
        </div>
      </v-row>
    </div>
    <!-- TABEL SURVEI -->
    <v-card class="mt-8">
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
        :items="survei"
        :search="search"
      >
        <template v-slot:top>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h6">Are you sure you want to delete this item?</v-card-title>
              <v-card-text>
                This action will delete your selected survey permanently.
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
    </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "EdomPage",

  data() {
    return {
      tahun: ['2021/2022 - Ganjil', '2021/2022 - Genap', '2022/2023 - Ganjil'],
      fakultas: ['FTE', 'FIF', 'FRI'],
      prodi: ['S1 Teknik Telekomunikasi', 'S1 Teknik Elektro', 'S1 Teknik Komputer', 'S1 Teknik Fisika', 'S2 Teknik Elektro', 'S2 Teknik Elektro PJJ', 'S2 Teknik Sistem Energi'],
      options: {
        chart: {
          type: "bar",
        },
      },
      series: [
        {
          data: [
            {
              x: "FTE",
              y: 90,
              fillColor: "#ED7D31",
            },
            {
              x: "FIF",
              y: 88,
              fillColor: "#EDCF31",
            },
            {
              x: "FRI",
              y: 92,
              fillColor: "#023915",
            },
            {
              x: "FKB",
              y: 85,
              fillColor: "#AFEFB2",
            },
            {
              x: "FEB",
              y: 80,
              fillColor: "#43A8F1",
            },
            {
              x: "FIK",
              y: 95,
              fillColor: "#EE2424",
            },
            {
              x: "FIT",
              y: 89,
              fillColor: "#245CEE",
            },
          ],
        },
      ],
      series2: [
        {
          data: [
            {
              x: "FTE",
              y: 90,
              fillColor: "#ED7D31",
            },
            {
              x: "FIF",
              y: 88,
              fillColor: "#EDCF31",
            },
            {
              x: "FRI",
              y: 92,
              fillColor: "#023915",
            },
            {
              x: "FKB",
              y: 85,
              fillColor: "#AFEFB2",
            },
            {
              x: "FEB",
              y: 80,
              fillColor: "#43A8F1",
            },
            {
              x: "FIK",
              y: 95,
              fillColor: "#EE2424",
            },
            {
              x: "FIT",
              y: 89,
              fillColor: "#245CEE",
            },
          ],
        },
      ],
      search: "",
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Nama Survei',
          align: 'start',
          value: 'name',
        },
        { text: 'Tahun', value: 'tahunEdom' },
        { text: 'Link Laporan', value: 'link', sortable: false },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      survei: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        link: null,
        tahunEdom: '',
      },
      defaultItem: {
        name: '',
        link: null,
        tahunEdom: '',
      },
    };
  },

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Input Data' : 'Edit Data'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },
    

    methods: {
      directInputEdom() {
        this.$router.push({
          path: "/input",
        });
      },
      initialize () {
        this.survei = [
          {
            name: 'Edom Ganjil 2021-2011',
            tahunEdom: '2021/2022 - Ganjil',
            link: 'Link',
          },
          {
            name: 'CSI 2021 - Unit',
            tahunEdom: '2021/2022 - Ganjil',
            link: 'Link',
          },
          {
            name: 'Kepuasan Orang Tua',
            tahunEdom: '2021/2022 - Genap',
            link: 'Link',
          },
          {
            name: 'Kepuasan Wisudawan',
            tahunEdom: '2021/2022 - Ganjil',
            link: 'Link',
          },
          {
            name: 'Kepuasan Mhs Genap 2021/2022	',
            tahunEdom: '2022/2023 - Ganjil',
            link: 'Link',
          },
          {
            name: 'Visi Misi - Mahasiswa',
            tahunEdom: '2021/2022 - Genap',
            link: 'Link',
          },
          {
            name: 'EDOM Medio Genap 2021/2022',
            tahunEdom: '2022/2023 - Ganjil',
            link: 'Link',
          },
          {
            name: 'EDOM Genap 2021/2022',
            tahunEdom: '2021/2022 - Ganjil',
            link: 'Link',
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.survei.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.survei.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.survei.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.survei[this.editedIndex], this.editedItem)
        } else {
          this.survei.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>

<style>
.chart {
  width: 600px;
  height: 400px;
}
.myButton {
  width: 82px;
  font-family: 'Battambang';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 23px;
  border-radius: 5px;
}

</style>
