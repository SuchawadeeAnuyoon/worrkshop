<template>
  <v-app>
    <v-card min-width="50%" class="mx-auto">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">ลำดับ</th>
              <th class="text-left">ชื่อ</th>
              <th class="text-right">เงินเดือน (หลังหักประกันสังคม)</th>
              <th class="text-right">เงินกองทุน</th>
              <th class="text-right">บริษัทช่วยสมทบ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in employee" :key="item.name">
              <td class="text-center">{{ i + 1 }}</td>
              <td class="text-left">{{ item.name }}</td>
              <td class="text-right">{{ item.deduction }}</td>
              <td class="text-right">{{ item.fund }}</td>
              <td class="text-right">{{ item.company }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td class="text-left font-weight-black">รวมทั้งสิ้น</td>
              <td class="text-right font-weight-black"></td>
              <td class="text-right font-weight-black">{{ totalfund }}</td>
              <td class="text-right font-weight-black">{{ totalcompany }}</td>
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
      totalfund: null,
      totalcompany: null
    };
  },
  mounted() {
    this.calculate()
    this.employee.forEach(e => {
      this.total+=e.salary
      this.totalfund+=e.fund
      this.totalcompany+=e.company
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
        e.deduction = e.salary-fee
        e.fund = e.deduction*0.05
        e.company =e.deduction*0.02
      });
    }
  }
};
</script>