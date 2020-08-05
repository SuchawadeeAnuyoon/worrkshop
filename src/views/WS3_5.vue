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
              <th class="text-right">ค่าประกันสังคม</th>
              <th class="text-right">โบนัส</th>
              <th class="text-right">เงินเดือนสุทธิ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in employee" :key="item.name">
              <td class="text-center">{{ i + 1 }}</td>
              <td class="text-left">{{ item.name }}</td>
              <td class="text-right">{{ item.salary }}</td>
              <td class="text-right">{{ item.fee }}</td>
              <td class="text-right">{{ item.bonus }}</td>
              <td class="text-right">{{ item.balance }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td class="text-left font-weight-black">รวมทั้งสิ้น</td>
              <td class="text-right font-weight-black">{{ total }}</td>
              <td class="text-right font-weight-black">{{ totalfee }}</td>
              <td class="text-right font-weight-black">{{ totalbonus }}</td>
            </tr>
          </tfoot>
        </template>
      </v-simple-table>
    </v-card>
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
      total: null,
      totalfee: null,
      totalbonus: null
    };
  },
  mounted() {
    this.calculate()
    this.employee.forEach(e => {
      this.total+=e.salary
      this.totalfee+=e.fee
      this.totalbonus+=e.bonus
    });
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
      });
    }
  }
};
</script>
