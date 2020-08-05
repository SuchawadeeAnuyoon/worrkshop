<template>
  <v-app>
    <v-card min-width="50%" class="mx-auto">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">ลำดับ</th>
              <th class="text-left">ชื่อ</th>
              <th class="text-right">เงินเดือน</th>
              <th class="text-right">ประกันสังคม</th>
              <th class="text-right">เงินกองทุน</th>
              <th class="text-right">เงินเดือนสุทธิ</th>
              <th class="text-right"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in employee" :key="item.name">
              <td class="text-center">{{ i + 1 }}</td>
              <td class="text-left">{{ item.name }}</td>
              <td class="text-right">{{ item.salary }}</td>
              <td class="text-right">{{ item.fee }}</td>
              <td class="text-right">{{ item.fund }}</td>
              <td class="text-right">{{ item.balanceoffund }}</td>
              <td><v-icon @click="print(item)">print</v-icon></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">สลิปเงินเดือน</v-card-title>

        <v-card-text class="text-left">
          ชื่อ: {{ name }} <br>
          เงินเดือน: {{ salary }} <br>
          ประกันสังคม: {{ fee }} <br>
          เงินกองทุน: {{ fund }} <br>
          เงินเดือนสุทธิ: {{ balanceoffund }}
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
    <!-- <div class="about">
    <h1>This is an about page</h1>
  </div> -->
  </v-app>
</template>
<script>
import data_employee from "../plugins/data";
export default {
  data() {
    return {
      employee: data_employee.employee,
      dialog: false,
      name: null,
      salary: null,
      fund: null,
      fee: null,
      balanceoffund: null
    };
  },
  mounted() {
    this.calculate()
  },
  methods:{
    calculate() {
      let fee = null

      this.employee.forEach(e => {
        if(e.salary < 15000) {
          fee = e.salary*0.05;
        }
        else{
          fee = 15000*0.05;
        }
        e.bonus = e.salary*0.5
        e.fee = fee
        e.balance = (e.salary-fee)+e.bonus
        e.deduction = e.salary-fee
        e.fund = e.deduction*0.05
        e.balanceoffund = e.salary-e.fee-e.fund
      });
    },
    print(item) {
      console.log(`ชื่อ: ${item.name}`);
      console.log(`เงินเดือน: ${item.salary}`);
      this.dialog = true;
      this.name = item.name;
      this.salary = item.salary;
      this.fund = item.fund;
      this.fee = item.fee;
      this.balanceoffund = item.balanceoffund;
    },
  }
};
</script>