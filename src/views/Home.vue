<template>
  <v-app>
    <v-card min-width="50%" class="mx-auto">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">ลำดับ</th>
              <th class="text-left">ชื่อ</th>
              <th class="text-left">เงินเดือน</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in employee" :key="item.name">
              <td class="text-center">{{ i + 1 }}</td>
              <td class="text-left">{{ item.name }}</td>
              <td class="text-left">{{ item.salary }}</td>
              <td><v-icon @click="print(item)">print</v-icon></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td class="text-left font-weight-black">รวมทั้งสิ้น</td>
              <td class="text-left font-weight-black">{{total}}</td>
            </tr>
          </tfoot>
        </template>
      </v-simple-table>
    </v-card>
    <div class="my-2">
      <v-btn @click="printall" color="primary">พิมพ์สลิปทั้งหมด</v-btn>
    </div>

    <!-- dialog -->
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">สลิปเงินเดือน</v-card-title>

        <v-card-text class="text-left">
          ชื่อ: {{ name }} <br>
          เงินเดือน: {{ salary }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="red darken-1" text @click="dialog = false">
            ยกเลิก
          </v-btn>

          <v-btn color="green darken-1" text @click="dialog = false">
            พิมพ์
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogall" max-width="290">
      <v-card>
        <v-card-title class="headline">สลิปเงินเดือน</v-card-title>
        
        <div v-for="(item, i) in employee" :key="i">
          <v-card-text class="text-left">
          ลำดับ: {{ i+1 }} <br>
          ชื่อ: {{ item.name }} <br>
          เงินเดือน: {{ item.salary }} <br>
          -----------------------------
          </v-card-text>
        </div>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="red darken-1" text @click="dialogall = false">
            ยกเลิก
          </v-btn>

          <v-btn color="green darken-1" text @click="dialogall = false">
            พิมพ์
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import data_employee from "../plugins/data";
export default {
  data() {
    return {
      employee: data_employee.employee,
      dialog: false,
      dialogall: false,
      name: null,
      salary: null,
      total: null,
    };
  },
  mounted() {
    this.employee.forEach(e => {
      this.total+=e.salary
    });
  },
  methods: {
    print(item) {
      console.log(`ชื่อ: ${item.name}`);
      console.log(`เงินเดือน: ${item.salary}`);
      this.dialog = true;
      this.name = item.name;
      this.salary = item.salary;
    },

    printall() {
      this.dialogall = true
    }
  },
};
</script>
